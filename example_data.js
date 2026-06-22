window.EXAMPLE_DATA = {
 "source": {
  "title": "Geographically-weighted weakly supervised Bayesian High-Resolution Transformer for 200 m resolution pan-Arctic sea ice concentration mapping and uncertainty estimation using Sentinel-1, RCM, and AMSR2 data",
  "doi": "10.1016/j.isprsjprs.2026.05.032",
  "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.032",
  "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
  "abstract": "Although high-resolution mapping of pan-Arctic sea ice with reliable corresponding uncertainty is essential for operational sea ice concentration (SIC) charting, it is a difficult task due to the subtle nature of ice signature features, inexact SIC labels, model uncertainty, and data heterogeneity. This study presents a novel Bayesian High-Resolution Transformer approach for 200-meter resolution pan-Arctic SIC mapping and uncertainty quantification using Sentinel-1, RADARSAT Constellation Mission (RCM), and Advanced Microwave Scanning Radiometer 2 (AMSR2) data. First, we design a high-resolution Transformer with global and local modules to better detect subtle sea ice features. Second, to address low-resolution, inexact SIC labels, we introduce a geographically weighted weakly supervised loss that trains at the region level rather than pixel level, prioritizing pure open water and ice pack signatures while mitigating the impact of ambiguity in the marginal ice zone. Third, we design a Bayesian extension of the proposed Transformer that treats model parameters as random variables to better quantify epistemic uncertainty. Fourth, we fuse the three data sources (Sentinel-1, RCM, and A"
 },
 "report": "This paper technically introduces a novel Bayesian High-Resolution Transformer for 200-meter pan-Arctic Sea Ice Concentration mapping, fusing Sentinel-1, RADARSAT Constellation Mission, and Advanced Microwave Scanning Radiometer 2 data to support safe ship routing and aid Northern/Arctic communities in adapting to rapidly changing sea ice. In doing so, the research intersects with broader ethical considerations surrounding the use of high-complexity GeoAI models, the inherently black-box nature of deep neural networks, and the deployment of algorithmic predictions within high-risk remote sensing environments. \n\nThe auditor found no ethical risks actually instantiated by this paper's specific contribution; all identified risks act strictly as category-level disclosures associated with this methodological class. First, there is a moderate potential risk that utilizing high-complexity GeoAI models promotes large-scale greenhouse gas emissions, which can subsequently drive climate change consequences affecting vulnerable populations globally. Furthermore, the paper's reliance on deep neural networks carries a strong potential to introduce model opacity and a lack of interpretability. Under the specific condition of high-risk remote sensing applications—such as Earth observation imaging processes deployed to detect hazardous ice boundaries—there is a moderate potential that this opacity, alongside general algorithmic unreliability, could promote threats to safety and robustness. If left unaddressed, these category risks are moderately associated with promoting systemic failures in critical disaster or safety monitoring contexts.\n\nTo address the broader challenges of safety-critical remote sensing, the paper structurally anticipates and addresses algorithmic unreliability by deploying an explicit technical mitigation. By incorporating uncertainty quantification—specifically treating model parameters as random variables with a diagonal, mean-field Gaussian variational posterior to gauge epistemic uncertainty—the approach carries a moderate potential to inhibit algorithmic unreliability in high-risk applications. Ultimately, the auditor judges that with zero instantiated findings and six potential disclosures, the paper successfully avoids triggering direct ethical harms. Instead, the authors proactively manage the inherent opacity of deep learning methodologies with well-grounded, structural mitigations tailored for high-stakes Arctic safety applications.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (uncertainty quantification:Mitigation) --INHIBITS--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)  <graph_exact | quote✗ | disclosure>  (when: high-risk remote sensing applications)\n- (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --PROMOTES--> (systemic failure in disaster or safety monitoring:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | disclosure>  (when: Earth observation imaging process)\n- (high-complexity geoai models:TechnicalFeature) --PROMOTES--> (large-scale greenhouse gas emissions:RiskMechanism)  <graph_exact | quote✗ | disclosure>\n- (large-scale greenhouse gas emissions:RiskMechanism) --PROMOTES--> (climate change consequences affecting vulnerable populations:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | disclosure>  (when: Global scope affecting communities most vulnerable to climate change)\n- (black-box nature of deep neural networks:TechnicalFeature) --PROMOTES--> (model opacity and lack of interpretability:RiskMechanism)  <graph_exact | quote✓ | disclosure>\n- (model opacity and lack of interpretability:RiskMechanism) --PROMOTES--> (threats to safety and robustness in high-risk missions:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | disclosure>  (when: high-risk remote sensing applications)\n\nEntities by type:\n  TechnicalFeature: high-complexity geoai models, black-box nature of deep neural networks\n  RiskMechanism: unreliability of algorithmic predictions in safety-critical tasks, large-scale greenhouse gas emissions, model opacity and lack of interpretability\n  EthicalImpact: systemic failure in disaster or safety monitoring, climate change consequences affecting vulnerable populations, threats to safety and robustness in high-risk missions\n  Mitigation: uncertainty quantification",
 "triples": [
  {
   "head": {
    "entity": "uncertainty quantification",
    "type": "Mitigation"
   },
   "edge": {
    "relation_type": "INHIBITS",
    "condition": "high-risk remote sensing applications",
    "evidence": "The framework explicitly uses a Bayesian Neural Network with Bayes-by-Backpropagation to quantify epistemic uncertainty in the mapping of hazardous ice, effectively mitigating unreliability in remote sensing.",
    "input_quote": "It treats model parameters as random variables with a diagonal, mean-field Gaussian variational posterior to quantify **epistemic (model) uncertainty**.",
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
    "evidence": "In extreme environments, unreliability in mapping sea ice hazards from Earth observation data directly jeopardizes maritime operations, potentially causing systemic failures in navigational safety.",
    "input_quote": "High-resolution detection of hazardous ice features (leads, floes, and boundaries) directly supports safe ship routing in the Arctic.",
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
  },
  {
   "head": {
    "entity": "high-complexity geoai models",
    "type": "TechnicalFeature"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "",
    "evidence": "The proposed architecture utilizes a sophisticated, dual-block Bayesian High-Resolution Transformer. The heavy computational requirements associated with training and running such complex, multi-layered models promote large-scale energy consumption and greenhouse gas emissions.",
    "input_quote": "A novel **Bayesian High-Resolution Transformer** consisting of two specialized blocks:",
    "provenance": "graph_exact",
    "quote_verified": false,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "large-scale greenhouse gas emissions",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain001"
  },
  {
   "head": {
    "entity": "large-scale greenhouse gas emissions",
    "type": "RiskMechanism"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "Global scope affecting communities most vulnerable to climate change",
    "evidence": "Increased carbon emissions from intensive compute needs contribute to global warming, which disproportionately impacts the vulnerable Northern/Arctic communities that this model ostensibly aims to assist.",
    "input_quote": "Provides detailed data essential for Northern/Arctic communities to adapt to rapidly changing sea ice conditions.",
    "provenance": "graph_exact",
    "quote_verified": false,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "climate change consequences affecting vulnerable populations",
    "type": "EthicalImpact",
    "harm_family": "PhysicalHarm"
   },
   "chain_id": "audit::chain001"
  },
  {
   "head": {
    "entity": "black-box nature of deep neural networks",
    "type": "TechnicalFeature"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "",
    "evidence": "The reliance on advanced Transformer architectures involves millions of parameters distributed across global and local attention mechanisms, creating an inherently opaque decision-making structure.",
    "input_quote": "This study presents a novel Bayesian High-Resolution Transformer approach for 200-meter resolution pan-Arctic SIC mapping and uncertainty quantification using Sentinel-1, RADARSAT Constellation Mission (RCM), and Advanced Microwave Scanning Radiometer 2 (AMSR2) data.",
    "provenance": "graph_exact",
    "quote_verified": true,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "model opacity and lack of interpretability",
    "type": "RiskMechanism",
    "harm_family": null
   },
   "chain_id": "audit::chain002"
  },
  {
   "head": {
    "entity": "model opacity and lack of interpretability",
    "type": "RiskMechanism"
   },
   "edge": {
    "relation_type": "PROMOTES",
    "condition": "high-risk remote sensing applications",
    "evidence": "Without clear interpretability, relying on a black-box model to guide Arctic ship routing poses severe threats to safety and robustness in high-stakes navigational missions.",
    "input_quote": "High-resolution detection of hazardous ice features (leads, floes, and boundaries) directly supports safe ship routing in the Arctic.",
    "provenance": "graph_exact",
    "quote_verified": false,
    "instantiation": "POTENTIAL",
    "instantiation_quote": "",
    "instantiation_verified": false
   },
   "tail": {
    "entity": "threats to safety and robustness in high-risk missions",
    "type": "EthicalImpact",
    "harm_family": "PhysicalHarm"
   },
   "chain_id": "audit::chain002"
  }
 ],
 "graph_paths": [
  "(explainable ai xai:Mitigation) --[INHIBITS | Condition: Urban decision-making processes]--> (model opacity and lack of interpretability:RiskMechanism)",
  "(individual risk profiling based on location and driving data:RiskMechanism) --[PROMOTES]--> (economic loss from increased insurance costs:EthicalImpact)",
  "(ai risk estimation models:TechnicalFeature) --[PROMOTES | Condition: When applied to health insurance rate setting]--> (individual risk profiling based on location and driving data:RiskMechanism)",
  "(unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --[PROMOTES | Condition: Earth observation imaging process]--> (systemic failure in disaster or safety monitoring:EthicalImpact)",
  "(algorithmic bias against low-population areas:RiskMechanism) --[PROMOTES]--> (systematic exclusion of smaller communities from accurate geographic representation:EthicalImpact)",
  "(systematic reporting of sustainability indicators:Mitigation) --[INHIBITS | Condition: Follow-up GeoAI research and model adoption]--> (large-scale greenhouse gas emissions:RiskMechanism)",
  "(uncertainty quantification:Mitigation) --[INHIBITS | Condition: high-risk remote sensing applications]--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)",
  "(model opacity and lack of interpretability:RiskMechanism) --[PROMOTES | Condition: high-risk remote sensing applications]--> (threats to safety and robustness in high-risk missions:EthicalImpact)",
  "(black-box nature of deep neural networks:TechnicalFeature) --[PROMOTES]--> (model opacity and lack of interpretability:RiskMechanism)",
  "(systematic bias in population distribution estimation:RiskMechanism) --[PROMOTES | Condition: When models are used to facilitate resource allocation and disaster preparedness]--> (inequitable resource allocation and service access:EthicalImpact)",
  "(operable ai ethics guidelines:Mitigation) --[INHIBITS | Condition: When guidelines address specific real-world consequences]--> (model opacity and lack of interpretability:RiskMechanism)",
  "(accidental revelation of sensitive information:RiskMechanism) --[PROMOTES]--> (location-based privacy violation:EthicalImpact)",
  "(human-centered design and human-in-the-loop processes:Mitigation) --[INHIBITS | Condition: During the design of GeoAI systems and algorithms]--> (representational bias and lack of inclusivity:RiskMechanism)",
  "(opaque ai systems:TechnicalFeature) --[INHIBITS]--> (identification and correction of errors or biases:RiskMechanism)",
  "(generative adversarial networks gans:TechnicalFeature) --[PROMOTES | Condition: When models create unrealistic artifacts in map designs]--> (deep fake geography and misinformation:EthicalImpact)",
  "(population-based heuristics in toponym resolution:TechnicalFeature) --[PROMOTES | Condition: During place name disambiguation (toponym resolution)]--> (algorithmic bias against low-population areas:RiskMechanism)",
  "(deep learning models for population mapping:TechnicalFeature) --[PROMOTES | Condition: Under conditions of spatial heterogeneity and varying neighborhood sizes]--> (systematic bias in population distribution estimation:RiskMechanism)",
  "(high-complexity geoai models:TechnicalFeature) --[PROMOTES]--> (large-scale greenhouse gas emissions:RiskMechanism)",
  "(large-scale greenhouse gas emissions:RiskMechanism) --[PROMOTES | Condition: Global scope affecting communities most vulnerable to climate change]--> (climate change consequences affecting vulnerable populations:EthicalImpact)",
  "(blackbox nature of ai-based models:TechnicalFeature) --[PROMOTES | Condition: General urban geospatial AI implementation]--> (model opacity and lack of interpretability:RiskMechanism)",
  "(representational bias and lack of inclusivity:RiskMechanism) --[PROMOTES | Condition: When pre-trained models fail to account for local cultural and socioeconomic diversity]--> (geographic discrimination and social inequality:EthicalImpact)",
  "(high-resolution uav imagery:TechnicalFeature) --[PROMOTES | Condition: When resolution is fine enough to discern individuals]--> (accidental revelation of sensitive information:RiskMechanism)"
 ],
 "track2_count": 3,
 "track2_docs": [
  {
   "source": "RESPONSIBLE AI FOR EARTH OBSERVATION.pdf",
   "content": "RESPONSIBLE AI FOR EARTH OBSERVATION A PREPRINT Pedram Ghamisi1,2, Weikang Yu1, Andrea Marinoni3,5, Caroline M. Gevaert4, Claudio Persello4, Sivasakthy Selvakumaran5, Manuela Girotto6, Benjamin P. Horton7, Philippe Rufin8,9, Patrick Hostert9, Fabio Pacifici10, Peter M. Atkinson2 1Helmholtz-Zentrum Dresden-Rossendorf (HZDR), 09599 Freiberg, Germany 2Lancaster University, LA1 4YR Lancaster, U.K. 3UiT The Arctic University of Norway, 9019 Tromsø, Norway 4University of Twente, 7522 NH Enschede, Netherlands 5University of Cambridge, CB3 0FA Cambridge, U.K. 6University of California, Berkeley, CA 94720 Berkeley, U.S.A. 7Nanyang Technological University, 639798 Singapore, Singapore 8UCLouvain, 1348 Louvain-la-Neuve, Belgium 9Humboldt Universit¨at zu Berlin, 10117 Berlin, Germany 10Maxar Technologies Inc, CO 80234 Westminster, U.S.A. ABSTRACT The convergence of artificial intelligence (AI) and Earth observation (EO) technologies has brought geoscience and remote sensing into an era of unparalleled capabilities. AI’s transformative impact on data analysis, particularly derived from EO platforms, holds great promise in addressing global challenges such as environmental monitoring, disaster response and climate change analysis. How- ever, the rapid integration of AI necessitates a careful examination of the responsible dimensions inherent in its application within these domains. In this paper, we represent a pioneering effort to systematically define the intersection of AI and EO, with a central focus on responsible AI practices. Specifically, we identify several critical components guiding this exploration from both academia and industry perspectives within the EO field: AI and EO for social good, mitigating unfair biases, AI security in EO, geo-privacy and privacy-preserving measures, as well as maintaining scientific excellence, open data, and guiding AI usage based on ethical principles. Furthermore, the paper explores potential opportunities and emerging trends, providing"
  },
  {
   "source": "remotesensing-16-04529.pdf",
   "content": "system performed well tech- nically, its effectiveness in diverse social contexts (like stakeholder engagement and local community considerations) was not explicitly detailed. 2. TES: considering these factors, a score of 8.5/10 reflects the system’s transparency and explainability strengths. • Decision-making clarity: the methodology provided clear insights into habitat characteristics, aiding decision-making in conservation efforts. • Understandability of outputs: while technically sound, the system’s outputs and processes might be challenging for non-technical stakeholders to fully grasp. • Documentation and auditability: the study’s documentation was thorough, facil- itating auditability and reproducibility. • User interaction: the extent to which users can interact with and query the system was not explicitly covered, suggesting an area for potential enhancement. 3. FS: given these considerations, a score of 7/10 is assigned, acknowledging the efforts to address fairness with room for enhanced bias management. • Handling of data biases: there is a potential risk of bias in data collection and annotation, a common challenge in remote sensing. • Equitable treatment and outcomes: the methodology aims to provide equitable insights across different habitat types, but the degree of success in this regard could vary. • Bias monitoring and management: the extent to which biases are systemati- cally monitored and managed was not detailed, suggesting an area for further development. 4. AS: reflecting these aspects, a score of 6/10 is appropriate, indicating the need for improvements in making the system more accessible and inclusive. • User-friendliness for non-experts: the system’s specialized nature might limit its accessibility to non-expert users in the field of remote sensing and conservation. • Adaptability to various technical skill levels: the methodology appears to require a certain level of technical expertise, potentially limiting its wider use. • Economic"
  },
  {
   "source": "remotesensing-16-04529.pdf",
   "content": "Abstract: In the rapidly evolving field of remote sensing, Deep Learning (DL) techniques have become pivotal in interpreting and processing complex datasets. However, the increasing reliance on these algorithms necessitates a robust ethical framework to evaluate their trustworthiness. This paper introduces a comprehensive ethical framework designed to assess and quantify the trustworthiness of DL techniques in the context of remote sensing. We first define trustworthiness in DL as a multidimensional construct encompassing accuracy, reliability, transparency and explainability, fairness, and accountability. Our framework then operationalizes these dimensions through a set of quantifiable metrics, allowing for the systematic evaluation of DL models. To illustrate the applicability of our framework, we selected an existing case study in remote sensing, wherein we apply our ethical assessment to a DL model used for classification. Our results demonstrate the model’s performance across different trustworthiness metrics, highlighting areas for ethical improvement. This paper not only contributes a novel framework for ethical analysis in the field of DL, but also provides a practical tool for developers and practitioners in remote sensing to ensure the responsible deployment of DL technologies. Through a dual approach that combines top-down international standards with bottom-up, context-specific considerations, our framework serves as a practical tool for ensuring responsible AI applications in remote sensing. Its application through a case study highlights its potential to influence policy-making and guide ethical AI development in this domain. Keywords: remote sensing; AI ethics; guidelines; ethical framework; GeoAI 1. Introduction Geospatial data are a foundation of modern society, and play a vital role in a wide range of essential activities, spanning both social and political spheres [ 1]. Their applications range from the production of detailed topographic maps of"
  }
 ],
 "generated": "2026-06-22"
};
