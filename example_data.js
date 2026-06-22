window.EXAMPLE_DATA = {
 "input": "We build a GeoAI system that infers each user's home and workplace from anonymized mobile-phone GPS trajectories. Our method re-identifies individuals by linking the inferred home locations against public voter rolls, and we then fuse the de-anonymized traces with census demographics to predict household socioeconomic status at building-block resolution. We release these per-household socioeconomic maps publicly for urban planning, without obtaining consent from the residents whose movements were tracked. Because the GPS sampling is sparse in low-income districts, the predictions are systematically less accurate there.",
 "report": "The paper presents a technical methodology focused on the inference of spatial patterns from anonymized mobile-phone GPS trajectories, the mosaicking of disparate geodata using spatial references and AI, and black-box spatial analysis. These techniques inherently intersect with sensitive ethical domains, as the processing of highly sensitive location information, the fusion of diverse data sources to map socioeconomic traits, and the handling of multidimensional geographic variables across varying populations all touch upon core issues of geoprivacy and inferential fairness. \n\nRegarding causal risk reasoning, the auditor found no ethical risk actually instantiated by this paper's contribution. The identified pathways are purely disclosures of category-level risks associated with the paper's methods, rather than actions performed by the authors. For instance, the mosaicking of disparate geodata strongly promotes unintentional sensitive knowledge discovery when combining seemingly unrelated datasets creates new information products; if detailed demographic clusters become accessible to the public, this can subsequently cause a violation of group informational privacy. Similarly, inference from anonymized mobile-phone GPS trajectories carries a moderate potential to cause the disclosure of sensitive geospatial information when identifying individuals and inferring sensitive personal attributes. If home locations, workspaces, and daily trajectories are exposed, this strongly risks geospatial privacy violations. Furthermore, black-box spatial analysis is strongly associated with inadvertent inferential errors when complex multidimensional geographic variables are processed without transparent guardrails, which can amplify social disparities in the absence of ethical guides to provide checks and balances.\n\nThe provided extraction does not identify any mitigations deployed by the authors to neutralize these concerns. Overall, the auditor's judgment is based on an assessment of six evaluated triples: zero are instantiated as actual audit findings, and all six function solely as potential category-level disclosures. While the paper employs techniques that are heavily associated with geospatial privacy violations and equal rights violations under specific conditions, the audit framework confirms these risks are not instantiated by the paper's own contribution, meaning no actionable ethical findings are raised against the manuscript itself.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (mosaicking disparate geodata using spatial references and ai:TechnicalFeature) --PROMOTES--> (unintentional sensitive knowledge discovery:RiskMechanism)  <graph_exact | quote✓ | disclosure>  (when: When combining seemingly unrelated datasets creates new information products)\n- (unintentional sensitive knowledge discovery:RiskMechanism) --PROMOTES--> (violation of group informational privacy:EthicalImpact) [PrivacyViolation]  <graph_exact | quote✓ | disclosure>  (when: If detailed demographic clusters become accessible to the public)\n- (inference from anonymized mobile-phone gps trajectories:TechnicalFeature) --PROMOTES--> (disclosure of sensitive geospatial information:RiskMechanism)  <graph_anchored | quote✓ | disclosure>  (when: When identifying individuals and inferring sensitive personal attributes from mobility data)\n- (disclosure of sensitive geospatial information:RiskMechanism) --PROMOTES--> (geospatial privacy violation:EthicalImpact) [PrivacyViolation]  <graph_exact | quote✓ | disclosure>  (when: When exposing home locations, workspaces, and daily trajectories)\n- (black-box spatial analysis:TechnicalFeature) --PROMOTES--> (inadvertent inferential error:RiskMechanism)  <graph_exact | quote✓ | disclosure>  (when: When complex multidimensional geographic variables are processed without transparent guardrails)\n- (inadvertent inferential error:RiskMechanism) --PROMOTES--> (amplification of social disparities:EthicalImpact) [EqualRightsViolation]  <graph_exact | quote✓ | disclosure>  (when: In the absence of ethical guides to provide checks and balances on data and methods)\n\nEntities by type:\n  TechnicalFeature: mosaicking disparate geodata using spatial references and ai, inference from anonymized mobile-phone gps trajectories, black-box spatial analysis\n  RiskMechanism: unintentional sensitive knowledge discovery, disclosure of sensitive geospatial information, inadvertent inferential error\n  EthicalImpact: violation of group informational privacy, geospatial privacy violation, amplification of social disparities",
 "triples": [
  {
   "head": {
    "entity": "mosaicking disparate geodata using spatial references and ai",
    "type": "TechnicalFeature"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "When combining seemingly unrelated datasets creates new information products",
    "evidence": "The methodology explicitly links inferred GPS locations with public voter rolls and census demographics to generate a new high-resolution socioeconomic map.",
    "input_quote": "Our method re-identifies individuals by linking the inferred home locations against public voter rolls, and we then fuse the de-anonymized traces with census demographics to predict household socioeconomic status at building-block resolution.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "unintentional sensitive knowledge discovery",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain000"
  },
  {
   "head": {
    "entity": "unintentional sensitive knowledge discovery",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "If detailed demographic clusters become accessible to the public",
    "evidence": "The public release of detailed, building-block resolution socioeconomic maps derived from tracked movements exposes collective demographic and locational details, violating group privacy.",
    "input_quote": "We release these per-household socioeconomic maps publicly for urban planning, without obtaining consent from the residents whose movements were tracked.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "violation of group informational privacy",
    "type": "EthicalImpact",
    "harm_family": "PrivacyViolation"
   },
   "chain_id": "audit::chain000"
  },
  {
   "head": {
    "entity": "inference from anonymized mobile-phone gps trajectories",
    "type": "TechnicalFeature"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "When identifying individuals and inferring sensitive personal attributes from mobility data",
    "evidence": "The GeoAI system is specifically designed to extract highly sensitive personal anchors, such as homes and workplaces, from supposedly anonymous raw GPS data.",
    "input_quote": "We build a GeoAI system that infers each user's home and workplace from anonymized mobile-phone GPS trajectories.",
    "provenance": "graph_anchored",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "disclosure of sensitive geospatial information",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain001"
  },
  {
   "head": {
    "entity": "disclosure of sensitive geospatial information",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "When exposing home locations, workspaces, and daily trajectories",
    "evidence": "Releasing spatial data derived directly from inferred home and workplace trajectories without obtaining user consent represents a direct compromise of individual geospatial privacy.",
    "input_quote": "We release these per-household socioeconomic maps publicly for urban planning, without obtaining consent from the residents whose movements were tracked.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "geospatial privacy violation",
    "type": "EthicalImpact",
    "harm_family": "PrivacyViolation"
   },
   "chain_id": "audit::chain001"
  },
  {
   "head": {
    "entity": "black-box spatial analysis",
    "type": "TechnicalFeature"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "When complex multidimensional geographic variables are processed without transparent guardrails",
    "evidence": "The spatial analysis model relies on uneven, sparse GPS sampling, leading directly to systematic performance degradation and inferential errors in specific geographic contexts.",
    "input_quote": "Because the GPS sampling is sparse in low-income districts, the predictions are systematically less accurate there.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "inadvertent inferential error",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain002"
  },
  {
   "head": {
    "entity": "inadvertent inferential error",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "In the absence of ethical guides to provide checks and balances on data and methods",
    "evidence": "By producing systematically inferior predictions in low-income districts, the system embeds bias into urban planning tools, thereby amplifying existing socioeconomic inequalities.",
    "input_quote": "Because the GPS sampling is sparse in low-income districts, the predictions are systematically less accurate there.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "amplification of social disparities",
    "type": "EthicalImpact",
    "harm_family": "EqualRightsViolation"
   },
   "chain_id": "audit::chain002"
  }
 ],
 "graph_paths": [
  "(generation of misleading geospatial information and pseudo-words:RiskMechanism) --[PROMOTES | Condition: particularly in sensitive political or cultural contexts]--> (spread of geospatial misinformation and distortion of reality:EthicalImpact)",
  "(provenance-aware evaluation protocols and curation:Mitigation) --[INHIBITS | Condition: By tagging data origins and documenting the proportion of synthetic data in training sets.]--> (geoai collapse:RiskMechanism)",
  "(geoai collapse:RiskMechanism) --[PROMOTES | Condition: During multigenerational training cycles where models amplify dominant statistical patterns and filter out rare features.]--> (systemic bias against rare or minority place-based features:EthicalImpact)",
  "(location-based services and gnss:TechnicalFeature) --[PROMOTES | Condition: When used as a mechanism for external surveillance and authority]--> (geoslavery:RiskMechanism)",
  "(black-box spatial analysis:TechnicalFeature) --[PROMOTES | Condition: When complex multidimensional geographic variables are processed without transparent guardrails.]--> (inadvertent inferential error:RiskMechanism)",
  "(resnet-18 based ai-generated map detector:Mitigation) --[INHIBITS | Condition: when applied to identify potential misinformation on social media]--> (spread of geospatial misinformation and distortion of reality:EthicalImpact)",
  "(subjective spatial and non-spatial data grouping:TechnicalFeature) --[PROMOTES]--> (subjective narrative reinforcement:RiskMechanism)",
  "(geomasking and spatial-temporal cloaking:Mitigation) --[INHIBITS]--> (privacy exposure of location data:RiskMechanism)",
  "(geoai foundation models:TechnicalFeature) --[PROMOTES | Condition: During pre-training and fine-tuning stages with geospatial data]--> (disclosure of sensitive geospatial information:RiskMechanism)",
  "(recursive training on synthetic geospatial data:TechnicalFeature) --[PROMOTES | Condition: When AI-generated images or model-derived analytical outputs are used as training data for subsequent generations without screening.]--> (geoai collapse:RiskMechanism)",
  "(subjective narrative reinforcement:RiskMechanism) --[PROMOTES]--> (statistical gerrymandering and social stereotype reinforcement:EthicalImpact)",
  "(dalle 2 generative map synthesis:TechnicalFeature) --[PROMOTES | Condition: when models generate pseudo-words or non-existent provinces]--> (generation of misleading geospatial information and pseudo-words:RiskMechanism)",
  "(mosaicking disparate geodata using spatial references and ai:TechnicalFeature) --[PROMOTES | Condition: When combining seemingly unrelated datasets creates new information products]--> (unintentional sensitive knowledge discovery:RiskMechanism)",
  "(human-in-the-loop geoai:Mitigation) --[INHIBITS | Condition: By allowing cartographers to intervene in output quality and visual assessment]--> (unethical or inaccurate machine-generated maps:EthicalImpact)",
  "(disclosure of sensitive geospatial information:RiskMechanism) --[PROMOTES | Condition: When exposing home locations, workspaces, and daily trajectories]--> (geospatial privacy violation:EthicalImpact)",
  "(multi-grouping visualization:Mitigation) --[INHIBITS | Condition: By comparing outcomes across different grouping schemes]--> (subjective narrative reinforcement:RiskMechanism)",
  "(user privacy protection methods geomasking k-anonymization differential privacy:Mitigation) --[INHIBITS | Condition: In human mobility studies seeking to balance data utility and privacy]--> (disclosure of sensitive geospatial information:RiskMechanism)",
  "(unintentional sensitive knowledge discovery:RiskMechanism) --[PROMOTES | Condition: If detailed demographic clusters become accessible to the public]--> (violation of group informational privacy:EthicalImpact)",
  "(geoslavery:RiskMechanism) --[PROMOTES | Condition: When technology is leveraged to exert coercive control over individual movement and autonomy]--> (violation of individual liberty and autonomy:EthicalImpact)",
  "(inadvertent inferential error:RiskMechanism) --[PROMOTES | Condition: In the absence of ethical guides to provide checks and balances on data and methods.]--> (amplification of social disparities:EthicalImpact)"
 ],
 "track2_count": 3,
 "generated": "2026-06-22",
 "public_safe": true
};
