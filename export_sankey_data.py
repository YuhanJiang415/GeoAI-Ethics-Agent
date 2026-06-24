"""
export_sankey_data.py
=====================
Builds the concept-level Sankey for the GeoAI ethics graph and writes
visualization/sankey_data.js (window.SANKEY_DATA = {...}) for sankey.html.

The Sankey aggregates the PROMOTES (harm-generating) flow into three stages:

    Technical feature  ->  Risk mechanism  ->  Harm category

Nodes are rolled up to their hierarchy *concept* (the IS_A parent from
hierarchy.json) wherever one exists, so wording variants collapse and the
figure stays legible. Ethical impacts are rolled up to their harm_family.
Link width = summed edge weight (≈ how many papers assert that pathway).

    python visualization/export_sankey_data.py
"""
import os
import sys
import json
import networkx as nx
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
MERGED = os.path.join(ROOT, "artifacts", "geoai_knowledge_merged.graphml")
HIER = os.path.join(ROOT, "artifacts", "hierarchy.json")
OUT = os.path.join(HERE, "sankey_data.js")

STAGE = {"TechnicalFeature": "0", "RiskMechanism": "1"}   # harm category is stage "2"
TYPE_COLOR = {"TechnicalFeature": "#16a34a", "RiskMechanism": "#d97706"}
HARM_COLOR = {
    "PrivacyViolation": "#ff6b6b", "EqualRightsViolation": "#ffa94d",
    "PhysicalHarm": "#ff8787", "EconomicLoss": "#eab308",
    "PsychologicalHarm": "#ba68c8", "Unspecified": "#cbd5e1",
}


def main():
    G = nx.read_graphml(MERGED)
    parent = {h["child"]: h["parent"] for h in json.load(open(HIER, encoding="utf-8"))}
    ntype = {n: G.nodes[n].get("type", "Unknown") for n in G}
    harm = {n: (G.nodes[n].get("harm_family") or "Unspecified") for n in G}

    def concept(n):                       # roll a node up to its umbrella concept
        return parent.get(n, n)

    def nid(stage, label):                # unique id per stage; label shown via formatter
        return f"{stage}|{label}"

    flows = defaultdict(float)            # (src_id, dst_id) -> weight
    node_meta = {}                        # id -> {label, stage, color, harm}

    def reg(stage, label, color, harm=""):
        i = nid(stage, label)
        node_meta[i] = {"label": label, "stage": stage, "color": color, "harm": harm}
        return i

    for u, v, d in G.edges(data=True):
        if d.get("relation") != "PROMOTES":
            continue
        w = float(d.get("weight", 1) or 1)
        tu, tv = ntype.get(u), ntype.get(v)
        if tu == "TechnicalFeature" and tv == "RiskMechanism":
            a = reg("0", concept(u), TYPE_COLOR["TechnicalFeature"])
            b = reg("1", concept(v), TYPE_COLOR["RiskMechanism"])
            flows[(a, b)] += w
        elif tu == "RiskMechanism" and tv == "EthicalImpact":
            a = reg("1", concept(u), TYPE_COLOR["RiskMechanism"])
            b = reg("2", harm[v], HARM_COLOR.get(harm[v], "#cbd5e1"), harm[v])
            flows[(a, b)] += w
        elif tu == "TechnicalFeature" and tv == "EthicalImpact":
            a = reg("0", concept(u), TYPE_COLOR["TechnicalFeature"])
            b = reg("2", harm[v], HARM_COLOR.get(harm[v], "#cbd5e1"), harm[v])
            flows[(a, b)] += w

    # --- keep the figure legible: top-N per left stage, bucket the tail ---
    TOP_TF, TOP_RM = 14, 18
    out_w, thru_w = defaultdict(float), defaultdict(float)
    for (s, t), v in flows.items():
        out_w[s] += v
        thru_w[s] += v
        thru_w[t] += v

    def stage(i):
        return i.split("|", 1)[0]

    tf_ids = [i for i in node_meta if stage(i) == "0"]
    rm_ids = [i for i in node_meta if stage(i) == "1"]
    keep_tf = set(sorted(tf_ids, key=lambda i: -out_w[i])[:TOP_TF])
    keep_rm = set(sorted(rm_ids, key=lambda i: -thru_w[i])[:TOP_RM])
    OTHER_TF, OTHER_RM = "0|other technical features", "1|other mechanisms"

    def remap(i):
        if stage(i) == "0" and i not in keep_tf:
            return OTHER_TF
        if stage(i) == "1" and i not in keep_rm:
            return OTHER_RM
        return i

    bucketed = defaultdict(float)
    for (s, t), v in flows.items():
        bucketed[(remap(s), remap(t))] += v

    present = {x for st in bucketed for x in st}
    meta = dict(node_meta)
    meta[OTHER_TF] = {"label": f"other technical features (+{len(tf_ids) - len(keep_tf)})",
                      "stage": "0", "color": "#bfe3c0"}
    meta[OTHER_RM] = {"label": f"other mechanisms (+{len(rm_ids) - len(keep_rm)})",
                      "stage": "1", "color": "#ecd3a8"}

    nodes = [{"name": i, "label": meta[i]["label"], "stage": meta[i]["stage"],
              "itemStyle": {"color": meta[i]["color"]}} for i in present]
    links = [{"source": s, "target": t, "value": round(v, 1)} for (s, t), v in bucketed.items()]

    print(f"Sankey: {len(nodes)} nodes (TF kept {len(keep_tf)}/{len(tf_ids)}, "
          f"RM kept {len(keep_rm)}/{len(rm_ids)}, Harm 5), {len(links)} links")

    data = {"nodes": nodes, "links": links}
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.SANKEY_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
