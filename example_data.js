window.EXAMPLE_DATA = {
 "source": {
  "title": "Geographically-weighted weakly supervised Bayesian High-Resolution Transformer for 200 m resolution pan-Arctic sea ice concentration mapping and uncertainty estimation using Sentinel-1, RCM, and AMSR2 data",
  "doi": "10.1016/j.isprsjprs.2026.05.032",
  "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.032",
  "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
  "abstract": "Although high-resolution mapping of pan-Arctic sea ice with reliable corresponding uncertainty is essential for operational sea ice concentration (SIC) charting, it is a difficult task due to the subtle nature of ice signature features, inexact SIC labels, model uncertainty, and data heterogeneity. This study presents a novel Bayesian High-Resolution Transformer approach for 200-meter resolution pan-Arctic SIC mapping and uncertainty quantification using Sentinel-1, RADARSAT Constellation Mission (RCM), and Advanced Microwave Scanning Radiometer 2 (AMSR2) data. First, we design a high-resolution Transformer with global and local modules to better detect subtle sea ice features. Second, to address low-resolution, inexact SIC labels, we introduce a geographically weighted weakly supervised loss that trains at the region level rather than pixel level, prioritizing pure open water and ice pack signatures while mitigating the impact of ambiguity in the marginal ice zone. Third, we design a Bayesian extension of the proposed Transformer that treats model parameters as random variables to better quantify epistemic uncertainty. Fourth, we fuse the three data sources (Sentinel-1, RCM, and A"
 },
 "report": "Technically, the paper touches upon the use of deep learning in remote sensing, specifically addressing the measurement of epistemic model uncertainty through a Bayesian Neural Network (BNN) extension utilizing Bayes-by-Backpropagation. Ethically, this technical focus intersects with safety-critical Earth observation contexts, notably in imaging processes designed to support maritime safety by identifying hazardous ice features like leads, floes, and ice boundaries. However, the actions performed by the paper serve to evaluate or discuss these capabilities rather than directly deploy a harmful system. \n\nThe auditor found no ethical risks actually instantiated by this paper’s specific contributions; therefore, there are no direct audit findings against the methodology. The identified risk mechanisms serve strictly as disclosures of broader category-level vulnerabilities. Specifically, there is a moderately grounded potential disclosure that the unreliability of algorithmic predictions in safety-critical tasks can promote systemic failures in disaster or safety monitoring, yielding potential physical harm. This disclosure is strictly conditional upon the use of these models in active Earth observation imaging processes. Because the paper does not trigger this failure, it is reported solely as a generalized concern associated with this class of technology.\n\nRegarding safeguards, the paper discusses uncertainty quantification as a mitigation strategy, noting that quantifying epistemic uncertainty in Bayesian Neural Networks can inhibit the unreliability of algorithmic predictions, particularly under the condition of high-risk remote sensing applications. Ultimately, the auditor’s judgment concludes that there are zero instantiated risks and two potential risk disclosures. Both the disclosed risks and the corresponding mitigation are moderately grounded in the text but remain entirely theoretical in the context of this specific study. Consequently, the paper does not actively introduce an ethical hazard, and its contributions do not manifest any direct harm narrative.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (uncertainty quantification:Mitigation) --INHIBITS--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)  <graph_exact | quote✗ | disclosure>  (when: high-risk remote sensing applications)\n- (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --PROMOTES--> (systemic failure in disaster or safety monitoring:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | disclosure>  (when: Earth observation imaging process)\n\nEntities by type:\n  RiskMechanism: unreliability of algorithmic predictions in safety-critical tasks\n  EthicalImpact: systemic failure in disaster or safety monitoring\n  Mitigation: uncertainty quantification",
 "triples": [
  {
   "head": {
    "entity": "uncertainty quantification",
    "type": "Mitigation"
   },
   "edge": {
    "relation_type": "INHIBITS",
    "condition": "high-risk remote sensing applications",
    "evidence": "The system incorporates Bayesian uncertainty estimation to quantify model confidence, which mitigates the unreliability of predictions when dealing with complex, high-risk operational mapping tasks.",
    "input_quote": "A Bayesian Neural Network (BNN) extension using Bayes-by-Backpropagation (BBB) with a diagonal, mean-field Gaussian variational posterior to quantify epistemic (model) uncertainty.",
    "provenance": "graph_exact",
    "quote_verified": false,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "unreliability of algorithmic predictions in safety-critical tasks",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain000"
  },
  {
   "head": {
    "entity": "unreliability of algorithmic predictions in safety-critical tasks",
    "type": "RiskMechanism"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "Earth observation imaging process",
    "evidence": "In the context of Arctic sea route navigation, unreliable spatial predictions of ice features could lead to systemic failures in monitoring hazards, thereby putting maritime vessels and crews at physical risk.",
    "input_quote": "The technology directly supports maritime safety by identifying hazardous ice features like leads, floes, and ice boundaries that are typically missed by lower-resolution products.",
    "provenance": "graph_exact",
    "quote_verified": false,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "systemic failure in disaster or safety monitoring",
    "type": "EthicalImpact",
    "harm_family": "PhysicalHarm"
   },
   "chain_id": "audit::chain000"
  }
 ],
 "graph_paths": [
  "(accidental revelation of sensitive information:RiskMechanism) --[PROMOTES]--> (location-based privacy violation:EthicalImpact)",
  "(uncertainty quantification:Mitigation) --[INHIBITS | Condition: high-risk remote sensing applications]--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)",
  "(deep learning models for population mapping:TechnicalFeature) --[PROMOTES | Condition: Under conditions of spatial heterogeneity and varying neighborhood sizes]--> (systematic bias in population distribution estimation:RiskMechanism)",
  "(adversarial perturbations:TechnicalFeature) --[PROMOTES | Condition: In the context of automated driving or critical image classification]--> (prediction of incorrect results in high-risk grs applications:RiskMechanism)",
  "(large language models:TechnicalFeature) --[PROMOTES | Condition: When trained on massive volumes of geographic text and contextual data]--> (inference of mobility patterns and re-identification:RiskMechanism)",
  "(population-based heuristics in toponym resolution:TechnicalFeature) --[PROMOTES | Condition: During place name disambiguation (toponym resolution)]--> (algorithmic bias against low-population areas:RiskMechanism)",
  "(prediction of incorrect results in high-risk grs applications:RiskMechanism) --[PROMOTES | Condition: When applied to safety-critical missions like disaster response]--> (threats to human safety in emergency situations:EthicalImpact)",
  "(adversarial perturbations:TechnicalFeature) --[PROMOTES | Condition: inference stage of machine learning models]--> (misleading machine learning models to yield incorrect predictions:RiskMechanism)",
  "(large-scale greenhouse gas emissions:RiskMechanism) --[PROMOTES | Condition: Global scope affecting communities most vulnerable to climate change]--> (climate change consequences affecting vulnerable populations:EthicalImpact)",
  "(misleading machine learning models to yield incorrect predictions:RiskMechanism) --[PROMOTES | Condition: safety-critical geoscience and remote sensing tasks]--> (safety risks in safety-critical earth observation missions:EthicalImpact)",
  "(algorithmic bias against low-population areas:RiskMechanism) --[PROMOTES]--> (systematic exclusion of smaller communities from accurate geographic representation:EthicalImpact)",
  "(high-complexity geoai models:TechnicalFeature) --[PROMOTES]--> (large-scale greenhouse gas emissions:RiskMechanism)",
  "(systematic reporting of sustainability indicators:Mitigation) --[INHIBITS | Condition: Follow-up GeoAI research and model adoption]--> (large-scale greenhouse gas emissions:RiskMechanism)",
  "(systematic bias in population distribution estimation:RiskMechanism) --[PROMOTES | Condition: When models are used to facilitate resource allocation and disaster preparedness]--> (inequitable resource allocation and service access:EthicalImpact)",
  "(ai risk estimation models:TechnicalFeature) --[PROMOTES | Condition: When applied to health insurance rate setting]--> (individual risk profiling based on location and driving data:RiskMechanism)",
  "(inference of mobility patterns and re-identification:RiskMechanism) --[PROMOTES]--> (loss of control over personal location information:EthicalImpact)",
  "(exposure of sensitive group data facilitating re-identification:RiskMechanism) --[PROMOTES]--> (violation of group informational privacy:EthicalImpact)",
  "(ubiquitous positioning hardware in mobile devices:TechnicalFeature) --[PROMOTES]--> (systematic and secret recording of individual movement:RiskMechanism)",
  "(individual risk profiling based on location and driving data:RiskMechanism) --[PROMOTES]--> (economic loss from increased insurance costs:EthicalImpact)",
  "(unintentional sensitive knowledge discovery:RiskMechanism) --[PROMOTES | Condition: If detailed demographic clusters become accessible to the public]--> (violation of group informational privacy:EthicalImpact)",
  "(systematic and secret recording of individual movement:RiskMechanism) --[PROMOTES]--> (loss of individual geoprivacy:EthicalImpact)",
  "(high-resolution uav imagery:TechnicalFeature) --[PROMOTES | Condition: When resolution is fine enough to discern individuals]--> (accidental revelation of sensitive information:RiskMechanism)",
  "(computer vision analysis of visual data involving human faces:TechnicalFeature) --[PROMOTES | Condition: In urban analysis and data collection tasks]--> (violation of group informational privacy:EthicalImpact)",
  "(unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --[PROMOTES | Condition: Earth observation imaging process]--> (systemic failure in disaster or safety monitoring:EthicalImpact)"
 ],
 "track2_count": 3,
 "generated": "2026-06-22",
 "public_safe": true
};
