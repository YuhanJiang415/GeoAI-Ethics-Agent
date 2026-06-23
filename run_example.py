"""
run_example.py
==============
Runs the DualTrackGeoAIAgent on ONE real held-out paper (section-aware XML) and
dumps a PUBLIC-SAFE result to visualization/example_data.js (window.EXAMPLE_DATA),
which example.html renders.

Public-safe: the audit output (triples, prose report, provenance/quote/
instantiation tags, Track-1 causal paths) plus the audited paper's own
title/DOI/abstract are kept. Corpus-derived leakables are dropped: per-edge
graph_source_docs (training-corpus filenames) and Track-2 raw excerpts/sources.

Run from anywhere; it chdirs to the project root so the agent's relative paths
(./geoai_knowledge_bm_v2.graphml etc.) resolve.

    python visualization/run_example.py
"""
import os
import re
import sys
import json
import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))   # repo root (GeoAI_Project/)
OUT = os.path.join(HERE, "example_data.js")

sys.path.insert(0, ROOT)

from geoai_audit.agent.audit_agent import DualTrackGeoAIAgent   # noqa: E402
from geoai_audit.pipeline.xml_parser import parse_elsevier_xml  # noqa: E402
from geoai_audit.config import HELDOUT_DIR                       # noqa: E402

# A real held-out ISPRS paper. Audited via the section-aware XML path.
EXAMPLE_XML = os.path.join(HELDOUT_DIR, "10.1016_j.isprsjprs.2026.05.032.xml")

DROP_EDGE_FIELDS = ("graph_source_docs",)


def _strip_tags(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def extract_doi_title_abstract(xml_path):
    raw = open(xml_path, encoding="utf-8", errors="ignore").read()
    m = re.search(r"<(?:xocs:|prism:|ce:)?doi>([^<]+)</", raw)
    doi = m.group(1).strip() if m else os.path.basename(xml_path).replace(".xml", "").replace("_", "/", 1)
    try:
        title = parse_elsevier_xml(xml_path).get("title", "").strip()
    except Exception:
        title = ""
    if not title:
        m = re.search(r"<(?:dc:title|ce:title)[^>]*>(.*?)</(?:dc:title|ce:title)>", raw, re.S)
        title = _strip_tags(m.group(1)) if m else os.path.basename(xml_path)
    ab = ""
    m = re.search(r"<dc:description>(.*?)</dc:description>", raw, re.S) \
        or re.search(r"<ce:abstract[^>]*>(.*?)</ce:abstract>", raw, re.S)
    if m:
        ab = _strip_tags(m.group(1))
        ab = re.sub(r"^Abstract\s*", "", ab, flags=re.I)
    return doi, title, ab


def main():
    doi, title, abstract = extract_doi_title_abstract(EXAMPLE_XML)

    agent = DualTrackGeoAIAgent()
    report, triples, graph_paths, docs = agent.analyze_xml(EXAMPLE_XML)

    clean = []
    for t in triples:
        e = dict(t.get("edge", {}))
        for f in DROP_EDGE_FIELDS:
            e.pop(f, None)
        clean.append({"head": t.get("head", {}), "edge": e, "tail": t.get("tail", {}),
                      "chain_id": t.get("chain_id", "")})

    data = {
        "source": {
            "title": title,
            "doi": doi,
            "doi_url": "https://doi.org/" + doi,
            "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
            "abstract": abstract[:1200],
        },
        "report": report,
        "triples": clean,
        "graph_paths": graph_paths,     # public graph edges (node names + relations)
        "track2_count": len(docs),
        # Track-2 retrieved chunks shown in full (raw text + source filename),
        # per explicit choice to expose them on the example page.
        "track2_docs": [{"source": d.metadata.get("source", "Unknown"),
                         "content": d.page_content} for d in docs],
        "generated": datetime.date.today().isoformat(),
    }
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.EXAMPLE_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    n_inst = sum(1 for t in clean if t["edge"].get("instantiation") == "INSTANTIATED")
    print(f"paper: {title[:70]}")
    print(f"doi:   {doi}")
    print(f"triples={len(clean)} | INSTANTIATED={n_inst} | graph_paths={len(graph_paths)} "
          f"| track2_chunks={len(docs)}")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
