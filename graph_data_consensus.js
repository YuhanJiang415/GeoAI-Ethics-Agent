window.GRAPH_DATA = {
 "stats": {
  "nodes": 357,
  "edges": 416,
  "merged_nodes": 9,
  "by_type": {
   "TechnicalFeature": 96,
   "RiskMechanism": 103,
   "EthicalImpact": 111,
   "Mitigation": 42,
   "HarmCategory": 5
  },
  "by_relation": {
   "PROMOTES": 164,
   "IS_A": 209,
   "INHIBITS": 43
  },
  "by_harm": {
   "PhysicalHarm": 14,
   "PrivacyViolation": 19,
   "EqualRightsViolation": 48,
   "EconomicLoss": 10,
   "PsychologicalHarm": 3
  },
  "top_degree": [
   {
    "label": "EqualRightsViolation",
    "type": "HarmCategory",
    "degree": 48
   },
   {
    "label": "privacy violations",
    "type": "EthicalImpact",
    "degree": 22
   },
   {
    "label": "PrivacyViolation",
    "type": "HarmCategory",
    "degree": 19
   },
   {
    "label": "PhysicalHarm",
    "type": "HarmCategory",
    "degree": 14
   },
   {
    "label": "surveillance",
    "type": "RiskMechanism",
    "degree": 13
   },
   {
    "label": "inequitable resource allocation",
    "type": "EthicalImpact",
    "degree": 12
   },
   {
    "label": "discrimination",
    "type": "EthicalImpact",
    "degree": 12
   },
   {
    "label": "geographic representation bias",
    "type": "RiskMechanism",
    "degree": 12
   },
   {
    "label": "EconomicLoss",
    "type": "HarmCategory",
    "degree": 10
   },
   {
    "label": "demographic bias",
    "type": "RiskMechanism",
    "degree": 10
   },
   {
    "label": "re-identification risk",
    "type": "RiskMechanism",
    "degree": 10
   },
   {
    "label": "geoai modeling",
    "type": "TechnicalFeature",
    "degree": 9
   }
  ]
 },
 "nodes": [
  {
   "id": "adversarial perturbations",
   "label": "adversarial perturbations",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "misleading machine learning models to yield incorrect predictions",
   "label": "misleading machine learning models to yield incorrect predictions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "safety risks in safety-critical earth observation missions",
   "label": "safety risks in safety-critical earth observation missions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "safety and robustness risks"
  },
  {
   "id": "data poisoning with specific triggers",
   "label": "data poisoning with specific triggers",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "induction of malicious mappings between triggers and target labels",
   "label": "induction of malicious mappings between triggers and target labels",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "accidental harm due to malicious misclassification",
   "label": "accidental harm due to malicious misclassification",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "federated learning",
   "label": "federated learning",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "unauthorized sharing or migration of sensitive geospatial data",
   "label": "unauthorized sharing or migration of sensitive geospatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geospatial data exposure"
  },
  {
   "id": "violation of geospatial data privacy and sensitivity",
   "label": "violation of geospatial data privacy and sensitivity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "black-box nature of deep neural networks",
   "label": "black-box nature of deep neural networks",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "model opacity"
  },
  {
   "id": "lack of algorithmic transparency and explainability",
   "label": "lack of algorithmic transparency and explainability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "merged_from": [
    "lack of transparency in black-box algorithms"
   ]
  },
  {
   "id": "threats to safety and robustness in high-risk missions",
   "label": "threats to safety and robustness in high-risk missions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "safety and robustness risks"
  },
  {
   "id": "uncertainty quantification",
   "label": "uncertainty quantification",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unreliability of algorithmic predictions in safety-critical tasks",
   "label": "unreliability of algorithmic predictions in safety-critical tasks",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "systemic failure in disaster or safety monitoring",
   "label": "systemic failure in disaster or safety monitoring",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "ai systems trained on non-representative data",
   "label": "ai systems trained on non-representative data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "reinforcing or perpetuating discriminatory applications",
   "label": "reinforcing or perpetuating discriminatory applications",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic discrimination"
  },
  {
   "id": "systematic discrimination of individuals or population sub-groups",
   "label": "systematic discrimination of individuals or population sub-groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "high-resolution uav imagery",
   "label": "high-resolution uav imagery",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "accidental revelation of sensitive information",
   "label": "accidental revelation of sensitive information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "violation of location behavior and association privacy",
   "label": "violation of location behavior and association privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "location privacy violation"
  },
  {
   "id": "classification of informal settlements and slums",
   "label": "classification of informal settlements and slums",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "informal settlement mapping"
  },
  {
   "id": "territorial stigmatization",
   "label": "territorial stigmatization",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "stigmatization"
  },
  {
   "id": "exposure to forced eviction",
   "label": "exposure to forced eviction",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "prediction of incorrect results in high-risk grs applications",
   "label": "prediction of incorrect results in high-risk grs applications",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "threats to human safety in emergency situations",
   "label": "threats to human safety in emergency situations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "downgrading map spatial resolution",
   "label": "downgrading map spatial resolution",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "revelation of sensitive personal information",
   "label": "revelation of sensitive personal information",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "sensitive information disclosure"
  },
  {
   "id": "explainable ai xai",
   "label": "explainable ai (XAI)",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 0,
   "outdeg": 4,
   "merged_from": [
    "explainability and transparency xai",
    "xai schemes and understandable interpretations"
   ]
  },
  {
   "id": "hidden security hazards in black box models",
   "label": "hidden security hazards in black box models",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "smartphone location tracking",
   "label": "smartphone location tracking",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "mobile location tracking"
  },
  {
   "id": "surreptitious surveillance",
   "label": "surreptitious surveillance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance"
  },
  {
   "id": "location-based privacy violation",
   "label": "location-based privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 8,
   "indeg": 7,
   "outdeg": 1,
   "merged_from": [
    "location privacy breach",
    "locational privacy violation",
    "violation of location privacy"
   ]
  },
  {
   "id": "vgi and opportunistic data collection",
   "label": "vgi and opportunistic data collection",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "sampling bias toward dominant cultures",
   "label": "sampling bias toward dominant cultures",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "demographic bias"
  },
  {
   "id": "exclusion of marginalized groups from knowledge production",
   "label": "exclusion of marginalized groups from knowledge production",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "marginalization and exclusion"
  },
  {
   "id": "black-box spatial analysis",
   "label": "black-box spatial analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inadvertent inferential error",
   "label": "inadvertent inferential error",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "amplification of social disparities",
   "label": "amplification of social disparities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "social inequity"
  },
  {
   "id": "data integration and modeling",
   "label": "data integration and modeling",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "lack of geographic diversity in training and evaluation corpora",
   "label": "lack of geographic diversity in training and evaluation corpora",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "representation bias in spatial data coverage",
   "label": "representation bias in spatial data coverage",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "unequal quality of geoparsing services across geographic regions",
   "label": "unequal quality of geoparsing services across geographic regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "non-spatially-explicit evaluation metrics precision recall f-score",
   "label": "non-spatially-explicit evaluation metrics precision recall f-score",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "evaluation bias hiding regional variability",
   "label": "evaluation bias hiding regional variability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "reduced reliability and fairness of geoai systems in underserved regions",
   "label": "reduced reliability and fairness of geoai systems in underserved regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geoai algorithmic fairness harm"
  },
  {
   "id": "population-based heuristics in toponym resolution",
   "label": "population-based heuristics in toponym resolution",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "algorithmic bias against low-population areas",
   "label": "algorithmic bias against low-population areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "systematic exclusion of smaller communities from accurate geographic representation",
   "label": "systematic exclusion of smaller communities from accurate geographic representation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "spatially-explicit performance evaluation hotcold spot detection",
   "label": "spatially-explicit performance evaluation hotcold spot detection",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unrepresentative geographic training data",
   "label": "unrepresentative geographic training data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "biased model predictions and rankings",
   "label": "biased model predictions and rankings",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "geographic discrimination and social inequality",
   "label": "geographic discrimination and social inequality",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "location data de-identification techniques",
   "label": "location data de-identification techniques",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "re-identification of individuals from geospatial datasets",
   "label": "re-identification of individuals from geospatial datasets",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1
  },
  {
   "id": "privacy by design data minimization",
   "label": "privacy by design data minimization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "privacy by design"
  },
  {
   "id": "training of foundational and large-scale geoai models",
   "label": "training of foundational and large-scale geoai models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai modeling"
  },
  {
   "id": "high carbon dioxide emissions and resource depletion",
   "label": "high carbon dioxide emissions and resource depletion",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "environmental harm"
  },
  {
   "id": "environmental degradation and threat to future human life",
   "label": "environmental degradation and threat to future human life",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "green ai practices",
   "label": "green ai practices",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "sparse spatiotemporal traces",
   "label": "sparse spatiotemporal traces",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "re-identification and linkage",
   "label": "re-identification and linkage",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "modifiable areal unit problem maup",
   "label": "modifiable areal unit problem maup",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "geographic representational imbalance",
   "label": "geographic representational imbalance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "inequitable social outcomes",
   "label": "inequitable social outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "geoai surveillance systems",
   "label": "geoai surveillance systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "surveillance and tracking misuse",
   "label": "surveillance and tracking misuse",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance"
  },
  {
   "id": "violation of rights of the observed",
   "label": "violation of rights of the observed",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "rights violation"
  },
  {
   "id": "map-visualization distortion",
   "label": "map-visualization distortion",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "stigmatization of communities",
   "label": "stigmatization of communities",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "stigmatization"
  },
  {
   "id": "psychological harm from stigmatization",
   "label": "psychological harm from stigmatization",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "stigmatization harm"
  },
  {
   "id": "minimal data collection",
   "label": "minimal data collection",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "privacy-preserving synthetic-trajectory generation",
   "label": "privacy-preserving synthetic-trajectory generation",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "mapping of mobile phone location data",
   "label": "mapping of mobile phone location data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "mobile location tracking"
  },
  {
   "id": "risk of user re-identification",
   "label": "risk of user re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "re-identification risk"
  },
  {
   "id": "violation of individual locational privacy",
   "label": "violation of individual locational privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "location privacy violation"
  },
  {
   "id": "context-sensitive best practices",
   "label": "context-sensitive best practices",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "persistent biases within large datasets",
   "label": "persistent biases within large datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "exclusion of marginalized voices from spatial representation",
   "label": "exclusion of marginalized voices from spatial representation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "representational bias"
  },
  {
   "id": "systemic spatial injustice and inequity",
   "label": "systemic spatial injustice and inequity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "spatial injustice"
  },
  {
   "id": "participatory community-engaged standards of practice",
   "label": "participatory community-engaged standards of practice",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "geospatial technologies in humanitarian evidence generation",
   "label": "geospatial technologies in humanitarian evidence generation",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "privacy breaches of at-risk populations",
   "label": "privacy breaches of at-risk populations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "threats to the physical safety of vulnerable groups",
   "label": "threats to the physical safety of vulnerable groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to vulnerable groups"
  },
  {
   "id": "privacy-by-design methodologies",
   "label": "privacy-by-design methodologies",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "privacy by design"
  },
  {
   "id": "ai-driven building detection and classification from remote sensing data",
   "label": "ai-driven building detection and classification from remote sensing data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "misclassification of heterogeneous roof types",
   "label": "misclassification of heterogeneous roof types",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "discriminatory resource allocation in humanitarian aid",
   "label": "discriminatory resource allocation in humanitarian aid",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "mosaicking disparate geodata using spatial references and ai",
   "label": "mosaicking disparate geodata using spatial references and ai",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unintentional sensitive knowledge discovery",
   "label": "unintentional sensitive knowledge discovery",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "violation of group informational privacy",
   "label": "violation of group informational privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "detailed temporal geodata collection",
   "label": "detailed temporal geodata collection",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "surveillance by malevolent groups or oppressive governments",
   "label": "surveillance by malevolent groups or oppressive governments",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance"
  },
  {
   "id": "targeting of vulnerable communities for harm",
   "label": "targeting of vulnerable communities for harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to vulnerable groups"
  },
  {
   "id": "geodata triage process",
   "label": "geodata triage process",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "informational harms from geodata technologies",
   "label": "informational harms from geodata technologies",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "high-complexity geoai models",
   "label": "high-complexity geoai models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai modeling"
  },
  {
   "id": "large-scale greenhouse gas emissions",
   "label": "large-scale greenhouse gas emissions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "environmental harm"
  },
  {
   "id": "climate change consequences affecting vulnerable populations",
   "label": "climate change consequences affecting vulnerable populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "relocating computing centers to low-carbon regions",
   "label": "relocating computing centers to low-carbon regions",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geographic displacement of environmental burden",
   "label": "geographic displacement of environmental burden",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "environmental injustice and social burden on local residents",
   "label": "environmental injustice and social burden on local residents",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "spatial injustice"
  },
  {
   "id": "systematic reporting of sustainability indicators",
   "label": "systematic reporting of sustainability indicators",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "geographic data scarcity in rural and remote areas",
   "label": "geographic data scarcity in rural and remote areas",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3,
   "merged_from": [
    "underrepresentation of rural or remote areas in datasets"
   ]
  },
  {
   "id": "population target bias",
   "label": "population target bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "inequitable resource allocation and misclassification of vulnerable regions",
   "label": "inequitable resource allocation and misclassification of vulnerable regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "black box ambiguities and complex model architectures",
   "label": "black box ambiguities and complex model architectures",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "misinterpretation of ai insights by decision-makers",
   "label": "misinterpretation of ai insights by decision-makers",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "inappropriate policy decisions impacting communities",
   "label": "inappropriate policy decisions impacting communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to marginalized communities"
  },
  {
   "id": "process automation with reduced human intervention",
   "label": "process automation with reduced human intervention",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "automation bias",
   "label": "automation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "cognitive bias"
  },
  {
   "id": "misinterpretation or misuse of remote sensing data",
   "label": "misinterpretation or misuse of remote sensing data",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "structured evaluation framework and quantifiable metrics",
   "label": "structured evaluation framework and quantifiable metrics",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unintentional biases and ethical risks in remote sensing",
   "label": "unintentional biases and ethical risks in remote sensing",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "deep-learning algorithm for image segmentation beam",
   "label": "deep-learning algorithm for image segmentation beam",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "algorithmic focus bias",
   "label": "algorithmic focus bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic bias"
  },
  {
   "id": "unfair distribution of urban resources and services",
   "label": "unfair distribution of urban resources and services",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "automated detection of building footprints in informal settlements",
   "label": "automated detection of building footprints in informal settlements",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "informal settlement mapping"
  },
  {
   "id": "identification of vulnerable populations for law enforcement targeting",
   "label": "identification of vulnerable populations for law enforcement targeting",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to vulnerable populations"
  },
  {
   "id": "enforced evictions and displacement",
   "label": "enforced evictions and displacement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "expert reviews and community feedback loops",
   "label": "expert reviews and community feedback loops",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "exclusion or misrepresentation of vulnerable populations in datasets",
   "label": "exclusion or misrepresentation of vulnerable populations in datasets",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to vulnerable populations"
  },
  {
   "id": "algorithmic marginalization and community exclusion",
   "label": "algorithmic marginalization and community exclusion",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "marginalization and exclusion"
  },
  {
   "id": "high computational requirements for ai model execution",
   "label": "high computational requirements for ai model execution",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "institutional digital and capability divide",
   "label": "institutional digital and capability divide",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "systemic exclusion from technological benefits",
   "label": "systemic exclusion from technological benefits",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "biased training datasets from social data or crowdsourcing",
   "label": "biased training datasets from social data or crowdsourcing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "biased datasets"
  },
  {
   "id": "discrimination and unfair treatment of social groups",
   "label": "discrimination and unfair treatment of social groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "facial recognition systems",
   "label": "facial recognition systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 0,
   "outdeg": 4,
   "merged_from": [
    "computer vision analysis of visual data involving human faces"
   ]
  },
  {
   "id": "violation of individual and group privacy",
   "label": "violation of individual and group privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "violations of individual and group privacy"
   ],
   "concept": "privacy violations"
  },
  {
   "id": "blackbox nature of ai-based models",
   "label": "blackbox nature of ai-based models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "model opacity and lack of interpretability",
   "label": "model opacity and lack of interpretability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "violations of spatial justice and accountability",
   "label": "violations of spatial justice and accountability",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "spatial injustice"
  },
  {
   "id": "explainable ai xai methods",
   "label": "explainable ai xai methods",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "participatory approaches and human-in-the-loop",
   "label": "participatory approaches and human-in-the-loop",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "overlooking of social and geographical significance",
   "label": "overlooking of social and geographical significance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "geographic interpretability deficit"
  },
  {
   "id": "generative ai and ai-generated maps",
   "label": "generative ai and ai-generated maps",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial ai technology"
  },
  {
   "id": "inability to understand underlying geographic processes",
   "label": "inability to understand underlying geographic processes",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic interpretability deficit"
  },
  {
   "id": "economic loss from misinformation-driven planning",
   "label": "economic loss from misinformation-driven planning",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "training data errors in ml-based mapping",
   "label": "training data errors in ml-based mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "inaccurate classification and representation of urban areas",
   "label": "inaccurate classification and representation of urban areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "social stigmatisation of community members",
   "label": "social stigmatisation of community members",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "stigmatization harm"
  },
  {
   "id": "ai-assisted mapping and monitoring",
   "label": "ai-assisted mapping and monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial ai technology"
  },
  {
   "id": "malicious use of spatial data and representations",
   "label": "malicious use of spatial data and representations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "discrimination against vulnerable communities",
   "label": "discrimination against vulnerable communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "ai and geographic information technologies",
   "label": "ai and geographic information technologies",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial ai technology"
  },
  {
   "id": "invasive collection and monitoring of personal information",
   "label": "invasive collection and monitoring of personal information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance"
  },
  {
   "id": "infringement on personal privacy",
   "label": "infringement on personal privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1
  },
  {
   "id": "data protection impact assessments dpia",
   "label": "data protection impact assessments dpia",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "risk to the rights and freedoms of individuals",
   "label": "risk to the rights and freedoms of individuals",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "engagement with local populations",
   "label": "engagement with local populations",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "loss of privacy",
   "label": "loss of privacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "data minimization and abstraction",
   "label": "data minimization and abstraction",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "biased machine learning datasets",
   "label": "biased machine learning datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "biased datasets"
  },
  {
   "id": "discriminatory allocation of resources",
   "label": "discriminatory allocation of resources",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic discrimination"
  },
  {
   "id": "deprivation of economic resources",
   "label": "deprivation of economic resources",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "geoai models utilizing location data",
   "label": "geoai models utilizing location data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai modeling"
  },
  {
   "id": "collinearity between geographic location and protected characteristics raceethnicity",
   "label": "collinearity between geographic location and protected characteristics raceethnicity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "racial and income-based discrimination",
   "label": "racial and income-based discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "explainable ai xai results",
   "label": "explainable ai xai results",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "exposure of sensitive group data facilitating re-identification",
   "label": "exposure of sensitive group data facilitating re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "re-identification risk"
  },
  {
   "id": "manipulation of xai methods",
   "label": "manipulation of xai methods",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "obfuscation of underlying algorithmic bias",
   "label": "obfuscation of underlying algorithmic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic bias"
  },
  {
   "id": "undetected discriminatory outcomes in geoai applications",
   "label": "undetected discriminatory outcomes in geoai applications",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geoai algorithmic fairness harm"
  },
  {
   "id": "racial discrimination in predictive policing",
   "label": "racial discrimination in predictive policing",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "racial discrimination in policing"
  },
  {
   "id": "recursive training on synthetic geospatial data",
   "label": "recursive training on synthetic geospatial data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geoai collapse",
   "label": "geoai collapse",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "systemic bias against rare or minority place-based features",
   "label": "systemic bias against rare or minority place-based features",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "unscreened synthetic geospatial data in public repositories",
   "label": "unscreened synthetic geospatial data in public repositories",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inability of data users to provide informed consent",
   "label": "inability of data users to provide informed consent",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "algorithmic recursion and data abstraction",
   "label": "algorithmic recursion and data abstraction",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "digital placelessness and erosion of geographic specificity",
   "label": "digital placelessness and erosion of geographic specificity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "provenance-aware evaluation protocols and curation",
   "label": "provenance-aware evaluation protocols and curation",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "surveillance and tracking measures",
   "label": "surveillance and tracking measures",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "privacy violations",
   "label": "privacy violations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 22,
   "indeg": 20,
   "outdeg": 2,
   "merged_from": [
    "privacy violation"
   ],
   "is_concept": true
  },
  {
   "id": "ai technology",
   "label": "ai technology",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "gender bias",
   "label": "gender bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "demographic bias"
  },
  {
   "id": "gender discrimination",
   "label": "gender discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "opacity in decision-making processes black-box effect",
   "label": "opacity in decision-making processes black-box effect",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "potential privacy risks",
   "label": "potential privacy risks",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "artificial intelligence act eu ai act",
   "label": "artificial intelligence act eu ai act",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "risks of artificial intelligence",
   "label": "risks of artificial intelligence",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "ai creative tools",
   "label": "ai creative tools",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "intellectual property complications",
   "label": "intellectual property complications",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "predictive policing using spatio-temporal analysis",
   "label": "predictive policing using spatio-temporal analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "predictive policing"
  },
  {
   "id": "spatially biased data over- or under-representation of neighborhoods",
   "label": "spatially biased data over- or under-representation of neighborhoods",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "amplification of societal inequities through discriminatory policing",
   "label": "amplification of societal inequities through discriminatory policing",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discriminatory policing harm"
  },
  {
   "id": "geoai for flood vulnerability mapping and disaster management",
   "label": "geoai for flood vulnerability mapping and disaster management",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai modeling"
  },
  {
   "id": "representation bias false negatives for buildings in rural or poor areas",
   "label": "representation bias false negatives for buildings in rural or poor areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "denial of resources or delayed emergency aid to marginalized populations",
   "label": "denial of resources or delayed emergency aid to marginalized populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to marginalized communities"
  },
  {
   "id": "data governance and bias audits article 10 eu ai act",
   "label": "data governance and bias audits article 10 eu ai act",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "label": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "human oversight article 14 eu ai act",
   "label": "human oversight article 14 eu ai act",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "over-reliance on biased or erroneous automated geoai decisions",
   "label": "over-reliance on biased or erroneous automated geoai decisions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "mobility behavior analysis",
   "label": "mobility behavior analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "re-identification from anonymous data",
   "label": "re-identification from anonymous data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "re-identification risk"
  },
  {
   "id": "co-location analysis",
   "label": "co-location analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inference of personal characteristics from proximity",
   "label": "inference of personal characteristics from proximity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "interdependent privacy violation",
   "label": "interdependent privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "location-based services and gnss",
   "label": "location-based services and gnss",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geoslavery",
   "label": "geoslavery",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "violation of individual liberty and autonomy",
   "label": "violation of individual liberty and autonomy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "rights violation"
  },
  {
   "id": "predictive ai modeling for crime",
   "label": "predictive ai modeling for crime",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "incorrect identification of individuals as criminals",
   "label": "incorrect identification of individuals as criminals",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "false criminal identification"
  },
  {
   "id": "violation of due process and equal rights",
   "label": "violation of due process and equal rights",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "rights violation"
  },
  {
   "id": "ai risk estimation models",
   "label": "ai risk estimation models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "individual risk profiling based on location and driving data",
   "label": "individual risk profiling based on location and driving data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "economic loss from increased insurance costs",
   "label": "economic loss from increased insurance costs",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "economic loss"
  },
  {
   "id": "geomasking and spatial-temporal cloaking",
   "label": "geomasking and spatial-temporal cloaking",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "privacy protection methods"
  },
  {
   "id": "privacy exposure of location data",
   "label": "privacy exposure of location data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "location data exposure"
  },
  {
   "id": "large language models",
   "label": "large language models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inference of mobility patterns and re-identification",
   "label": "inference of mobility patterns and re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "loss of control over personal location information",
   "label": "loss of control over personal location information",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "location privacy violation"
  },
  {
   "id": "geoai foundation models",
   "label": "geoai foundation models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai models"
  },
  {
   "id": "disclosure of sensitive geospatial information",
   "label": "disclosure of sensitive geospatial information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "geospatial data exposure"
  },
  {
   "id": "geospatial privacy violation",
   "label": "geospatial privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "user privacy protection methods geomasking k-anonymization differential privacy",
   "label": "user privacy protection methods geomasking k-anonymization differential privacy",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "deep learning models for population mapping",
   "label": "deep learning models for population mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "systematic bias in population distribution estimation",
   "label": "systematic bias in population distribution estimation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "inequitable resource allocation and service access",
   "label": "inequitable resource allocation and service access",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "human-centered design and human-in-the-loop processes",
   "label": "human-centered design and human-in-the-loop processes",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "representational bias and lack of inclusivity",
   "label": "representational bias and lack of inclusivity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "representational bias"
  },
  {
   "id": "social discrimination and exclusion across geographic regions",
   "label": "social discrimination and exclusion across geographic regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "geo-referencing",
   "label": "geo-referencing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial data feature"
  },
  {
   "id": "outdated or irrelevant training data",
   "label": "outdated or irrelevant training data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "system failures and inaccurate results",
   "label": "system failures and inaccurate results",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "serious economic consequences",
   "label": "serious economic consequences",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "opaque ai systems",
   "label": "opaque ai systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "identification and correction of errors or biases",
   "label": "identification and correction of errors or biases",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "geographic location information in datasets",
   "label": "geographic location information in datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial data feature"
  },
  {
   "id": "limitations of traditional supervision methods",
   "label": "limitations of traditional supervision methods",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "physical harm",
   "label": "physical harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "harm to individuals"
  },
  {
   "id": "infographic framework for geoai ethics",
   "label": "infographic framework for geoai ethics",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "incorporating ai ethics education into gis",
   "label": "incorporating ai ethics education into gis",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "social inequity from overlooked communities",
   "label": "social inequity from overlooked communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "social inequity"
  },
  {
   "id": "treating heterogeneous spatial data as uniform",
   "label": "treating heterogeneous spatial data as uniform",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "masking of subpopulation conditions",
   "label": "masking of subpopulation conditions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1
  },
  {
   "id": "formulation of flawed public policy failing marginalized communities",
   "label": "formulation of flawed public policy failing marginalized communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "dimensionality reduction visualization",
   "label": "dimensionality reduction visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "data visualization"
  },
  {
   "id": "inappropriate bandwidth parameter setting in kernel density estimation",
   "label": "inappropriate bandwidth parameter setting in kernel density estimation",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "false center phenomenon",
   "label": "false center phenomenon",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "misallocation of public resources",
   "label": "misallocation of public resources",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "dynamic parameter visualization",
   "label": "dynamic parameter visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "subjective spatial and non-spatial data grouping",
   "label": "subjective spatial and non-spatial data grouping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "subjective narrative reinforcement",
   "label": "subjective narrative reinforcement",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1
  },
  {
   "id": "statistical gerrymandering and social stereotype reinforcement",
   "label": "statistical gerrymandering and social stereotype reinforcement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "multi-grouping visualization",
   "label": "multi-grouping visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "data visualization"
  },
  {
   "id": "outdated training data",
   "label": "outdated training data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "untimely maintenance of training data",
   "label": "untimely maintenance of training data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "psychological harm",
   "label": "psychological harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to individuals"
  },
  {
   "id": "ai-powered search algorithm",
   "label": "ai-powered search algorithm",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "imbalanced training data",
   "label": "imbalanced training data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "equal rights violation",
   "label": "equal rights violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "merged_from": [
    "equal rights violations"
   ],
   "concept": "rights violation"
  },
  {
   "id": "manual oversight process",
   "label": "manual oversight process",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "limitations of traditional oversight methods",
   "label": "limitations of traditional oversight methods",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "training data from us home insurance applications",
   "label": "training data from us home insurance applications",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "redlining in mortgage lending",
   "label": "redlining in mortgage lending",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "socio-spatial service disparities",
   "label": "socio-spatial service disparities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource allocation"
  },
  {
   "id": "public sharing of personal vehicle trajectory data",
   "label": "public sharing of personal vehicle trajectory data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "privacy violation of riders",
   "label": "privacy violation of riders",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violations"
  },
  {
   "id": "aav target identification and decision algorithms",
   "label": "aav target identification and decision algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "lethal outcomes for combatants and non-combatants",
   "label": "lethal outcomes for combatants and non-combatants",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "inability to audit black-box model decisions",
   "label": "inability to audit black-box model decisions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "bias in input data for predictive policing",
   "label": "bias in input data for predictive policing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "flawed and biased law enforcement outcomes",
   "label": "flawed and biased law enforcement outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "ubiquitous positioning hardware in mobile devices",
   "label": "ubiquitous positioning hardware in mobile devices",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "systematic and secret recording of individual movement",
   "label": "systematic and secret recording of individual movement",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "loss of individual geoprivacy",
   "label": "loss of individual geoprivacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "location-based inference algorithms",
   "label": "location-based inference algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "reconstruction of sensitive personal profiles",
   "label": "reconstruction of sensitive personal profiles",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "unintended disclosure of sensitive personal characteristics",
   "label": "unintended disclosure of sensitive personal characteristics",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "usage-based financial incentives for location sharing",
   "label": "usage-based financial incentives for location sharing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "financial burden for privacy maintenance",
   "label": "financial burden for privacy maintenance",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "cell-tower based location monitoring",
   "label": "cell-tower based location monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "mobile location tracking"
  },
  {
   "id": "state-led surveillance of civil activity",
   "label": "state-led surveillance of civil activity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance"
  },
  {
   "id": "violation of political liberties and freedom of speech",
   "label": "violation of political liberties and freedom of speech",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "rights violation"
  },
  {
   "id": "improved public education on position tracking",
   "label": "improved public education on position tracking",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "unintentional location data exposure through ignorance",
   "label": "unintentional location data exposure through ignorance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "location data exposure"
  },
  {
   "id": "geoai analysis of big data streams",
   "label": "geoai analysis of big data streams",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai modeling"
  },
  {
   "id": "disclosure of intimate individual behaviors",
   "label": "disclosure of intimate individual behaviors",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "sensitive information disclosure"
  },
  {
   "id": "spatially biased crowdsourced datasets",
   "label": "spatially biased crowdsourced datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "biased datasets"
  },
  {
   "id": "inequitable map products that privilege powerful groups",
   "label": "inequitable map products that privilege powerful groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "predictive policing algorithms",
   "label": "predictive policing algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3,
   "merged_from": [
    "predictive policing algorithms in geoai"
   ],
   "concept": "predictive policing"
  },
  {
   "id": "racial and geographic profiling",
   "label": "racial and geographic profiling",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "discrimination"
  },
  {
   "id": "proprietary geoai models and products",
   "label": "proprietary geoai models and products",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai models"
  },
  {
   "id": "digital colonialism and widening economic gaps",
   "label": "digital colonialism and widening economic gaps",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "generative adversarial networks gans",
   "label": "generative adversarial networks gans",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "deep fake geography and misinformation",
   "label": "deep fake geography and misinformation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "human-in-the-loop geoai",
   "label": "human-in-the-loop geoai",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unethical or inaccurate machine-generated maps",
   "label": "unethical or inaccurate machine-generated maps",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "autonomous driving technology",
   "label": "autonomous driving technology",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "sensor failure to correctly identify targets",
   "label": "sensor failure to correctly identify targets",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "physical injury or death in traffic accidents",
   "label": "physical injury or death in traffic accidents",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "algorithmic bias leaning toward identifying specific races as criminals",
   "label": "algorithmic bias leaning toward identifying specific races as criminals",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "racial discrimination in law enforcement",
   "label": "racial discrimination in law enforcement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "racial discrimination in policing"
  },
  {
   "id": "travel booking recommendation algorithms",
   "label": "travel booking recommendation algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "differentiated pricing based on user portraits",
   "label": "differentiated pricing based on user portraits",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "economic loss due to price discrimination",
   "label": "economic loss due to price discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "performance bias toward majority demographic groups",
   "label": "performance bias toward majority demographic groups",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "demographic bias"
  },
  {
   "id": "exclusion and discrimination based on race",
   "label": "exclusion and discrimination based on race",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "operable ai ethics guidelines",
   "label": "operable ai ethics guidelines",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "dalle 2 generative map synthesis",
   "label": "dalle 2 generative map synthesis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "generation of misleading geospatial information and pseudo-words",
   "label": "generation of misleading geospatial information and pseudo-words",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "spread of geospatial misinformation and distortion of reality",
   "label": "spread of geospatial misinformation and distortion of reality",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "ai reflection of specific geopolitical identities",
   "label": "ai reflection of specific geopolitical identities",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "stoking of nationalism and xenophobic discourse",
   "label": "stoking of nationalism and xenophobic discourse",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "reinforcement of xenophobic or biased geopolitical discourse",
   "label": "reinforcement of xenophobic or biased geopolitical discourse",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "resnet-18 based ai-generated map detector",
   "label": "resnet-18 based ai-generated map detector",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "harm:PhysicalHarm",
   "label": "PhysicalHarm",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "PhysicalHarm",
   "degree": 14,
   "indeg": 14,
   "outdeg": 0
  },
  {
   "id": "harm:PrivacyViolation",
   "label": "PrivacyViolation",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "PrivacyViolation",
   "degree": 19,
   "indeg": 19,
   "outdeg": 0
  },
  {
   "id": "harm:EqualRightsViolation",
   "label": "EqualRightsViolation",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "EqualRightsViolation",
   "degree": 48,
   "indeg": 48,
   "outdeg": 0
  },
  {
   "id": "harm:EconomicLoss",
   "label": "EconomicLoss",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "EconomicLoss",
   "degree": 10,
   "indeg": 10,
   "outdeg": 0
  },
  {
   "id": "harm:PsychologicalHarm",
   "label": "PsychologicalHarm",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "PsychologicalHarm",
   "degree": 3,
   "indeg": 3,
   "outdeg": 0
  },
  {
   "id": "geographic interpretability deficit",
   "label": "geographic interpretability deficit",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 4,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "privacy protection methods",
   "label": "privacy protection methods",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "sensitive information disclosure",
   "label": "sensitive information disclosure",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "informal settlement mapping",
   "label": "informal settlement mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "data visualization",
   "label": "data visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "algorithmic discrimination",
   "label": "algorithmic discrimination",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "inequitable resource allocation",
   "label": "inequitable resource allocation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 12,
   "indeg": 12,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "geospatial data exposure",
   "label": "geospatial data exposure",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 7,
   "indeg": 5,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "location data exposure",
   "label": "location data exposure",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "harm to vulnerable populations",
   "label": "harm to vulnerable populations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "geospatial data feature",
   "label": "geospatial data feature",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "harm to vulnerable groups",
   "label": "harm to vulnerable groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "geoai modeling",
   "label": "geoai modeling",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 9,
   "indeg": 5,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "environmental harm",
   "label": "environmental harm",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 7,
   "indeg": 5,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "false criminal identification",
   "label": "false criminal identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "spatial injustice",
   "label": "spatial injustice",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 6,
   "indeg": 6,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "mobile location tracking",
   "label": "mobile location tracking",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "cognitive bias",
   "label": "cognitive bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "demographic bias",
   "label": "demographic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 10,
   "indeg": 7,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "geospatial ai technology",
   "label": "geospatial ai technology",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 6,
   "indeg": 3,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "representational bias",
   "label": "representational bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 7,
   "indeg": 5,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "surveillance",
   "label": "surveillance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 13,
   "indeg": 9,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "location privacy violation",
   "label": "location privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 6,
   "indeg": 6,
   "outdeg": 0,
   "concept": "privacy violations",
   "is_concept": true
  },
  {
   "id": "safety and robustness risks",
   "label": "safety and robustness risks",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "privacy by design",
   "label": "privacy by design",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "geoai models",
   "label": "geoai models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "stigmatization",
   "label": "stigmatization",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "harm to marginalized communities",
   "label": "harm to marginalized communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "harm to individuals",
   "label": "harm to individuals",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 5,
   "indeg": 5,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "geoai algorithmic fairness harm",
   "label": "geoai algorithmic fairness harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "marginalization and exclusion",
   "label": "marginalization and exclusion",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "social inequity",
   "label": "social inequity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "discriminatory policing harm",
   "label": "discriminatory policing harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "racial discrimination in policing",
   "label": "racial discrimination in policing",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "algorithmic bias",
   "label": "algorithmic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "predictive policing",
   "label": "predictive policing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 5,
   "indeg": 2,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "re-identification risk",
   "label": "re-identification risk",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 10,
   "indeg": 7,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "discrimination",
   "label": "discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 12,
   "indeg": 12,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "biased datasets",
   "label": "biased datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 6,
   "indeg": 3,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "stigmatization harm",
   "label": "stigmatization harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "geographic representation bias",
   "label": "geographic representation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 12,
   "indeg": 8,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "economic loss",
   "label": "economic loss",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "rights violation",
   "label": "rights violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 9,
   "indeg": 9,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "model opacity",
   "label": "model opacity",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  }
 ],
 "edges": [
  {
   "from": "adversarial perturbations",
   "to": "misleading machine learning models to yield incorrect predictions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "adversarial perturbations",
   "to": "prediction of incorrect results in high-risk grs applications",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "misleading machine learning models to yield incorrect predictions",
   "to": "safety risks in safety-critical earth observation missions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "safety risks in safety-critical earth observation missions",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "safety risks in safety-critical earth observation missions",
   "to": "safety and robustness risks",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data poisoning with specific triggers",
   "to": "induction of malicious mappings between triggers and target labels",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "induction of malicious mappings between triggers and target labels",
   "to": "accidental harm due to malicious misclassification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "accidental harm due to malicious misclassification",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "federated learning",
   "to": "unauthorized sharing or migration of sensitive geospatial data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unauthorized sharing or migration of sensitive geospatial data",
   "to": "violation of geospatial data privacy and sensitivity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "unauthorized sharing or migration of sensitive geospatial data",
   "to": "geospatial data exposure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of geospatial data privacy and sensitivity",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "black-box nature of deep neural networks",
   "to": "lack of algorithmic transparency and explainability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "black-box nature of deep neural networks",
   "to": "model opacity",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "lack of algorithmic transparency and explainability",
   "to": "threats to safety and robustness in high-risk missions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "threats to safety and robustness in high-risk missions",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "threats to safety and robustness in high-risk missions",
   "to": "safety and robustness risks",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "uncertainty quantification",
   "to": "unreliability of algorithmic predictions in safety-critical tasks",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unreliability of algorithmic predictions in safety-critical tasks",
   "to": "systemic failure in disaster or safety monitoring",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systemic failure in disaster or safety monitoring",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai systems trained on non-representative data",
   "to": "reinforcing or perpetuating discriminatory applications",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reinforcing or perpetuating discriminatory applications",
   "to": "systematic discrimination of individuals or population sub-groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reinforcing or perpetuating discriminatory applications",
   "to": "algorithmic discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systematic discrimination of individuals or population sub-groups",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "high-resolution uav imagery",
   "to": "accidental revelation of sensitive information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "accidental revelation of sensitive information",
   "to": "violation of location behavior and association privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "violation of location behavior and association privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of location behavior and association privacy",
   "to": "location privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "classification of informal settlements and slums",
   "to": "territorial stigmatization",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "classification of informal settlements and slums",
   "to": "informal settlement mapping",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "territorial stigmatization",
   "to": "exposure to forced eviction",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "territorial stigmatization",
   "to": "stigmatization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exposure to forced eviction",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "prediction of incorrect results in high-risk grs applications",
   "to": "threats to human safety in emergency situations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "threats to human safety in emergency situations",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "downgrading map spatial resolution",
   "to": "revelation of sensitive personal information",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "revelation of sensitive personal information",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "revelation of sensitive personal information",
   "to": "sensitive information disclosure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai",
   "to": "hidden security hazards in black box models",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai",
   "to": "racial discrimination in predictive policing",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai",
   "to": "inability to audit black-box model decisions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "smartphone location tracking",
   "to": "surreptitious surveillance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "smartphone location tracking",
   "to": "mobile location tracking",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "surreptitious surveillance",
   "to": "location-based privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surreptitious surveillance",
   "to": "surveillance",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location-based privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "vgi and opportunistic data collection",
   "to": "sampling bias toward dominant cultures",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "sampling bias toward dominant cultures",
   "to": "exclusion of marginalized groups from knowledge production",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "sampling bias toward dominant cultures",
   "to": "demographic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exclusion of marginalized groups from knowledge production",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exclusion of marginalized groups from knowledge production",
   "to": "marginalization and exclusion",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "black-box spatial analysis",
   "to": "inadvertent inferential error",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inadvertent inferential error",
   "to": "amplification of social disparities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "amplification of social disparities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "amplification of social disparities",
   "to": "social inequity",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data integration and modeling",
   "to": "sampling bias toward dominant cultures",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "lack of geographic diversity in training and evaluation corpora",
   "to": "representation bias in spatial data coverage",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representation bias in spatial data coverage",
   "to": "unequal quality of geoparsing services across geographic regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representation bias in spatial data coverage",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "unequal quality of geoparsing services across geographic regions",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "non-spatially-explicit evaluation metrics precision recall f-score",
   "to": "evaluation bias hiding regional variability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "evaluation bias hiding regional variability",
   "to": "reduced reliability and fairness of geoai systems in underserved regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reduced reliability and fairness of geoai systems in underserved regions",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "reduced reliability and fairness of geoai systems in underserved regions",
   "to": "geoai algorithmic fairness harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "population-based heuristics in toponym resolution",
   "to": "algorithmic bias against low-population areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic bias against low-population areas",
   "to": "systematic exclusion of smaller communities from accurate geographic representation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic bias against low-population areas",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systematic exclusion of smaller communities from accurate geographic representation",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatially-explicit performance evaluation hotcold spot detection",
   "to": "evaluation bias hiding regional variability",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unrepresentative geographic training data",
   "to": "biased model predictions and rankings",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "biased model predictions and rankings",
   "to": "geographic discrimination and social inequality",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic discrimination and social inequality",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geographic discrimination and social inequality",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location data de-identification techniques",
   "to": "re-identification of individuals from geospatial datasets",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "re-identification of individuals from geospatial datasets",
   "to": "location-based privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "privacy by design data minimization",
   "to": "re-identification of individuals from geospatial datasets",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "privacy by design data minimization",
   "to": "privacy by design",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "training of foundational and large-scale geoai models",
   "to": "high carbon dioxide emissions and resource depletion",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "training of foundational and large-scale geoai models",
   "to": "geoai modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "high carbon dioxide emissions and resource depletion",
   "to": "environmental degradation and threat to future human life",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "high carbon dioxide emissions and resource depletion",
   "to": "environmental harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "environmental degradation and threat to future human life",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "green ai practices",
   "to": "high carbon dioxide emissions and resource depletion",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "sparse spatiotemporal traces",
   "to": "re-identification and linkage",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "re-identification and linkage",
   "to": "location-based privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "modifiable areal unit problem maup",
   "to": "geographic representational imbalance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic representational imbalance",
   "to": "inequitable social outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic representational imbalance",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable social outcomes",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai surveillance systems",
   "to": "surveillance and tracking misuse",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surveillance and tracking misuse",
   "to": "violation of rights of the observed",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surveillance and tracking misuse",
   "to": "surveillance",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of rights of the observed",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of rights of the observed",
   "to": "rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "map-visualization distortion",
   "to": "stigmatization of communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "stigmatization of communities",
   "to": "psychological harm from stigmatization",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "stigmatization of communities",
   "to": "stigmatization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "psychological harm from stigmatization",
   "to": "harm:PsychologicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "psychological harm from stigmatization",
   "to": "stigmatization harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "minimal data collection",
   "to": "re-identification and linkage",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "privacy-preserving synthetic-trajectory generation",
   "to": "location-based privacy violation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "mapping of mobile phone location data",
   "to": "risk of user re-identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "mapping of mobile phone location data",
   "to": "mobile location tracking",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "risk of user re-identification",
   "to": "violation of individual locational privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "risk of user re-identification",
   "to": "re-identification risk",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of individual locational privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of individual locational privacy",
   "to": "location privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "context-sensitive best practices",
   "to": "risk of user re-identification",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "persistent biases within large datasets",
   "to": "exclusion of marginalized voices from spatial representation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "exclusion of marginalized voices from spatial representation",
   "to": "systemic spatial injustice and inequity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "exclusion of marginalized voices from spatial representation",
   "to": "representational bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systemic spatial injustice and inequity",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systemic spatial injustice and inequity",
   "to": "spatial injustice",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "participatory community-engaged standards of practice",
   "to": "exclusion of marginalized voices from spatial representation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geospatial technologies in humanitarian evidence generation",
   "to": "privacy breaches of at-risk populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "privacy breaches of at-risk populations",
   "to": "threats to the physical safety of vulnerable groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "privacy breaches of at-risk populations",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "threats to the physical safety of vulnerable groups",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "threats to the physical safety of vulnerable groups",
   "to": "harm to vulnerable groups",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "privacy-by-design methodologies",
   "to": "privacy breaches of at-risk populations",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "privacy-by-design methodologies",
   "to": "privacy by design",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai-driven building detection and classification from remote sensing data",
   "to": "misclassification of heterogeneous roof types",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "misclassification of heterogeneous roof types",
   "to": "discriminatory resource allocation in humanitarian aid",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "discriminatory resource allocation in humanitarian aid",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "discriminatory resource allocation in humanitarian aid",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "mosaicking disparate geodata using spatial references and ai",
   "to": "unintentional sensitive knowledge discovery",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "unintentional sensitive knowledge discovery",
   "to": "violation of group informational privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "violation of group informational privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of group informational privacy",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "detailed temporal geodata collection",
   "to": "surveillance by malevolent groups or oppressive governments",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surveillance by malevolent groups or oppressive governments",
   "to": "targeting of vulnerable communities for harm",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surveillance by malevolent groups or oppressive governments",
   "to": "surveillance",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "targeting of vulnerable communities for harm",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "targeting of vulnerable communities for harm",
   "to": "harm to vulnerable groups",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geodata triage process",
   "to": "informational harms from geodata technologies",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "high-complexity geoai models",
   "to": "large-scale greenhouse gas emissions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "high-complexity geoai models",
   "to": "geoai modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "large-scale greenhouse gas emissions",
   "to": "climate change consequences affecting vulnerable populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "large-scale greenhouse gas emissions",
   "to": "environmental harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "climate change consequences affecting vulnerable populations",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "relocating computing centers to low-carbon regions",
   "to": "geographic displacement of environmental burden",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic displacement of environmental burden",
   "to": "environmental injustice and social burden on local residents",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "environmental injustice and social burden on local residents",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "environmental injustice and social burden on local residents",
   "to": "spatial injustice",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systematic reporting of sustainability indicators",
   "to": "large-scale greenhouse gas emissions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geographic data scarcity in rural and remote areas",
   "to": "population target bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic data scarcity in rural and remote areas",
   "to": "socio-spatial service disparities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "population target bias",
   "to": "inequitable resource allocation and misclassification of vulnerable regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation and misclassification of vulnerable regions",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation and misclassification of vulnerable regions",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "black box ambiguities and complex model architectures",
   "to": "misinterpretation of ai insights by decision-makers",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "misinterpretation of ai insights by decision-makers",
   "to": "inappropriate policy decisions impacting communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inappropriate policy decisions impacting communities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inappropriate policy decisions impacting communities",
   "to": "harm to marginalized communities",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "process automation with reduced human intervention",
   "to": "automation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "automation bias",
   "to": "misinterpretation or misuse of remote sensing data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "automation bias",
   "to": "cognitive bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "misinterpretation or misuse of remote sensing data",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "structured evaluation framework and quantifiable metrics",
   "to": "unintentional biases and ethical risks in remote sensing",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "deep-learning algorithm for image segmentation beam",
   "to": "algorithmic focus bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic focus bias",
   "to": "unfair distribution of urban resources and services",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic focus bias",
   "to": "algorithmic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "unfair distribution of urban resources and services",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "unfair distribution of urban resources and services",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "automated detection of building footprints in informal settlements",
   "to": "identification of vulnerable populations for law enforcement targeting",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "automated detection of building footprints in informal settlements",
   "to": "informal settlement mapping",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "identification of vulnerable populations for law enforcement targeting",
   "to": "enforced evictions and displacement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "identification of vulnerable populations for law enforcement targeting",
   "to": "harm to vulnerable populations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "enforced evictions and displacement",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "expert reviews and community feedback loops",
   "to": "exclusion or misrepresentation of vulnerable populations in datasets",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "exclusion or misrepresentation of vulnerable populations in datasets",
   "to": "algorithmic marginalization and community exclusion",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "exclusion or misrepresentation of vulnerable populations in datasets",
   "to": "harm to vulnerable populations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "algorithmic marginalization and community exclusion",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "algorithmic marginalization and community exclusion",
   "to": "marginalization and exclusion",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "high computational requirements for ai model execution",
   "to": "institutional digital and capability divide",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "institutional digital and capability divide",
   "to": "systemic exclusion from technological benefits",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systemic exclusion from technological benefits",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "biased training datasets from social data or crowdsourcing",
   "to": "discrimination and unfair treatment of social groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "biased training datasets from social data or crowdsourcing",
   "to": "biased datasets",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "discrimination and unfair treatment of social groups",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "discrimination and unfair treatment of social groups",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "facial recognition systems",
   "to": "violation of individual and group privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "facial recognition systems",
   "to": "performance bias toward majority demographic groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "violation of individual and group privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of individual and group privacy",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "blackbox nature of ai-based models",
   "to": "model opacity and lack of interpretability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "model opacity and lack of interpretability",
   "to": "violations of spatial justice and accountability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "violations of spatial justice and accountability",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violations of spatial justice and accountability",
   "to": "spatial injustice",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai methods",
   "to": "model opacity and lack of interpretability",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "participatory approaches and human-in-the-loop",
   "to": "overlooking of social and geographical significance",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "overlooking of social and geographical significance",
   "to": "geographic interpretability deficit",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "generative ai and ai-generated maps",
   "to": "inability to understand underlying geographic processes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "generative ai and ai-generated maps",
   "to": "geospatial ai technology",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inability to understand underlying geographic processes",
   "to": "economic loss from misinformation-driven planning",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inability to understand underlying geographic processes",
   "to": "geographic interpretability deficit",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "economic loss from misinformation-driven planning",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "training data errors in ml-based mapping",
   "to": "inaccurate classification and representation of urban areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inaccurate classification and representation of urban areas",
   "to": "social stigmatisation of community members",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inaccurate classification and representation of urban areas",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social stigmatisation of community members",
   "to": "harm:PsychologicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social stigmatisation of community members",
   "to": "stigmatization harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai-assisted mapping and monitoring",
   "to": "malicious use of spatial data and representations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "ai-assisted mapping and monitoring",
   "to": "geospatial ai technology",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "malicious use of spatial data and representations",
   "to": "discrimination against vulnerable communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "discrimination against vulnerable communities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "discrimination against vulnerable communities",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai and geographic information technologies",
   "to": "invasive collection and monitoring of personal information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "ai and geographic information technologies",
   "to": "geospatial ai technology",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "invasive collection and monitoring of personal information",
   "to": "infringement on personal privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "invasive collection and monitoring of personal information",
   "to": "surveillance",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "infringement on personal privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data protection impact assessments dpia",
   "to": "risk to the rights and freedoms of individuals",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "engagement with local populations",
   "to": "loss of privacy",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "loss of privacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data minimization and abstraction",
   "to": "infringement on personal privacy",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "biased machine learning datasets",
   "to": "discriminatory allocation of resources",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "biased machine learning datasets",
   "to": "biased datasets",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "discriminatory allocation of resources",
   "to": "deprivation of economic resources",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "discriminatory allocation of resources",
   "to": "algorithmic discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "deprivation of economic resources",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai models utilizing location data",
   "to": "collinearity between geographic location and protected characteristics raceethnicity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai models utilizing location data",
   "to": "geoai modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "collinearity between geographic location and protected characteristics raceethnicity",
   "to": "racial and income-based discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "racial and income-based discrimination",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial and income-based discrimination",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai results",
   "to": "exposure of sensitive group data facilitating re-identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "exposure of sensitive group data facilitating re-identification",
   "to": "violation of individual and group privacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "exposure of sensitive group data facilitating re-identification",
   "to": "re-identification risk",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "manipulation of xai methods",
   "to": "obfuscation of underlying algorithmic bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "obfuscation of underlying algorithmic bias",
   "to": "undetected discriminatory outcomes in geoai applications",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "obfuscation of underlying algorithmic bias",
   "to": "algorithmic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "undetected discriminatory outcomes in geoai applications",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "undetected discriminatory outcomes in geoai applications",
   "to": "geoai algorithmic fairness harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial discrimination in predictive policing",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial discrimination in predictive policing",
   "to": "racial discrimination in policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "recursive training on synthetic geospatial data",
   "to": "geoai collapse",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai collapse",
   "to": "systemic bias against rare or minority place-based features",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systemic bias against rare or minority place-based features",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "unscreened synthetic geospatial data in public repositories",
   "to": "inability of data users to provide informed consent",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inability of data users to provide informed consent",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "algorithmic recursion and data abstraction",
   "to": "digital placelessness and erosion of geographic specificity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "digital placelessness and erosion of geographic specificity",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "provenance-aware evaluation protocols and curation",
   "to": "geoai collapse",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "surveillance and tracking measures",
   "to": "privacy violations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "privacy violations",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai technology",
   "to": "gender bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "gender bias",
   "to": "gender discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "gender bias",
   "to": "demographic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "gender discrimination",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "gender discrimination",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "opacity in decision-making processes black-box effect",
   "to": "potential privacy risks",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "potential privacy risks",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "potential privacy risks",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "artificial intelligence act eu ai act",
   "to": "risks of artificial intelligence",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "ai creative tools",
   "to": "intellectual property complications",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "intellectual property complications",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "predictive policing using spatio-temporal analysis",
   "to": "spatially biased data over- or under-representation of neighborhoods",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "predictive policing using spatio-temporal analysis",
   "to": "predictive policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatially biased data over- or under-representation of neighborhoods",
   "to": "amplification of societal inequities through discriminatory policing",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "amplification of societal inequities through discriminatory policing",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "amplification of societal inequities through discriminatory policing",
   "to": "discriminatory policing harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai for flood vulnerability mapping and disaster management",
   "to": "representation bias false negatives for buildings in rural or poor areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai for flood vulnerability mapping and disaster management",
   "to": "geoai modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "representation bias false negatives for buildings in rural or poor areas",
   "to": "denial of resources or delayed emergency aid to marginalized populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "denial of resources or delayed emergency aid to marginalized populations",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "denial of resources or delayed emergency aid to marginalized populations",
   "to": "harm to marginalized communities",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data governance and bias audits article 10 eu ai act",
   "to": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "human oversight article 14 eu ai act",
   "to": "over-reliance on biased or erroneous automated geoai decisions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "mobility behavior analysis",
   "to": "re-identification from anonymous data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "re-identification from anonymous data",
   "to": "location-based privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "re-identification from anonymous data",
   "to": "re-identification risk",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "co-location analysis",
   "to": "inference of personal characteristics from proximity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inference of personal characteristics from proximity",
   "to": "interdependent privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "interdependent privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "interdependent privacy violation",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location-based services and gnss",
   "to": "geoslavery",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoslavery",
   "to": "violation of individual liberty and autonomy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "violation of individual liberty and autonomy",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of individual liberty and autonomy",
   "to": "rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "predictive ai modeling for crime",
   "to": "incorrect identification of individuals as criminals",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "incorrect identification of individuals as criminals",
   "to": "violation of due process and equal rights",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "incorrect identification of individuals as criminals",
   "to": "false criminal identification",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of due process and equal rights",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of due process and equal rights",
   "to": "rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai risk estimation models",
   "to": "individual risk profiling based on location and driving data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "individual risk profiling based on location and driving data",
   "to": "economic loss from increased insurance costs",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "economic loss from increased insurance costs",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "economic loss from increased insurance costs",
   "to": "economic loss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geomasking and spatial-temporal cloaking",
   "to": "privacy exposure of location data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geomasking and spatial-temporal cloaking",
   "to": "privacy protection methods",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "privacy exposure of location data",
   "to": "location data exposure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "large language models",
   "to": "inference of mobility patterns and re-identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inference of mobility patterns and re-identification",
   "to": "loss of control over personal location information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "loss of control over personal location information",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "loss of control over personal location information",
   "to": "location privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai foundation models",
   "to": "disclosure of sensitive geospatial information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai foundation models",
   "to": "geoai models",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "disclosure of sensitive geospatial information",
   "to": "geospatial privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "disclosure of sensitive geospatial information",
   "to": "geospatial data exposure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geospatial privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geospatial privacy violation",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "user privacy protection methods geomasking k-anonymization differential privacy",
   "to": "disclosure of sensitive geospatial information",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "deep learning models for population mapping",
   "to": "systematic bias in population distribution estimation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systematic bias in population distribution estimation",
   "to": "inequitable resource allocation and service access",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation and service access",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation and service access",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "human-centered design and human-in-the-loop processes",
   "to": "representational bias and lack of inclusivity",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "representational bias and lack of inclusivity",
   "to": "social discrimination and exclusion across geographic regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representational bias and lack of inclusivity",
   "to": "representational bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social discrimination and exclusion across geographic regions",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geo-referencing",
   "to": "privacy violations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geo-referencing",
   "to": "geospatial data feature",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "outdated or irrelevant training data",
   "to": "system failures and inaccurate results",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "system failures and inaccurate results",
   "to": "serious economic consequences",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "serious economic consequences",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "opaque ai systems",
   "to": "identification and correction of errors or biases",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geographic location information in datasets",
   "to": "privacy violations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic location information in datasets",
   "to": "geospatial data feature",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "limitations of traditional supervision methods",
   "to": "physical harm",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "physical harm",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "physical harm",
   "to": "harm to individuals",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "infographic framework for geoai ethics",
   "to": "physical harm",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "incorporating ai ethics education into gis",
   "to": "social inequity from overlooked communities",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "social inequity from overlooked communities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social inequity from overlooked communities",
   "to": "social inequity",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "treating heterogeneous spatial data as uniform",
   "to": "masking of subpopulation conditions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "masking of subpopulation conditions",
   "to": "formulation of flawed public policy failing marginalized communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "formulation of flawed public policy failing marginalized communities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "dimensionality reduction visualization",
   "to": "masking of subpopulation conditions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "dimensionality reduction visualization",
   "to": "data visualization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inappropriate bandwidth parameter setting in kernel density estimation",
   "to": "false center phenomenon",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "false center phenomenon",
   "to": "misallocation of public resources",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "misallocation of public resources",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "misallocation of public resources",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "dynamic parameter visualization",
   "to": "false center phenomenon",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "subjective spatial and non-spatial data grouping",
   "to": "subjective narrative reinforcement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "subjective narrative reinforcement",
   "to": "statistical gerrymandering and social stereotype reinforcement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "statistical gerrymandering and social stereotype reinforcement",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "multi-grouping visualization",
   "to": "subjective narrative reinforcement",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "multi-grouping visualization",
   "to": "data visualization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "outdated training data",
   "to": "untimely maintenance of training data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "untimely maintenance of training data",
   "to": "psychological harm",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "psychological harm",
   "to": "harm:PsychologicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "psychological harm",
   "to": "harm to individuals",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai-powered search algorithm",
   "to": "imbalanced training data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "imbalanced training data",
   "to": "equal rights violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "equal rights violation",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "equal rights violation",
   "to": "rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "manual oversight process",
   "to": "limitations of traditional oversight methods",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "training data from us home insurance applications",
   "to": "redlining in mortgage lending",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "redlining in mortgage lending",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "socio-spatial service disparities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "socio-spatial service disparities",
   "to": "inequitable resource allocation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "public sharing of personal vehicle trajectory data",
   "to": "privacy violation of riders",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "privacy violation of riders",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "privacy violation of riders",
   "to": "privacy violations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "aav target identification and decision algorithms",
   "to": "lethal outcomes for combatants and non-combatants",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "lethal outcomes for combatants and non-combatants",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "bias in input data for predictive policing",
   "to": "flawed and biased law enforcement outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "flawed and biased law enforcement outcomes",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ubiquitous positioning hardware in mobile devices",
   "to": "systematic and secret recording of individual movement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systematic and secret recording of individual movement",
   "to": "loss of individual geoprivacy",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "loss of individual geoprivacy",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location-based inference algorithms",
   "to": "reconstruction of sensitive personal profiles",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reconstruction of sensitive personal profiles",
   "to": "unintended disclosure of sensitive personal characteristics",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "unintended disclosure of sensitive personal characteristics",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "usage-based financial incentives for location sharing",
   "to": "financial burden for privacy maintenance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "financial burden for privacy maintenance",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "cell-tower based location monitoring",
   "to": "state-led surveillance of civil activity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "cell-tower based location monitoring",
   "to": "mobile location tracking",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "state-led surveillance of civil activity",
   "to": "violation of political liberties and freedom of speech",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "state-led surveillance of civil activity",
   "to": "surveillance",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of political liberties and freedom of speech",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "violation of political liberties and freedom of speech",
   "to": "rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "improved public education on position tracking",
   "to": "unintentional location data exposure through ignorance",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unintentional location data exposure through ignorance",
   "to": "location data exposure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai analysis of big data streams",
   "to": "disclosure of intimate individual behaviors",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai analysis of big data streams",
   "to": "geoai modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "disclosure of intimate individual behaviors",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "disclosure of intimate individual behaviors",
   "to": "sensitive information disclosure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatially biased crowdsourced datasets",
   "to": "inequitable map products that privilege powerful groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spatially biased crowdsourced datasets",
   "to": "biased datasets",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable map products that privilege powerful groups",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "predictive policing algorithms",
   "to": "racial and geographic profiling",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "predictive policing algorithms",
   "to": "algorithmic bias leaning toward identifying specific races as criminals",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "predictive policing algorithms",
   "to": "predictive policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial and geographic profiling",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial and geographic profiling",
   "to": "discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "proprietary geoai models and products",
   "to": "digital colonialism and widening economic gaps",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "proprietary geoai models and products",
   "to": "geoai models",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "digital colonialism and widening economic gaps",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "generative adversarial networks gans",
   "to": "deep fake geography and misinformation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "deep fake geography and misinformation",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "human-in-the-loop geoai",
   "to": "unethical or inaccurate machine-generated maps",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unethical or inaccurate machine-generated maps",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "autonomous driving technology",
   "to": "sensor failure to correctly identify targets",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "sensor failure to correctly identify targets",
   "to": "physical injury or death in traffic accidents",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "physical injury or death in traffic accidents",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "algorithmic bias leaning toward identifying specific races as criminals",
   "to": "racial discrimination in law enforcement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "racial discrimination in law enforcement",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial discrimination in law enforcement",
   "to": "racial discrimination in policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "travel booking recommendation algorithms",
   "to": "differentiated pricing based on user portraits",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "differentiated pricing based on user portraits",
   "to": "economic loss due to price discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "economic loss due to price discrimination",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "performance bias toward majority demographic groups",
   "to": "exclusion and discrimination based on race",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "performance bias toward majority demographic groups",
   "to": "demographic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exclusion and discrimination based on race",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "operable ai ethics guidelines",
   "to": "lack of algorithmic transparency and explainability",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "dalle 2 generative map synthesis",
   "to": "generation of misleading geospatial information and pseudo-words",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "generation of misleading geospatial information and pseudo-words",
   "to": "spread of geospatial misinformation and distortion of reality",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spread of geospatial misinformation and distortion of reality",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "ai reflection of specific geopolitical identities",
   "to": "stoking of nationalism and xenophobic discourse",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "stoking of nationalism and xenophobic discourse",
   "to": "reinforcement of xenophobic or biased geopolitical discourse",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reinforcement of xenophobic or biased geopolitical discourse",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "resnet-18 based ai-generated map detector",
   "to": "spread of geospatial misinformation and distortion of reality",
   "relation": "INHIBITS",
   "weight": 1.0
  }
 ],
 "public_safe": true
};
