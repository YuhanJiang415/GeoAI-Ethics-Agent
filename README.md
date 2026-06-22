# GeoAI Ethics Auditor — Visualizations

Interactive visualizations for a master's-thesis project on **GeoAI ethics auditing** — a
dual-track system that distills GeoAI-ethics papers into a causal knowledge graph + vector
store, then audits new papers against both.

🔗 **Live site:** https://yuhanjiang415.github.io/GeoAI-Ethics-Agent/

## Contents

| File | What it shows |
|------|---------------|
| `index.html` | Landing page linking the two views |
| `workflow.html` | The whole pipeline — offline build → online dual-track agent → 3 verification gates → entry points. Click any block for details. |
| `example.html` | A real audit run on one example system description — validated triples with provenance / quote / audit-vs-disclosure tags + the prose report. Data is public-safe (corpus sources/excerpts omitted). |
| `run_example.py` | Regenerates `example_data.js` by running the agent on the example input. |
| `knowledge_graph.html` | The built causal graph (301 nodes / 207 edges), fully interactive: drag nodes, search, filter by type, click any node/edge to inspect its role, type, harm family, relation and connections. |
| `graph_data.js` | Graph data exported from the source `.graphml` (loaded by the graph view). **Public-safe**: corpus paper names, extraction-evidence text and condition text are stripped out — only what's needed to render the graph is published. |
| `export_graph_data.py` | Regenerates `graph_data.js` from the knowledge graph. |
| `lib/vis-network.min.js` | Vendored [vis-network](https://visjs.github.io/vis-network/) (so the page works fully offline). |

## Run locally

These are static files — just open `index.html` in a browser. No server needed.

## Regenerate the graph data

After rebuilding the knowledge graph in the main project:

```bash
python export_graph_data.py          # public-safe (what gets published)
python export_graph_data.py --full   # full data incl. sources/evidence — LOCAL ONLY, do not commit
```

## Ontology at a glance

Nodes: **TechnicalFeature → RiskMechanism → EthicalImpact**, with **Mitigation** edges.
Relations: `PROMOTES` / `INHIBITS` (and `PREREQUISITE_OF` / `NEGATES`). Every `EthicalImpact`
carries one of five harm families: *PsychologicalHarm, PhysicalHarm, EconomicLoss,
PrivacyViolation, EqualRightsViolation*.
