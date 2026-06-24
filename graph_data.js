window.GRAPH_DATA = {
 "stats": {
  "nodes": 280,
  "edges": 205,
  "by_type": {
   "TechnicalFeature": 84,
   "RiskMechanism": 79,
   "EthicalImpact": 80,
   "Mitigation": 37
  },
  "by_relation": {
   "PROMOTES": 162,
   "INHIBITS": 43
  },
  "by_harm": {
   "PhysicalHarm": 13,
   "PrivacyViolation": 13,
   "EqualRightsViolation": 42,
   "PsychologicalHarm": 3,
   "EconomicLoss": 9
  },
  "top_degree": [
   {
    "label": "individual re-identification",
    "type": "RiskMechanism",
    "degree": 7
   },
   {
    "label": "privacy violation",
    "type": "EthicalImpact",
    "degree": 7
   },
   {
    "label": "disclosure of sensitive geospatial data",
    "type": "RiskMechanism",
    "degree": 5
   },
   {
    "label": "location privacy violation",
    "type": "EthicalImpact",
    "degree": 5
   },
   {
    "label": "representational bias and exclusion",
    "type": "RiskMechanism",
    "degree": 5
   },
   {
    "label": "unintentional disclosure of sensitive information",
    "type": "RiskMechanism",
    "degree": 4
   },
   {
    "label": "explainable ai",
    "type": "Mitigation",
    "degree": 4
   },
   {
    "label": "geographic representation bias",
    "type": "RiskMechanism",
    "degree": 4
   },
   {
    "label": "oppressive surveillance",
    "type": "RiskMechanism",
    "degree": 4
   },
   {
    "label": "population estimation bias",
    "type": "RiskMechanism",
    "degree": 4
   },
   {
    "label": "lack of algorithmic transparency and explainability",
    "type": "RiskMechanism",
    "degree": 3
   },
   {
    "label": "systematic discrimination",
    "type": "EthicalImpact",
    "degree": 3
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "safety risks in critical missions",
   "label": "safety risks in critical missions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "federated learning",
   "label": "federated learning",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "disclosure of sensitive geospatial data",
   "label": "disclosure of sensitive geospatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 4,
   "outdeg": 1
  },
  {
   "id": "location privacy violation",
   "label": "location privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 5,
   "indeg": 5,
   "outdeg": 0
  },
  {
   "id": "black-box nature of deep neural networks",
   "label": "black-box nature of deep neural networks",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "lack of algorithmic transparency and explainability",
   "label": "lack of algorithmic transparency and explainability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "ai systems trained on non-representative data",
   "label": "ai systems trained on non-representative data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "perpetuation of discriminatory applications",
   "label": "perpetuation of discriminatory applications",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "systematic discrimination",
   "label": "systematic discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 3,
   "outdeg": 0
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
   "id": "unintentional disclosure of sensitive information",
   "label": "unintentional disclosure of sensitive information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "location behavior and association privacy violation",
   "label": "location behavior and association privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "classification of informal settlements and slums",
   "label": "classification of informal settlements and slums",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "Territorial stigmatization",
   "label": "Territorial stigmatization",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "forced evictions and displacement",
   "label": "forced evictions and displacement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "downgrading map spatial resolution",
   "label": "downgrading map spatial resolution",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "disclosure of sensitive personal information",
   "label": "disclosure of sensitive personal information",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "explainable ai",
   "label": "explainable ai",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 0,
   "outdeg": 4
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
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "surreptitious surveillance",
   "label": "surreptitious surveillance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "vgi and opportunistic data collection",
   "label": "vgi and opportunistic data collection",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "sampling bias toward dominant cultures",
   "label": "sampling bias toward dominant cultures",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "exclusion from knowledge production",
   "label": "exclusion from knowledge production",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "inequitable social outcomes",
   "label": "inequitable social outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "data integration and modeling",
   "label": "data integration and modeling",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "lack of geographic diversity in training and evaluation corpora",
   "label": "lack of geographic diversity in training and evaluation corpora",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geographic representation bias",
   "label": "geographic representation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "unequal quality of geoparsing services across geographic regions",
   "label": "unequal quality of geoparsing services across geographic regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "reduced reliability and fairness in underserved regions",
   "label": "reduced reliability and fairness in underserved regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "population-based heuristics in toponym resolution",
   "label": "population-based heuristics in toponym resolution",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "bias against low-population areas",
   "label": "bias against low-population areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "systematic exclusion of smaller communities from accurate geographic representation",
   "label": "systematic exclusion of smaller communities from accurate geographic representation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "outdeg": 1
  },
  {
   "id": "biased model predictions and rankings",
   "label": "biased model predictions and rankings",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "geographic discrimination and social inequality",
   "label": "geographic discrimination and social inequality",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
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
   "id": "individual re-identification",
   "label": "individual re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 7,
   "indeg": 5,
   "outdeg": 2
  },
  {
   "id": "Privacy by Design Data Minimization",
   "label": "Privacy by Design Data Minimization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "Foundational GeoAI model training",
   "label": "Foundational GeoAI model training",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "carbon emissions and resource depletion",
   "label": "carbon emissions and resource depletion",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "environmental degradation and threat to future human life",
   "label": "environmental degradation and threat to future human life",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "green ai practices",
   "label": "green ai practices",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geoai surveillance systems",
   "label": "geoai surveillance systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "surveillance and tracking misuse",
   "label": "surveillance and tracking misuse",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "violation of rights of the observed",
   "label": "violation of rights of the observed",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "map-visualization distortion",
   "label": "map-visualization distortion",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "Stigmatization of communities",
   "label": "Stigmatization of communities",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "psychological harm from stigmatization",
   "label": "psychological harm from stigmatization",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "mobile location data mapping",
   "label": "mobile location data mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "individual location privacy violation",
   "label": "individual location privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "context-sensitive best practices",
   "label": "context-sensitive best practices",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "persistent biases within large datasets",
   "label": "persistent biases within large datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "representational bias and exclusion",
   "label": "representational bias and exclusion",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2
  },
  {
   "id": "systemic spatial injustice and inequity",
   "label": "systemic spatial injustice and inequity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "participatory community-engaged standards of practice",
   "label": "participatory community-engaged standards of practice",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geospatial technologies in humanitarian evidence generation",
   "label": "geospatial technologies in humanitarian evidence generation",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "privacy breaches of at-risk populations",
   "label": "privacy breaches of at-risk populations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "physical safety threats to vulnerable groups",
   "label": "physical safety threats to vulnerable groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "Privacy by Design Methodologies",
   "label": "Privacy by Design Methodologies",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "discriminatory resource allocation in humanitarian aid",
   "label": "discriminatory resource allocation in humanitarian aid",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "group privacy violation",
   "label": "group privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "detailed temporal geodata collection",
   "label": "detailed temporal geodata collection",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "oppressive surveillance",
   "label": "oppressive surveillance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "targeting of vulnerable communities for harm",
   "label": "targeting of vulnerable communities for harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "informational harms",
   "label": "informational harms",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "High-complexity GeoAI models",
   "label": "High-complexity GeoAI models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "greenhouse gas emissions",
   "label": "greenhouse gas emissions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "climate change consequences affecting vulnerable populations",
   "label": "climate change consequences affecting vulnerable populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "environmental injustice and social burden",
   "label": "environmental injustice and social burden",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "systematic reporting of sustainability indicators",
   "label": "systematic reporting of sustainability indicators",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "geographic data scarcity in rural and remote areas",
   "label": "geographic data scarcity in rural and remote areas",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "population estimation bias",
   "label": "population estimation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
  },
  {
   "id": "inequitable resource allocation from misclassification",
   "label": "inequitable resource allocation from misclassification",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "opaque ai systems",
   "label": "opaque ai systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3
  },
  {
   "id": "misinterpretation of ai insights by decision-makers",
   "label": "misinterpretation of ai insights by decision-makers",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "inappropriate policy decisions impacting communities",
   "label": "inappropriate policy decisions impacting communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "process automation with reduced human intervention",
   "label": "process automation with reduced human intervention",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "automation bias",
   "label": "automation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "misinterpretation or misuse of remote sensing data",
   "label": "misinterpretation or misuse of remote sensing data",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "algorithmic focus bias",
   "label": "algorithmic focus bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "unfair distribution of urban resources and services",
   "label": "unfair distribution of urban resources and services",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "automated building footprint detection in informal settlements",
   "label": "automated building footprint detection in informal settlements",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "law enforcement targeting of vulnerable populations",
   "label": "law enforcement targeting of vulnerable populations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "expert reviews and community feedback loops",
   "label": "expert reviews and community feedback loops",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "dataset exclusion or misrepresentation",
   "label": "dataset exclusion or misrepresentation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "algorithmic marginalization and community exclusion",
   "label": "algorithmic marginalization and community exclusion",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "biased social and crowdsourced datasets",
   "label": "biased social and crowdsourced datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "facial recognition systems",
   "label": "facial recognition systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "individual and group privacy violation",
   "label": "individual and group privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "model opacity and lack of interpretability",
   "label": "model opacity and lack of interpretability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "spatial justice and accountability violations",
   "label": "spatial justice and accountability violations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "human-centered design and human-in-the-loop",
   "label": "human-centered design and human-in-the-loop",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "neglect of social and geographic significance",
   "label": "neglect of social and geographic significance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "Generative AI and AI-generated maps",
   "label": "Generative AI and AI-generated maps",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "lack of understanding of geographic processes",
   "label": "lack of understanding of geographic processes",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "economic loss from misinformation-driven planning",
   "label": "economic loss from misinformation-driven planning",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "training data errors in ml-based mapping",
   "label": "training data errors in ml-based mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "misrepresentation of urban areas",
   "label": "misrepresentation of urban areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "social stigmatization of community members",
   "label": "social stigmatization of community members",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "AI-assisted mapping and monitoring",
   "label": "AI-assisted mapping and monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "malicious use of spatial data",
   "label": "malicious use of spatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "AI and geographic information technologies",
   "label": "AI and geographic information technologies",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "invasive monitoring of personal information",
   "label": "invasive monitoring of personal information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "privacy violation",
   "label": "privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 7,
   "indeg": 7,
   "outdeg": 0
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
   "id": "risk to rights and freedoms",
   "label": "risk to rights and freedoms",
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
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "discriminatory resource allocation",
   "label": "discriminatory resource allocation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "deprivation of economic resources",
   "label": "deprivation of economic resources",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "GeoAI models utilizing location data",
   "label": "GeoAI models utilizing location data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "collinearity between geographic location and protected characteristics raceethnicity",
   "label": "collinearity between geographic location and protected characteristics raceethnicity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "racial and income-based discrimination",
   "label": "racial and income-based discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "explainable ai xai results",
   "label": "explainable ai xai results",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "group re-identification",
   "label": "group re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "manipulation of xai methods",
   "label": "manipulation of xai methods",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "obfuscation of algorithmic bias",
   "label": "obfuscation of algorithmic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "undetected discriminatory outcomes",
   "label": "undetected discriminatory outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "racial discrimination in predictive policing",
   "label": "racial discrimination in predictive policing",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "digital placelessness",
   "label": "digital placelessness",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "ai technology",
   "label": "ai technology",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "gender bias",
   "label": "gender bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "gender discrimination",
   "label": "gender discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "opacity in decision-making processes black-box effect",
   "label": "opacity in decision-making processes black-box effect",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "EU Artificial Intelligence Act",
   "label": "EU Artificial Intelligence Act",
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "spatio-temporal predictive policing",
   "label": "spatio-temporal predictive policing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "neighborhood representation bias",
   "label": "neighborhood representation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "biased law enforcement outcomes",
   "label": "biased law enforcement outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "GeoAI for disaster management",
   "label": "GeoAI for disaster management",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "representation bias false negatives for buildings in rural or poor areas",
   "label": "representation bias false negatives for buildings in rural or poor areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "denial of resources to marginalized populations",
   "label": "denial of resources to marginalized populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "EU AI Act Article 10: Data Governance and Bias Audits",
   "label": "EU AI Act Article 10: Data Governance and Bias Audits",
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
   "id": "EU AI Act Article 14: Human Oversight",
   "label": "EU AI Act Article 14: Human Oversight",
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
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "interdependent privacy violation",
   "label": "interdependent privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "violation of individual liberty and autonomy",
   "label": "violation of individual liberty and autonomy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "predictive policing algorithms",
   "label": "predictive policing algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3
  },
  {
   "id": "incorrect criminal identification",
   "label": "incorrect criminal identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "violation of due process and equal rights",
   "label": "violation of due process and equal rights",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "economic loss from increased insurance costs",
   "label": "economic loss from increased insurance costs",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "Geomasking and spatial-temporal cloaking",
   "label": "Geomasking and spatial-temporal cloaking",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "geoai foundation models",
   "label": "geoai foundation models",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "User privacy protection methods",
   "label": "User privacy protection methods",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "id": "inequitable resource and service distribution",
   "label": "inequitable resource and service distribution",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "geo-referencing",
   "label": "geo-referencing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "geographic location information",
   "label": "geographic location information",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "limitations of traditional supervision methods",
   "label": "limitations of traditional supervision methods",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "physical harm",
   "label": "physical harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "geoai ethics infographic framework",
   "label": "geoai ethics infographic framework",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "gis ai ethics education",
   "label": "gis ai ethics education",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inequity from community exclusion",
   "label": "inequity from community exclusion",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "flawed policy impacting marginalized communities",
   "label": "flawed policy impacting marginalized communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "Dimensionality reduction visualization",
   "label": "Dimensionality reduction visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "misallocation of public resources",
   "label": "misallocation of public resources",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 3,
   "indeg": 2,
   "outdeg": 1
  },
  {
   "id": "statistical gerrymandering and social stereotype reinforcement",
   "label": "statistical gerrymandering and social stereotype reinforcement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "Multi-grouping visualization",
   "label": "Multi-grouping visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "psychological harm",
   "label": "psychological harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "equal rights violation",
   "label": "equal rights violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "public sharing of personal vehicle trajectory data",
   "label": "public sharing of personal vehicle trajectory data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "rider privacy violation",
   "label": "rider privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "predictive policing input data bias",
   "label": "predictive policing input data bias",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "cell-tower location monitoring",
   "label": "cell-tower location monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "violation of political liberties and freedom of speech",
   "label": "violation of political liberties and freedom of speech",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "improved public education on position tracking",
   "label": "improved public education on position tracking",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "unintentional location data exposure",
   "label": "unintentional location data exposure",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "GeoAI big data stream analysis",
   "label": "GeoAI big data stream analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "disclosure of intimate individual behaviors",
   "label": "disclosure of intimate individual behaviors",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "spatially biased crowdsourced datasets",
   "label": "spatially biased crowdsourced datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "inequitable map products",
   "label": "inequitable map products",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "racial and geographic profiling",
   "label": "racial and geographic profiling",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "proprietary geoai models and products",
   "label": "proprietary geoai models and products",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 1,
   "indeg": 0,
   "outdeg": 1
  },
  {
   "id": "digital colonialism and widening economic gaps",
   "label": "digital colonialism and widening economic gaps",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "deep fake geography",
   "label": "deep fake geography",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "algorithmic racial bias in criminal identification",
   "label": "algorithmic racial bias in criminal identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "racial discrimination in law enforcement",
   "label": "racial discrimination in law enforcement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
  },
  {
   "id": "performance bias toward majority demographic groups",
   "label": "performance bias toward majority demographic groups",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1
  },
  {
   "id": "racial discrimination",
   "label": "racial discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "id": "geospatial misinformation",
   "label": "geospatial misinformation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
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
   "degree": 1,
   "indeg": 1,
   "outdeg": 0
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
   "to": "safety risks in critical missions",
   "relation": "PROMOTES",
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
   "from": "federated learning",
   "to": "disclosure of sensitive geospatial data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "disclosure of sensitive geospatial data",
   "to": "location privacy violation",
   "relation": "PROMOTES",
   "weight": 2.0
  },
  {
   "from": "black-box nature of deep neural networks",
   "to": "lack of algorithmic transparency and explainability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "lack of algorithmic transparency and explainability",
   "to": "safety risks in critical missions",
   "relation": "PROMOTES",
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
   "from": "ai systems trained on non-representative data",
   "to": "perpetuation of discriminatory applications",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "perpetuation of discriminatory applications",
   "to": "systematic discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "high-resolution uav imagery",
   "to": "unintentional disclosure of sensitive information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "unintentional disclosure of sensitive information",
   "to": "location behavior and association privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "unintentional disclosure of sensitive information",
   "to": "group privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "classification of informal settlements and slums",
   "to": "Territorial stigmatization",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Territorial stigmatization",
   "to": "forced evictions and displacement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "prediction of incorrect results in high-risk grs applications",
   "to": "threats to human safety in emergency situations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "downgrading map spatial resolution",
   "to": "disclosure of sensitive personal information",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai",
   "to": "hidden security hazards in black box models",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai",
   "to": "model opacity and lack of interpretability",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai",
   "to": "racial discrimination in predictive policing",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "explainable ai",
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
   "from": "surreptitious surveillance",
   "to": "location privacy violation",
   "relation": "PROMOTES",
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
   "to": "exclusion from knowledge production",
   "relation": "PROMOTES",
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
   "to": "inequitable social outcomes",
   "relation": "PROMOTES",
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
   "to": "geographic representation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic representation bias",
   "to": "unequal quality of geoparsing services across geographic regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic representation bias",
   "to": "inequitable social outcomes",
   "relation": "PROMOTES",
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
   "to": "reduced reliability and fairness in underserved regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "population-based heuristics in toponym resolution",
   "to": "bias against low-population areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "bias against low-population areas",
   "to": "systematic exclusion of smaller communities from accurate geographic representation",
   "relation": "PROMOTES",
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
   "from": "location data de-identification techniques",
   "to": "individual re-identification",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "individual re-identification",
   "to": "location privacy violation",
   "relation": "PROMOTES",
   "weight": 2.0
  },
  {
   "from": "individual re-identification",
   "to": "individual location privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Data Minimization",
   "to": "individual re-identification",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Foundational GeoAI model training",
   "to": "carbon emissions and resource depletion",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "carbon emissions and resource depletion",
   "to": "environmental degradation and threat to future human life",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "green ai practices",
   "to": "carbon emissions and resource depletion",
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
   "to": "location privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "modifiable areal unit problem maup",
   "to": "geographic representation bias",
   "relation": "PROMOTES",
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
   "from": "map-visualization distortion",
   "to": "Stigmatization of communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Stigmatization of communities",
   "to": "psychological harm from stigmatization",
   "relation": "PROMOTES",
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
   "to": "location privacy violation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "mobile location data mapping",
   "to": "individual re-identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "context-sensitive best practices",
   "to": "individual re-identification",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "persistent biases within large datasets",
   "to": "representational bias and exclusion",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representational bias and exclusion",
   "to": "systemic spatial injustice and inequity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representational bias and exclusion",
   "to": "geographic discrimination and social inequality",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "participatory community-engaged standards of practice",
   "to": "representational bias and exclusion",
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
   "to": "physical safety threats to vulnerable groups",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Methodologies",
   "to": "privacy breaches of at-risk populations",
   "relation": "INHIBITS",
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
   "from": "mosaicking disparate geodata using spatial references and ai",
   "to": "unintentional disclosure of sensitive information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "detailed temporal geodata collection",
   "to": "oppressive surveillance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "oppressive surveillance",
   "to": "targeting of vulnerable communities for harm",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "oppressive surveillance",
   "to": "violation of political liberties and freedom of speech",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geodata triage process",
   "to": "informational harms",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "High-complexity GeoAI models",
   "to": "greenhouse gas emissions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "greenhouse gas emissions",
   "to": "climate change consequences affecting vulnerable populations",
   "relation": "PROMOTES",
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
   "to": "environmental injustice and social burden",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "systematic reporting of sustainability indicators",
   "to": "greenhouse gas emissions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geographic data scarcity in rural and remote areas",
   "to": "population estimation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic data scarcity in rural and remote areas",
   "to": "inequitable resource and service distribution",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "population estimation bias",
   "to": "inequitable resource allocation from misclassification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "population estimation bias",
   "to": "inequitable resource and service distribution",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "opaque ai systems",
   "to": "misinterpretation of ai insights by decision-makers",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "opaque ai systems",
   "to": "model opacity and lack of interpretability",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "opaque ai systems",
   "to": "identification and correction of errors or biases",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "misinterpretation of ai insights by decision-makers",
   "to": "inappropriate policy decisions impacting communities",
   "relation": "PROMOTES",
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
   "from": "automated building footprint detection in informal settlements",
   "to": "law enforcement targeting of vulnerable populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "law enforcement targeting of vulnerable populations",
   "to": "forced evictions and displacement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "expert reviews and community feedback loops",
   "to": "dataset exclusion or misrepresentation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "dataset exclusion or misrepresentation",
   "to": "algorithmic marginalization and community exclusion",
   "relation": "PROMOTES",
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
   "from": "biased social and crowdsourced datasets",
   "to": "systematic discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "facial recognition systems",
   "to": "individual and group privacy violation",
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
   "from": "model opacity and lack of interpretability",
   "to": "spatial justice and accountability violations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "human-centered design and human-in-the-loop",
   "to": "neglect of social and geographic significance",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "human-centered design and human-in-the-loop",
   "to": "representational bias and exclusion",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Generative AI and AI-generated maps",
   "to": "lack of understanding of geographic processes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "lack of understanding of geographic processes",
   "to": "economic loss from misinformation-driven planning",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "training data errors in ml-based mapping",
   "to": "misrepresentation of urban areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "misrepresentation of urban areas",
   "to": "social stigmatization of community members",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "AI-assisted mapping and monitoring",
   "to": "malicious use of spatial data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "malicious use of spatial data",
   "to": "systematic discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "AI and geographic information technologies",
   "to": "invasive monitoring of personal information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "invasive monitoring of personal information",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "data protection impact assessments dpia",
   "to": "risk to rights and freedoms",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "engagement with local populations",
   "to": "privacy violation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "data minimization and abstraction",
   "to": "privacy violation",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "biased machine learning datasets",
   "to": "discriminatory resource allocation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "discriminatory resource allocation",
   "to": "deprivation of economic resources",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "GeoAI models utilizing location data",
   "to": "collinearity between geographic location and protected characteristics raceethnicity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "collinearity between geographic location and protected characteristics raceethnicity",
   "to": "racial and income-based discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "explainable ai xai results",
   "to": "group re-identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "group re-identification",
   "to": "individual and group privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "manipulation of xai methods",
   "to": "obfuscation of algorithmic bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "obfuscation of algorithmic bias",
   "to": "undetected discriminatory outcomes",
   "relation": "PROMOTES",
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
   "from": "unscreened synthetic geospatial data in public repositories",
   "to": "inability of data users to provide informed consent",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic recursion and data abstraction",
   "to": "digital placelessness",
   "relation": "PROMOTES",
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
   "to": "privacy violation",
   "relation": "PROMOTES",
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
   "from": "opacity in decision-making processes black-box effect",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "EU Artificial Intelligence Act",
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
   "from": "spatio-temporal predictive policing",
   "to": "neighborhood representation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "neighborhood representation bias",
   "to": "biased law enforcement outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "GeoAI for disaster management",
   "to": "representation bias false negatives for buildings in rural or poor areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "representation bias false negatives for buildings in rural or poor areas",
   "to": "denial of resources to marginalized populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 10: Data Governance and Bias Audits",
   "to": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 14: Human Oversight",
   "to": "over-reliance on biased or erroneous automated geoai decisions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "mobility behavior analysis",
   "to": "individual re-identification",
   "relation": "PROMOTES",
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
   "from": "predictive policing algorithms",
   "to": "incorrect criminal identification",
   "relation": "PROMOTES",
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
   "to": "algorithmic racial bias in criminal identification",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "incorrect criminal identification",
   "to": "violation of due process and equal rights",
   "relation": "PROMOTES",
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
   "from": "Geomasking and spatial-temporal cloaking",
   "to": "disclosure of sensitive geospatial data",
   "relation": "INHIBITS",
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
   "to": "individual location privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai foundation models",
   "to": "disclosure of sensitive geospatial data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "User privacy protection methods",
   "to": "disclosure of sensitive geospatial data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "deep learning models for population mapping",
   "to": "population estimation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geo-referencing",
   "to": "privacy violation",
   "relation": "PROMOTES",
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
   "from": "geographic location information",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "limitations of traditional supervision methods",
   "to": "physical harm",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geoai ethics infographic framework",
   "to": "physical harm",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "gis ai ethics education",
   "to": "inequity from community exclusion",
   "relation": "INHIBITS",
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
   "to": "flawed policy impacting marginalized communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Dimensionality reduction visualization",
   "to": "masking of subpopulation conditions",
   "relation": "INHIBITS",
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
   "from": "Multi-grouping visualization",
   "to": "subjective narrative reinforcement",
   "relation": "INHIBITS",
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
   "from": "public sharing of personal vehicle trajectory data",
   "to": "rider privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "aav target identification and decision algorithms",
   "to": "lethal outcomes for combatants and non-combatants",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "predictive policing input data bias",
   "to": "biased law enforcement outcomes",
   "relation": "PROMOTES",
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
   "from": "usage-based financial incentives for location sharing",
   "to": "financial burden for privacy maintenance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "cell-tower location monitoring",
   "to": "oppressive surveillance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "improved public education on position tracking",
   "to": "unintentional location data exposure",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "GeoAI big data stream analysis",
   "to": "disclosure of intimate individual behaviors",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spatially biased crowdsourced datasets",
   "to": "inequitable map products",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "proprietary geoai models and products",
   "to": "digital colonialism and widening economic gaps",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "generative adversarial networks gans",
   "to": "deep fake geography",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "human-in-the-loop geoai",
   "to": "unethical or inaccurate machine-generated maps",
   "relation": "INHIBITS",
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
   "from": "algorithmic racial bias in criminal identification",
   "to": "racial discrimination in law enforcement",
   "relation": "PROMOTES",
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
   "from": "performance bias toward majority demographic groups",
   "to": "racial discrimination",
   "relation": "PROMOTES",
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
   "to": "geospatial misinformation",
   "relation": "PROMOTES",
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
   "from": "resnet-18 based ai-generated map detector",
   "to": "geospatial misinformation",
   "relation": "INHIBITS",
   "weight": 1.0
  }
 ],
 "public_safe": true
};
