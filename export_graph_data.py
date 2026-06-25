"""
export_graph_data.py
====================
Reads the built knowledge graph (../geoai_knowledge_bm_v2.graphml) and writes
visualization/graph_data.js as a single `window.GRAPH_DATA = {...}` blob that
knowledge_graph.html loads directly (no server / no fetch -> works from file://).

Two modes:
  (default) PUBLIC-SAFE  -> strips fields that are NOT needed to render the graph
                            but would leak research data if published:
                              edge.sources    (corpus paper filenames)
                              edge.evidence   (LLM extraction justification text)
                              edge.conditions (condition text)
                            The graph still renders fully (nodes, edges, types,
                            harm families). This is what gets committed/published.
  --full                 -> keeps every field. Use for LOCAL inspection only;
                            do NOT commit the resulting file to a public repo.

Re-run after rebuilding the graph (python -m geoai_audit.pipeline.build_graph).

    python visualization/export_graph_data.py            # public-safe (publishable)
    python visualization/export_graph_data.py --full     # full data (local only)
"""
import os
import sys
import json
import networkx as nx
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)                       # repo root (GeoAI_Project/)
sys.path.insert(0, ROOT)
from geoai_audit.config import GRAPH_FILE as GRAPH  # single source of truth for paths
OUT = os.path.join(HERE, "graph_data.js")

# fields dropped in public-safe mode (not used to render; would leak data)
SENSITIVE_EDGE_FIELDS = ("sources", "evidence", "conditions")


def _num(x, default=1):
    try:
        return float(x)
    except (TypeError, ValueError):
        return default


# causal stage -> column index for the hierarchical (left-to-right) layout
LEVEL = {"TechnicalFeature": 0, "RiskMechanism": 1, "EthicalImpact": 2,
         "Mitigation": 1, "HarmCategory": 3, "Concept": 1}


def main(full=False, graph_path=None, out_path=None):
    graph = graph_path or GRAPH
    out = out_path or OUT
    if not os.path.exists(graph):
        raise SystemExit(f"Graph not found: {graph}")
    G = nx.read_graphml(graph)

    # merge + hierarchy provenance, so the viz can show what collapsed into what
    art = os.path.join(ROOT, "artifacts")
    merged_from = {}
    res_path = os.path.join(art, "entity_resolution.json")
    if os.path.exists(res_path):
        for entry in json.load(open(res_path, encoding="utf-8")):
            for g in entry.get("decision_groups", []):
                mem, canon = g.get("members", []), g.get("canonical")
                if len(mem) > 1:
                    merged_from[canon] = [m for m in mem if m != canon]
    concept_of = {}
    hier_path = os.path.join(art, "hierarchy.json")
    if os.path.exists(hier_path):
        for h in json.load(open(hier_path, encoding="utf-8")):
            concept_of[h["child"]] = h["parent"]
    concept_parents = set(concept_of.values())   # upper / parent concept nodes

    nodes = []
    for n, d in G.nodes(data=True):
        nd = {
            "id": n,
            "label": d.get("label", n),
            "type": d.get("type", "Unknown"),
            "level": LEVEL.get(d.get("type", "Unknown"), 1),
            "harm_family": d.get("harm_family", "") or "",
            "degree": int(G.degree(n)),
            "indeg": int(G.in_degree(n)),
            "outdeg": int(G.out_degree(n)),
        }
        if merged_from.get(n):
            nd["merged_from"] = merged_from[n]
        if concept_of.get(n):
            nd["concept"] = concept_of[n]
        if n in concept_parents:
            nd["is_concept"] = True
        nodes.append(nd)

    edges = []
    for u, v, d in G.edges(data=True):
        if d.get("derived") == "lifted":   # skip redundant concept-level causal duplicates
            continue
        e = {
            "from": u,
            "to": v,
            "relation": d.get("relation", "RELATED_TO"),
            "weight": _num(d.get("weight", 1)),
        }
        if full:
            e["sources"] = d.get("sources", "")
            e["conditions"] = d.get("conditions", "")
            e["evidence"] = d.get("evidence", "")
        edges.append(e)

    stats = {
        "nodes": G.number_of_nodes(),
        "edges": len(edges),
        "merged_nodes": sum(1 for nd in nodes if nd.get("merged_from")),
        "by_type": dict(Counter(nd["type"] for nd in nodes)),
        "by_relation": dict(Counter(e["relation"] for e in edges)),
        "by_harm": dict(Counter(nd["harm_family"] for nd in nodes if nd["harm_family"] and nd["type"] != "HarmCategory")),
        "top_degree": sorted(
            [{"label": nd["label"], "type": nd["type"], "degree": nd["degree"]} for nd in nodes],
            key=lambda x: x["degree"], reverse=True)[:12],
    }

    data = {"stats": stats, "nodes": nodes, "edges": edges, "public_safe": not full}
    with open(out, "w", encoding="utf-8") as f:
        f.write("window.GRAPH_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    mode = "FULL (local only — do not publish)" if full else "PUBLIC-SAFE (publishable)"
    print(json.dumps(stats, indent=2, ensure_ascii=False))
    print(f"\nMode: {mode}")
    print(f"Wrote {out}")


def _arg(flag):
    a = sys.argv
    return a[a.index(flag) + 1] if flag in a and a.index(flag) + 1 < len(a) else None


if __name__ == "__main__":
    main(full=("--full" in sys.argv), graph_path=_arg("--graph"), out_path=_arg("--out"))
