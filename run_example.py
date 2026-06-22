"""
run_example.py
==============
Runs the DualTrackGeoAIAgent on ONE example system description and dumps a
PUBLIC-SAFE result to visualization/example_data.js (window.EXAMPLE_DATA),
which example.html renders.

Public-safe: the audit output (triples, prose report, provenance/quote/
instantiation tags, Track-1 causal paths — all of which are the agent's
reasoning about the INPUT we provide) is kept. Corpus-derived leakables are
dropped: per-edge graph_source_docs (corpus filenames) and Track-2 raw
document excerpts/sources.

Run from anywhere; it chdirs to the project root so the agent's relative
paths (./geoai_knowledge_bm_v2.graphml etc.) resolve.

    python visualization/run_example.py
"""
import os
import sys
import json
import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))
OUT = os.path.join(HERE, "example_data.js")

os.chdir(ROOT)
sys.path.insert(0, ROOT)

from graph_agent_answer_v2 import DualTrackGeoAIAgent  # noqa: E402

# A synthetic GeoAI system description (NOT corpus text) chosen to exercise
# the privacy / re-identification harm chains the graph is rich in.
EXAMPLE_INPUT = (
    "We build a GeoAI system that infers each user's home and workplace from anonymized "
    "mobile-phone GPS trajectories. Our method re-identifies individuals by linking the "
    "inferred home locations against public voter rolls, and we then fuse the de-anonymized "
    "traces with census demographics to predict household socioeconomic status at "
    "building-block resolution. We release these per-household socioeconomic maps publicly "
    "for urban planning, without obtaining consent from the residents whose movements were "
    "tracked. Because the GPS sampling is sparse in low-income districts, the predictions "
    "are systematically less accurate there."
)

# fields stripped from each triple before publishing (corpus-leaking)
DROP_EDGE_FIELDS = ("graph_source_docs",)


def main():
    agent = DualTrackGeoAIAgent()
    report, triples, graph_paths, docs = agent.analyze_text(EXAMPLE_INPUT)

    clean = []
    for t in triples:
        e = dict(t.get("edge", {}))
        for f in DROP_EDGE_FIELDS:
            e.pop(f, None)
        clean.append({"head": t.get("head", {}), "edge": e, "tail": t.get("tail", {}),
                      "chain_id": t.get("chain_id", "")})

    data = {
        "input": EXAMPLE_INPUT,
        "report": report,
        "triples": clean,
        "graph_paths": graph_paths,          # public graph edges (node names + relations)
        "track2_count": len(docs),           # count only — no corpus text / filenames
        "generated": datetime.date.today().isoformat(),
        "public_safe": True,
    }
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.EXAMPLE_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    n_inst = sum(1 for t in clean if t["edge"].get("instantiation") == "INSTANTIATED")
    print(f"triples={len(clean)} | INSTANTIATED={n_inst} | graph_paths={len(graph_paths)} "
          f"| track2_chunks={len(docs)}")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
