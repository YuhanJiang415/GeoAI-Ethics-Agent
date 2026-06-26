"""
build_benchmark_data.py
=======================
Runs the DualTrackGeoAIAgent on the 100 annotation papers
(annotation_100_fulltext/<NNN>_<DOI>/<DOI>.xml) and dumps a PUBLIC-SAFE
benchmark to visualization/benchmark_data.js (window.BENCHMARK_DATA), which
benchmark_scoring.html renders for two experts to grade.

Public-safe (same policy as run_example.py): per-paper we keep the audit triples
(head/edge/tail incl. the verbatim quote snippets the audit cites), the generated
prose report, and the paper's own title/DOI/journal/abstract. We DROP per-edge
graph_source_docs (training-corpus filenames) and we do NOT include Track-2 raw
excerpts or any full paper text.

Resumable: each paper's result is checkpointed to
artifacts/eval/annotation_100/<NNN>.json as it finishes; a rerun skips papers
whose checkpoint already exists. So a crash (or stopping to cap spend) mid-run is
cheap to resume — just run the script again.

    # smoke test (cheap): audit only the first 2 papers
    python visualization/build_benchmark_data.py --limit 2

    # full run (~1h, ~$30 in API calls)
    python visualization/build_benchmark_data.py

Run from anywhere; it adds the repo root to sys.path so the agent's imports and
relative paths resolve.
"""
import os
import re
import sys
import json
import glob
import argparse
import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))   # repo root (GeoAI_Project/)
sys.path.insert(0, ROOT)

DEFAULT_PAPERS_DIR = os.path.join(ROOT, "annotation_100_fulltext")
DEFAULT_OUT = os.path.join(HERE, "benchmark_data.js")
CHECKPOINT_DIR = os.path.join(ROOT, "artifacts", "eval", "annotation_100")
RAW_OUT = os.path.join(ROOT, "artifacts", "eval", "annotation_100_raw.json")

# Per-edge fields stripped before publishing (corpus-leakable). Mirrors run_example.py.
DROP_EDGE_FIELDS = ("graph_source_docs",)


def _strip_tags(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def extract_abstract(xml_path):
    """Pull the abstract from the Elsevier XML (dc:description or ce:abstract)."""
    raw = open(xml_path, encoding="utf-8", errors="ignore").read()
    m = re.search(r"<dc:description>(.*?)</dc:description>", raw, re.S) \
        or re.search(r"<ce:abstract[^>]*>(.*?)</ce:abstract>", raw, re.S)
    if not m:
        return ""
    ab = _strip_tags(m.group(1))
    return re.sub(r"^Abstract\s*", "", ab, flags=re.I)


def meta_from_xml(xml_path):
    """Title / journal / year straight from an Elsevier XML (for the held-out set,
    which has no .tags.json). DOI is derived from the filename."""
    raw = open(xml_path, encoding="utf-8", errors="ignore").read()
    m = re.search(r"<(?:xocs:|prism:|ce:)?doi>([^<]+)</", raw)
    doi = m.group(1).strip() if m else \
        os.path.basename(xml_path).replace(".xml", "").replace("_", "/", 1)
    m = re.search(r"<(?:dc:title|ce:title)[^>]*>(.*?)</(?:dc:title|ce:title)>", raw, re.S)
    title = _strip_tags(m.group(1)) if m else ""
    m = re.search(r"<prism:publicationName>([^<]+)</", raw)
    journal = m.group(1).strip() if m else ""
    m = re.search(r"<prism:coverDate>(\d{4})", raw) or re.search(r"<prism:coverDisplayDate>[^<]*?(\d{4})", raw)
    year = m.group(1) if m else ""
    return doi, title, journal, year


def load_meta(paper_dir, xml_path):
    """Title / DOI / journal / year — preferring the curated <DOI>.tags.json."""
    doi = title = journal = year = ""
    tags = glob.glob(os.path.join(paper_dir, "*.tags.json"))
    if tags:
        try:
            t = json.load(open(tags[0], encoding="utf-8"))
            doi = (t.get("doi") or "").strip()
            title = (t.get("title") or "").strip()
            journal = (t.get("journal") or "").strip()
            year = str(t.get("year") or "").strip()
        except Exception:
            pass
    if not doi:
        base = os.path.basename(xml_path).replace(".xml", "")
        doi = base.replace("_", "/", 1)
    return doi, title, journal, year


def clean_triples(triples):
    """Drop corpus-leakable edge fields; keep everything an expert needs to grade."""
    out = []
    for t in triples:
        e = dict(t.get("edge", {}))
        for f in DROP_EDGE_FIELDS:
            e.pop(f, None)
        out.append({"head": t.get("head", {}), "edge": e, "tail": t.get("tail", {}),
                    "chain_id": t.get("chain_id", "")})
    return out


def find_paper_dirs(papers_dir):
    """<NNN>_<DOI>/ dirs that contain an .xml, sorted by the numeric prefix."""
    dirs = []
    for name in os.listdir(papers_dir):
        d = os.path.join(papers_dir, name)
        if not os.path.isdir(d):
            continue
        xmls = glob.glob(os.path.join(d, "*.xml"))
        if not xmls:
            continue
        m = re.match(r"(\d+)", name)
        idx = m.group(1).zfill(3) if m else name
        dirs.append((idx, name, xmls[0]))
    dirs.sort(key=lambda r: r[0])
    return dirs


def audit_one(agent, idx, paper_dir, xml_path):
    """Run the agent on one paper and return the public-safe per-paper record."""
    doi, title, journal, year = load_meta(paper_dir, xml_path)
    abstract = extract_abstract(xml_path)

    report, triples, _graph_paths, _docs = agent.analyze_xml(xml_path)
    clean = clean_triples(triples)
    # Stable per-triple id used as the scoring key in the web page.
    for i, t in enumerate(clean):
        t["tid"] = f"{idx}#{i}"

    return {
        "id": idx,
        "source": {
            "title": title or os.path.basename(xml_path),
            "doi": doi,
            "doi_url": "https://doi.org/" + doi if doi else "",
            "journal": journal,
            "year": year,
            "abstract": abstract[:1500],
        },
        "report": report,
        "triples": clean,
    }


def write_data(records, out_path, raw_path=RAW_OUT):
    """Write the records list to benchmark_data.js (+ a raw JSON backup)."""
    records.sort(key=lambda r: r.get("id", ""))
    data = {"generated": datetime.date.today().isoformat(), "papers": records}
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    with open(raw_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    n_tri = sum(len(r.get("triples", [])) for r in records)
    print(f"\nWrote {len(records)} papers / {n_tri} triples")
    print(f"  -> {out_path}")
    print(f"  -> {raw_path}")


def assemble(out_path):
    """Collect all checkpoints into benchmark_data.js + a raw JSON backup."""
    records = []
    for f in sorted(glob.glob(os.path.join(CHECKPOINT_DIR, "*.json"))):
        try:
            records.append(json.load(open(f, encoding="utf-8")))
        except Exception as ex:
            print(f"  ! skipping unreadable checkpoint {f}: {ex}")
    write_data(records, out_path)


def convert_raw(raw_path, xml_dir, out_path):
    """Convert an existing benchmark raw JSON (from evaluation/benchmark.py — a dict
    keyed by '<doi>.xml' with per-paper 'triples') into benchmark_data.js, WITHOUT
    running the agent. Metadata (title/journal/year/abstract) is read from xml_dir."""
    raw = json.load(open(raw_path, encoding="utf-8"))
    records = []
    for n, fname in enumerate(sorted(raw), 1):
        idx = str(n).zfill(3)
        xml_path = os.path.join(xml_dir, fname)
        if os.path.exists(xml_path):
            doi, title, journal, year = meta_from_xml(xml_path)
            abstract = extract_abstract(xml_path)
        else:
            doi = fname.replace(".xml", "").replace("_", "/", 1)
            title, journal, year, abstract = "", "", "", ""
            print(f"  ! {fname}: no XML in {xml_dir}; metadata limited to DOI")
        clean = clean_triples(raw[fname].get("triples", []))
        for i, t in enumerate(clean):
            t["tid"] = f"{idx}#{i}"
        records.append({
            "id": idx,
            "source": {
                "title": title or fname,
                "doi": doi,
                "doi_url": "https://doi.org/" + doi if doi else "",
                "journal": journal,
                "year": year,
                "abstract": abstract[:1500],
            },
            "report": "",          # raw benchmark JSON carries no prose report
            "triples": clean,
        })
    seed_raw = os.path.join(os.path.dirname(RAW_OUT), "benchmark_data_seed_raw.json")
    write_data(records, out_path, raw_path=seed_raw)


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--papers-dir", default=DEFAULT_PAPERS_DIR,
                    help="dir of <NNN>_<DOI>/ paper folders (default: annotation_100_fulltext)")
    ap.add_argument("--out", default=DEFAULT_OUT,
                    help="output JS data file (default: visualization/benchmark_data.js)")
    ap.add_argument("--limit", type=int, default=0,
                    help="audit only the first N papers (0 = all) — use for a cheap smoke test")
    ap.add_argument("--assemble-only", action="store_true",
                    help="skip auditing; just rebuild the JS file from existing checkpoints")
    ap.add_argument("--from-raw", metavar="PATH",
                    help="seed benchmark_data.js from an existing benchmark raw JSON "
                         "(evaluation/benchmark.py output) — no agent, no API calls")
    ap.add_argument("--xml-dir", default=os.path.join(ROOT, "data", "heldout_xml"),
                    help="where to read paper metadata when using --from-raw "
                         "(default: data/heldout_xml)")
    args = ap.parse_args()

    os.makedirs(CHECKPOINT_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(RAW_OUT), exist_ok=True)

    if args.from_raw:
        convert_raw(args.from_raw, args.xml_dir, args.out)
        return

    if args.assemble_only:
        assemble(args.out)
        return

    papers = find_paper_dirs(args.papers_dir)
    if args.limit:
        papers = papers[:args.limit]
    if not papers:
        print(f"No paper dirs with an .xml found under {args.papers_dir}")
        sys.exit(1)

    from geoai_audit.agent.audit_agent import DualTrackGeoAIAgent  # noqa: E402

    print(f"Loading agent (graph + embeddings + FAISS)…")
    agent = DualTrackGeoAIAgent()          # expensive; built once, reused for all papers

    total = len(papers)
    for n, (idx, name, xml_path) in enumerate(papers, 1):
        ckpt = os.path.join(CHECKPOINT_DIR, f"{idx}.json")
        if os.path.exists(ckpt):
            print(f"[{n}/{total}] {idx} {name} — checkpoint exists, skip")
            continue
        print(f"[{n}/{total}] {idx} {name} — auditing…")
        try:
            rec = audit_one(agent, idx, os.path.dirname(xml_path), xml_path)
        except Exception as ex:
            print(f"  ! FAILED {name}: {ex}")
            continue
        with open(ckpt, "w", encoding="utf-8") as f:
            json.dump(rec, f, ensure_ascii=False, indent=1)
        n_inst = sum(1 for t in rec["triples"]
                     if t["edge"].get("instantiation") == "INSTANTIATED")
        print(f"    triples={len(rec['triples'])} INSTANTIATED={n_inst} -> {os.path.basename(ckpt)}")

    assemble(args.out)


if __name__ == "__main__":
    main()
