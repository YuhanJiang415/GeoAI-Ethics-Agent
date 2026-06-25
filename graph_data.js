window.GRAPH_DATA = {
 "stats": {
  "nodes": 337,
  "edges": 415,
  "merged_nodes": 26,
  "by_type": {
   "TechnicalFeature": 98,
   "RiskMechanism": 96,
   "EthicalImpact": 95,
   "Mitigation": 43,
   "HarmCategory": 5
  },
  "by_relation": {
   "PROMOTES": 162,
   "IS_A": 210,
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
    "label": "privacy violation",
    "type": "EthicalImpact",
    "degree": 43
   },
   {
    "label": "EqualRightsViolation",
    "type": "HarmCategory",
    "degree": 42
   },
   {
    "label": "algorithmic bias",
    "type": "RiskMechanism",
    "degree": 17
   },
   {
    "label": "geographic representation bias",
    "type": "RiskMechanism",
    "degree": 14
   },
   {
    "label": "systematic discrimination",
    "type": "EthicalImpact",
    "degree": 13
   },
   {
    "label": "PhysicalHarm",
    "type": "HarmCategory",
    "degree": 13
   },
   {
    "label": "PrivacyViolation",
    "type": "HarmCategory",
    "degree": 13
   },
   {
    "label": "location privacy violation",
    "type": "EthicalImpact",
    "degree": 12
   },
   {
    "label": "surveillance and tracking",
    "type": "RiskMechanism",
    "degree": 11
   },
   {
    "label": "fundamental rights violation",
    "type": "RiskMechanism",
    "degree": 11
   },
   {
    "label": "re-identification risk",
    "type": "RiskMechanism",
    "degree": 10
   },
   {
    "label": "resource allocation inequality",
    "type": "EthicalImpact",
    "degree": 10
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
   "id": "safety risks in critical missions",
   "label": "safety risks in critical missions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "safety risks in safety-critical earth observation missions",
    "threats to safety and robustness in high-risk missions"
   ],
   "concept": "system safety"
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
   "id": "disclosure of sensitive geospatial data",
   "label": "disclosure of sensitive geospatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "merged_from": [
    "disclosure of sensitive geospatial information",
    "unauthorized sharing or migration of sensitive geospatial data",
    "privacy exposure of location data"
   ],
   "concept": "privacy violation"
  },
  {
   "id": "location privacy violation",
   "label": "location privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 12,
   "indeg": 10,
   "outdeg": 2,
   "merged_from": [
    "location-based privacy violation",
    "geospatial privacy violation",
    "location privacy breach",
    "locational privacy violation",
    "violation of geospatial data privacy and sensitivity",
    "violation of location privacy"
   ],
   "concept": "privacy violation",
   "is_concept": true
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
   "concept": "black-box nature"
  },
  {
   "id": "lack of algorithmic transparency and explainability",
   "label": "lack of algorithmic transparency and explainability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "lack of transparency in black-box algorithms"
   ],
   "concept": "algorithmic opacity"
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
   "id": "perpetuation of discriminatory applications",
   "label": "perpetuation of discriminatory applications",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic discrimination"
  },
  {
   "id": "systematic discrimination",
   "label": "systematic discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 13,
   "indeg": 12,
   "outdeg": 1,
   "merged_from": [
    "discrimination against vulnerable communities",
    "discrimination and unfair treatment of social groups",
    "systematic discrimination of individuals or population sub-groups"
   ],
   "is_concept": true
  },
  {
   "id": "high-resolution uav imagery",
   "label": "high-resolution uav imagery",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "unintentional disclosure of sensitive information",
   "label": "unintentional disclosure of sensitive information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 2,
   "outdeg": 3,
   "merged_from": [
    "accidental revelation of sensitive information",
    "unintentional sensitive knowledge discovery"
   ],
   "concept": "information disclosure"
  },
  {
   "id": "location behavior and association privacy violation",
   "label": "location behavior and association privacy violation",
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
   "id": "Territorial stigmatization",
   "label": "Territorial stigmatization",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "Social stigmatization"
  },
  {
   "id": "forced evictions and displacement",
   "label": "forced evictions and displacement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "enforced evictions and displacement",
    "exposure to forced eviction"
   ],
   "concept": "forced displacement"
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
   "id": "disclosure of sensitive personal information",
   "label": "disclosure of sensitive personal information",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violation"
  },
  {
   "id": "explainable ai",
   "label": "explainable ai",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 0,
   "outdeg": 5,
   "merged_from": [
    "explainability and transparency xai",
    "explainable ai xai",
    "explainable ai xai methods",
    "xai schemes and understandable interpretations"
   ],
   "concept": "transparency"
  },
  {
   "id": "hidden security hazards in black box models",
   "label": "hidden security hazards in black box models",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
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
   "concept": "surveillance and tracking"
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
   "concept": "algorithmic bias"
  },
  {
   "id": "exclusion from knowledge production",
   "label": "exclusion from knowledge production",
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
   "id": "inequitable social outcomes",
   "label": "inequitable social outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "amplification of social disparities"
   ],
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
   "id": "geographic representation bias",
   "label": "geographic representation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 14,
   "indeg": 8,
   "outdeg": 6,
   "merged_from": [
    "geographic representational imbalance",
    "representation bias in spatial data coverage"
   ],
   "concept": "spatial data bias",
   "is_concept": true
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
   "id": "reduced reliability and fairness in underserved regions",
   "label": "reduced reliability and fairness in underserved regions",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic bias"
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
   "id": "bias against low-population areas",
   "label": "bias against low-population areas",
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
   "degree": 4,
   "indeg": 1,
   "outdeg": 3,
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
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "social discrimination and exclusion across geographic regions"
   ],
   "concept": "geospatial discrimination"
  },
  {
   "id": "location data de-identification techniques",
   "label": "location data de-identification techniques",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "individual re-identification",
   "label": "individual re-identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 8,
   "indeg": 5,
   "outdeg": 3,
   "merged_from": [
    "re-identification of individuals from geospatial datasets",
    "risk of user re-identification",
    "re-identification from anonymous data"
   ],
   "concept": "re-identification risk"
  },
  {
   "id": "Privacy by Design Data Minimization",
   "label": "Privacy by Design Data Minimization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Privacy by Design"
  },
  {
   "id": "Foundational GeoAI model training",
   "label": "Foundational GeoAI model training",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI model development"
  },
  {
   "id": "carbon emissions and resource depletion",
   "label": "carbon emissions and resource depletion",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "environmental impact"
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
   "degree": 4,
   "indeg": 2,
   "outdeg": 2
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
   "concept": "surveillance and tracking"
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
   "concept": "fundamental rights violation"
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
   "id": "Stigmatization of communities",
   "label": "Stigmatization of communities",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "Social stigmatization"
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
   "concept": "stigmatization"
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
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "mobile location data mapping",
   "label": "mobile location data mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "mobile location tracking"
  },
  {
   "id": "individual location privacy violation",
   "label": "individual location privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "loss of control over personal location information",
    "violation of individual locational privacy"
   ],
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
   "id": "representational bias and exclusion",
   "label": "representational bias and exclusion",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 3,
   "outdeg": 3,
   "merged_from": [
    "exclusion of marginalized voices from spatial representation",
    "representational bias and lack of inclusivity"
   ],
   "concept": "bias and unfairness"
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
   "concept": "privacy violation"
  },
  {
   "id": "physical safety threats to vulnerable groups",
   "label": "physical safety threats to vulnerable groups",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "harm to vulnerable populations"
  },
  {
   "id": "Privacy by Design Methodologies",
   "label": "Privacy by Design Methodologies",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Privacy by Design"
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
   "concept": "resource allocation inequality"
  },
  {
   "id": "mosaicking disparate geodata using spatial references and ai",
   "label": "mosaicking disparate geodata using spatial references and ai",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "group privacy violation",
   "label": "group privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violation"
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
   "id": "oppressive surveillance",
   "label": "oppressive surveillance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 2,
   "outdeg": 3,
   "merged_from": [
    "state-led surveillance of civil activity",
    "surveillance by malevolent groups or oppressive governments"
   ],
   "concept": "surveillance and tracking"
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
   "concept": "harm to vulnerable populations"
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
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI modeling"
  },
  {
   "id": "greenhouse gas emissions",
   "label": "greenhouse gas emissions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "concept": "environmental impact"
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
   "id": "environmental injustice and social burden",
   "label": "environmental injustice and social burden",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "environmental injustice"
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
   ],
   "concept": "unrepresentative geographic training data"
  },
  {
   "id": "population estimation bias",
   "label": "population estimation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 2,
   "outdeg": 3,
   "merged_from": [
    "population target bias",
    "systematic bias in population distribution estimation"
   ],
   "concept": "population bias"
  },
  {
   "id": "inequitable resource allocation from misclassification",
   "label": "inequitable resource allocation from misclassification",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "resource allocation inequality"
  },
  {
   "id": "opaque ai systems",
   "label": "opaque ai systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 0,
   "outdeg": 4,
   "merged_from": [
    "black box ambiguities and complex model architectures",
    "blackbox nature of ai-based models"
   ],
   "concept": "black-box nature"
  },
  {
   "id": "misinterpretation of ai insights by decision-makers",
   "label": "misinterpretation of ai insights by decision-makers",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
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
   "concept": "policy-level harm"
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
   "concept": "bias"
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
   "concept": "resource allocation inequality"
  },
  {
   "id": "automated building footprint detection in informal settlements",
   "label": "automated building footprint detection in informal settlements",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "informal settlement mapping"
  },
  {
   "id": "law enforcement targeting of vulnerable populations",
   "label": "law enforcement targeting of vulnerable populations",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "vulnerable population risk"
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
   "id": "dataset exclusion or misrepresentation",
   "label": "dataset exclusion or misrepresentation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "vulnerable population risk"
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
   "id": "biased social and crowdsourced datasets",
   "label": "biased social and crowdsourced datasets",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "biased machine learning datasets"
  },
  {
   "id": "facial recognition systems",
   "label": "facial recognition systems",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3,
   "merged_from": [
    "computer vision analysis of visual data involving human faces"
   ],
   "concept": "computer vision"
  },
  {
   "id": "individual and group privacy violation",
   "label": "individual and group privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "violation of individual and group privacy",
    "violations of individual and group privacy"
   ],
   "concept": "privacy violation"
  },
  {
   "id": "model opacity and lack of interpretability",
   "label": "model opacity and lack of interpretability",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2
  },
  {
   "id": "spatial justice and accountability violations",
   "label": "spatial justice and accountability violations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "spatial injustice"
  },
  {
   "id": "human-centered design and human-in-the-loop",
   "label": "human-centered design and human-in-the-loop",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 0,
   "outdeg": 3,
   "merged_from": [
    "human-centered design and human-in-the-loop processes",
    "participatory approaches and human-in-the-loop"
   ],
   "concept": "human agency and oversight"
  },
  {
   "id": "neglect of social and geographic significance",
   "label": "neglect of social and geographic significance",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "geographic misunderstanding"
  },
  {
   "id": "Generative AI and AI-generated maps",
   "label": "Generative AI and AI-generated maps",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI technologies"
  },
  {
   "id": "lack of understanding of geographic processes",
   "label": "lack of understanding of geographic processes",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic misunderstanding"
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
   "id": "misrepresentation of urban areas",
   "label": "misrepresentation of urban areas",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "social stigmatization of community members",
   "label": "social stigmatization of community members",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PsychologicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "stigmatization"
  },
  {
   "id": "AI-assisted mapping and monitoring",
   "label": "AI-assisted mapping and monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI technologies"
  },
  {
   "id": "malicious use of spatial data",
   "label": "malicious use of spatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "misuse of spatial data"
  },
  {
   "id": "AI and geographic information technologies",
   "label": "AI and geographic information technologies",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI technologies"
  },
  {
   "id": "invasive monitoring of personal information",
   "label": "invasive monitoring of personal information",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "surveillance and tracking"
  },
  {
   "id": "privacy violation",
   "label": "privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 43,
   "indeg": 40,
   "outdeg": 3,
   "merged_from": [
    "privacy violations",
    "infringement on personal privacy",
    "loss of privacy",
    "potential privacy risks"
   ],
   "is_concept": true
  },
  {
   "id": "data protection impact assessments dpia",
   "label": "data protection impact assessments dpia",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "risk to rights and freedoms",
   "label": "risk to rights and freedoms",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "fundamental rights violation"
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
   "degree": 6,
   "indeg": 2,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "discriminatory resource allocation",
   "label": "discriminatory resource allocation",
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
   "id": "GeoAI models utilizing location data",
   "label": "GeoAI models utilizing location data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI modeling"
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
   "concept": "systematic discrimination"
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
   "id": "group re-identification",
   "label": "group re-identification",
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
   "id": "obfuscation of algorithmic bias",
   "label": "obfuscation of algorithmic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic bias"
  },
  {
   "id": "undetected discriminatory outcomes",
   "label": "undetected discriminatory outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "algorithmic bias"
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
   "concept": "racial discrimination in law enforcement"
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
   "id": "digital placelessness",
   "label": "digital placelessness",
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
   "concept": "bias"
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
   "concept": "systematic discrimination"
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
   "degree": 5,
   "indeg": 2,
   "outdeg": 3,
   "is_concept": true
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
   "id": "spatio-temporal predictive policing",
   "label": "spatio-temporal predictive policing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "predictive policing"
  },
  {
   "id": "neighborhood representation bias",
   "label": "neighborhood representation bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geographic representation bias"
  },
  {
   "id": "biased law enforcement outcomes",
   "label": "biased law enforcement outcomes",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "amplification of societal inequities through discriminatory policing",
    "flawed and biased law enforcement outcomes"
   ],
   "concept": "law enforcement inequity"
  },
  {
   "id": "GeoAI for disaster management",
   "label": "GeoAI for disaster management",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI applications"
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
   "id": "denial of resources to marginalized populations",
   "label": "denial of resources to marginalized populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PhysicalHarm",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "inequitable resource distribution"
  },
  {
   "id": "EU AI Act Article 10: Data Governance and Bias Audits",
   "label": "EU AI Act Article 10: Data Governance and Bias Audits",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "EU Artificial Intelligence Act"
  },
  {
   "id": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "label": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "EU AI Act Article 14: Human Oversight",
   "label": "EU AI Act Article 14: Human Oversight",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "EU Artificial Intelligence Act"
  },
  {
   "id": "over-reliance on biased or erroneous automated geoai decisions",
   "label": "over-reliance on biased or erroneous automated geoai decisions",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
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
   "concept": "privacy violation"
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
   "concept": "fundamental rights violation"
  },
  {
   "id": "predictive policing algorithms",
   "label": "predictive policing algorithms",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 0,
   "outdeg": 4,
   "merged_from": [
    "predictive ai modeling for crime",
    "predictive policing algorithms in geoai"
   ],
   "concept": "predictive policing"
  },
  {
   "id": "incorrect criminal identification",
   "label": "incorrect criminal identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "criminal misidentification"
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
   "concept": "fundamental rights violation"
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
   "id": "Geomasking and spatial-temporal cloaking",
   "label": "Geomasking and spatial-temporal cloaking",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Privacy protection methods"
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
   "id": "User privacy protection methods",
   "label": "User privacy protection methods",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Privacy protection methods"
  },
  {
   "id": "deep learning models for population mapping",
   "label": "deep learning models for population mapping",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "inequitable resource and service distribution",
   "label": "inequitable resource and service distribution",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "merged_from": [
    "inequitable resource allocation and service access",
    "socio-spatial service disparities"
   ],
   "concept": "resource allocation inequality"
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
   "concept": "geospatial data processing"
  },
  {
   "id": "outdated or irrelevant training data",
   "label": "outdated or irrelevant training data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "training data quality"
  },
  {
   "id": "system failures and inaccurate results",
   "label": "system failures and inaccurate results",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
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
   "id": "identification and correction of errors or biases",
   "label": "identification and correction of errors or biases",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "geographic location information",
   "label": "geographic location information",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geospatial data features"
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
   "concept": "harm"
  },
  {
   "id": "geoai ethics infographic framework",
   "label": "geoai ethics infographic framework",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai ethics awareness and education"
  },
  {
   "id": "gis ai ethics education",
   "label": "gis ai ethics education",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "geoai ethics awareness and education"
  },
  {
   "id": "inequity from community exclusion",
   "label": "inequity from community exclusion",
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
   "degree": 5,
   "indeg": 3,
   "outdeg": 2
  },
  {
   "id": "flawed policy impacting marginalized communities",
   "label": "flawed policy impacting marginalized communities",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "policy-level harm"
  },
  {
   "id": "Dimensionality reduction visualization",
   "label": "Dimensionality reduction visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Visualization-based mitigation"
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
   "concept": "resource allocation inequality"
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
   "id": "Multi-grouping visualization",
   "label": "Multi-grouping visualization",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "Visualization-based mitigation"
  },
  {
   "id": "outdated training data",
   "label": "outdated training data",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "training data quality"
  },
  {
   "id": "untimely maintenance of training data",
   "label": "untimely maintenance of training data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
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
   "concept": "harm"
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
   "concept": "fundamental rights violation"
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
   "id": "rider privacy violation",
   "label": "rider privacy violation",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violation"
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
   "degree": 2,
   "indeg": 2,
   "outdeg": 0
  },
  {
   "id": "predictive policing input data bias",
   "label": "predictive policing input data bias",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "predictive policing"
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
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "loss of individual geoprivacy",
   "label": "loss of individual geoprivacy",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violation"
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
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "unintended disclosure of sensitive personal characteristics",
   "label": "unintended disclosure of sensitive personal characteristics",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "PrivacyViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "privacy violation"
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
   "id": "cell-tower location monitoring",
   "label": "cell-tower location monitoring",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "mobile location tracking"
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
   "concept": "fundamental rights violation"
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
   "id": "unintentional location data exposure",
   "label": "unintentional location data exposure",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "concept": "privacy violation"
  },
  {
   "id": "GeoAI big data stream analysis",
   "label": "GeoAI big data stream analysis",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2,
   "concept": "GeoAI data processing"
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
   "concept": "privacy violation"
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
   "concept": "biased machine learning datasets"
  },
  {
   "id": "inequitable map products",
   "label": "inequitable map products",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "social inequity"
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
   "concept": "geospatial discrimination"
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
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
  },
  {
   "id": "deep fake geography",
   "label": "deep fake geography",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "geospatial misinformation"
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
   "id": "algorithmic racial bias in criminal identification",
   "label": "algorithmic racial bias in criminal identification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "criminal misidentification"
  },
  {
   "id": "racial discrimination in law enforcement",
   "label": "racial discrimination in law enforcement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "concept": "law enforcement inequity",
   "is_concept": true
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
   "degree": 3,
   "indeg": 1,
   "outdeg": 2
  },
  {
   "id": "economic loss due to price discrimination",
   "label": "economic loss due to price discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EconomicLoss",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "economic loss"
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
   "concept": "algorithmic bias"
  },
  {
   "id": "racial discrimination",
   "label": "racial discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "EqualRightsViolation",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "concept": "systematic discrimination"
  },
  {
   "id": "operable ai ethics guidelines",
   "label": "operable ai ethics guidelines",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 2,
   "indeg": 0,
   "outdeg": 2
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
   "degree": 5,
   "indeg": 4,
   "outdeg": 1,
   "is_concept": true
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
   "degree": 13,
   "indeg": 13,
   "outdeg": 0
  },
  {
   "id": "harm:PrivacyViolation",
   "label": "PrivacyViolation",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "PrivacyViolation",
   "degree": 13,
   "indeg": 13,
   "outdeg": 0
  },
  {
   "id": "harm:EqualRightsViolation",
   "label": "EqualRightsViolation",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "EqualRightsViolation",
   "degree": 42,
   "indeg": 42,
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
   "id": "harm:EconomicLoss",
   "label": "EconomicLoss",
   "type": "HarmCategory",
   "level": 3,
   "harm_family": "EconomicLoss",
   "degree": 9,
   "indeg": 9,
   "outdeg": 0
  },
  {
   "id": "black-box nature",
   "label": "black-box nature",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 6,
   "indeg": 2,
   "outdeg": 4,
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
   "id": "GeoAI data processing",
   "label": "GeoAI data processing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "GeoAI applications",
   "label": "GeoAI applications",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "GeoAI modeling",
   "label": "GeoAI modeling",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "GeoAI model development",
   "label": "GeoAI model development",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "computer vision",
   "label": "computer vision",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "GeoAI technologies",
   "label": "GeoAI technologies",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 6,
   "indeg": 3,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "predictive policing",
   "label": "predictive policing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 7,
   "indeg": 3,
   "outdeg": 4,
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
   "id": "geospatial data processing",
   "label": "geospatial data processing",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "geospatial data features",
   "label": "geospatial data features",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 2,
   "indeg": 1,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "training data quality",
   "label": "training data quality",
   "type": "TechnicalFeature",
   "level": 0,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "misuse of spatial data",
   "label": "misuse of spatial data",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "algorithmic opacity",
   "label": "algorithmic opacity",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1,
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
   "id": "information disclosure",
   "label": "information disclosure",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "Social stigmatization",
   "label": "Social stigmatization",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "surveillance and tracking",
   "label": "surveillance and tracking",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 11,
   "indeg": 8,
   "outdeg": 3,
   "is_concept": true
  },
  {
   "id": "algorithmic bias",
   "label": "algorithmic bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 17,
   "indeg": 13,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "spatial data bias",
   "label": "spatial data bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "re-identification risk",
   "label": "re-identification risk",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 10,
   "indeg": 8,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "environmental impact",
   "label": "environmental impact",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 8,
   "indeg": 6,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "bias and unfairness",
   "label": "bias and unfairness",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "fundamental rights violation",
   "label": "fundamental rights violation",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 11,
   "indeg": 11,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "population bias",
   "label": "population bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 3,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "bias",
   "label": "bias",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "vulnerable population risk",
   "label": "vulnerable population risk",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 6,
   "indeg": 4,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "geographic misunderstanding",
   "label": "geographic misunderstanding",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 4,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "criminal misidentification",
   "label": "criminal misidentification",
   "type": "RiskMechanism",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 3,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "system safety",
   "label": "system safety",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 3,
   "indeg": 3,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "forced displacement",
   "label": "forced displacement",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 3,
   "indeg": 3,
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
   "degree": 7,
   "indeg": 7,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "geospatial discrimination",
   "label": "geospatial discrimination",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 5,
   "indeg": 5,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "stigmatization",
   "label": "stigmatization",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "environmental injustice",
   "label": "environmental injustice",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "spatial injustice",
   "label": "spatial injustice",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "harm to vulnerable populations",
   "label": "harm to vulnerable populations",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "resource allocation inequality",
   "label": "resource allocation inequality",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 10,
   "indeg": 10,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "inequitable resource distribution",
   "label": "inequitable resource distribution",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 2,
   "indeg": 2,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "policy-level harm",
   "label": "policy-level harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "law enforcement inequity",
   "label": "law enforcement inequity",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 5,
   "indeg": 5,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "economic loss",
   "label": "economic loss",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 4,
   "indeg": 4,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "harm",
   "label": "harm",
   "type": "EthicalImpact",
   "level": 2,
   "harm_family": "",
   "degree": 5,
   "indeg": 5,
   "outdeg": 0,
   "is_concept": true
  },
  {
   "id": "transparency",
   "label": "transparency",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 5,
   "indeg": 1,
   "outdeg": 4,
   "is_concept": true
  },
  {
   "id": "Privacy by Design",
   "label": "Privacy by Design",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "human agency and oversight",
   "label": "human agency and oversight",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 1,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "Privacy protection methods",
   "label": "Privacy protection methods",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 3,
   "indeg": 2,
   "outdeg": 1,
   "is_concept": true
  },
  {
   "id": "geoai ethics awareness and education",
   "label": "geoai ethics awareness and education",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
   "is_concept": true
  },
  {
   "id": "Visualization-based mitigation",
   "label": "Visualization-based mitigation",
   "type": "Mitigation",
   "level": 1,
   "harm_family": "",
   "degree": 4,
   "indeg": 2,
   "outdeg": 2,
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
   "to": "safety risks in critical missions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "safety risks in critical missions",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "safety risks in critical missions",
   "to": "system safety",
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
   "from": "disclosure of sensitive geospatial data",
   "to": "privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location privacy violation",
   "to": "privacy violation",
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
   "to": "black-box nature",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "lack of algorithmic transparency and explainability",
   "to": "safety risks in critical missions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "lack of algorithmic transparency and explainability",
   "to": "algorithmic opacity",
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
   "from": "perpetuation of discriminatory applications",
   "to": "algorithmic discrimination",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "systematic discrimination",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
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
   "from": "unintentional disclosure of sensitive information",
   "to": "information disclosure",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location behavior and association privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "location behavior and association privacy violation",
   "to": "location privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "classification of informal settlements and slums",
   "to": "Territorial stigmatization",
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
   "from": "Territorial stigmatization",
   "to": "forced evictions and displacement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Territorial stigmatization",
   "to": "Social stigmatization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "forced evictions and displacement",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "forced evictions and displacement",
   "to": "forced displacement",
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
   "to": "disclosure of sensitive personal information",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "disclosure of sensitive personal information",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "disclosure of sensitive personal information",
   "to": "privacy violation",
   "relation": "IS_A",
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
   "from": "explainable ai",
   "to": "transparency",
   "relation": "IS_A",
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
   "to": "location privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "surreptitious surveillance",
   "to": "surveillance and tracking",
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
   "to": "exclusion from knowledge production",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "sampling bias toward dominant cultures",
   "to": "algorithmic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exclusion from knowledge production",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "exclusion from knowledge production",
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
   "to": "inequitable social outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inequitable social outcomes",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable social outcomes",
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
   "from": "geographic representation bias",
   "to": "spatial data bias",
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
   "to": "reduced reliability and fairness in underserved regions",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "reduced reliability and fairness in underserved regions",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "reduced reliability and fairness in underserved regions",
   "to": "algorithmic bias",
   "relation": "IS_A",
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
   "from": "bias against low-population areas",
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
   "to": "geospatial discrimination",
   "relation": "IS_A",
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
   "from": "individual re-identification",
   "to": "re-identification risk",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Data Minimization",
   "to": "individual re-identification",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Data Minimization",
   "to": "Privacy by Design",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "Foundational GeoAI model training",
   "to": "carbon emissions and resource depletion",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Foundational GeoAI model training",
   "to": "GeoAI model development",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "carbon emissions and resource depletion",
   "to": "environmental degradation and threat to future human life",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "carbon emissions and resource depletion",
   "to": "environmental impact",
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
   "from": "surveillance and tracking misuse",
   "to": "surveillance and tracking",
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
   "to": "fundamental rights violation",
   "relation": "IS_A",
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
   "from": "Stigmatization of communities",
   "to": "Social stigmatization",
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
   "to": "stigmatization",
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
   "from": "mobile location data mapping",
   "to": "mobile location tracking",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "individual location privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "individual location privacy violation",
   "to": "location privacy violation",
   "relation": "IS_A",
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
   "from": "representational bias and exclusion",
   "to": "bias and unfairness",
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
   "from": "privacy breaches of at-risk populations",
   "to": "privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "physical safety threats to vulnerable groups",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "physical safety threats to vulnerable groups",
   "to": "harm to vulnerable populations",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Methodologies",
   "to": "privacy breaches of at-risk populations",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Privacy by Design Methodologies",
   "to": "Privacy by Design",
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
   "to": "resource allocation inequality",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "mosaicking disparate geodata using spatial references and ai",
   "to": "unintentional disclosure of sensitive information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "group privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "group privacy violation",
   "to": "privacy violation",
   "relation": "IS_A",
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
   "from": "oppressive surveillance",
   "to": "surveillance and tracking",
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
   "to": "harm to vulnerable populations",
   "relation": "IS_A",
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
   "from": "High-complexity GeoAI models",
   "to": "GeoAI modeling",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "greenhouse gas emissions",
   "to": "climate change consequences affecting vulnerable populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "greenhouse gas emissions",
   "to": "environmental impact",
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
   "to": "environmental injustice and social burden",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "environmental injustice and social burden",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "environmental injustice and social burden",
   "to": "environmental injustice",
   "relation": "IS_A",
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
   "from": "geographic data scarcity in rural and remote areas",
   "to": "unrepresentative geographic training data",
   "relation": "IS_A",
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
   "from": "population estimation bias",
   "to": "population bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation from misclassification",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable resource allocation from misclassification",
   "to": "resource allocation inequality",
   "relation": "IS_A",
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
   "from": "opaque ai systems",
   "to": "black-box nature",
   "relation": "IS_A",
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
   "to": "policy-level harm",
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
   "to": "bias",
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
   "to": "resource allocation inequality",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "automated building footprint detection in informal settlements",
   "to": "law enforcement targeting of vulnerable populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "automated building footprint detection in informal settlements",
   "to": "informal settlement mapping",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "law enforcement targeting of vulnerable populations",
   "to": "forced evictions and displacement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "law enforcement targeting of vulnerable populations",
   "to": "vulnerable population risk",
   "relation": "IS_A",
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
   "from": "dataset exclusion or misrepresentation",
   "to": "vulnerable population risk",
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
   "from": "biased social and crowdsourced datasets",
   "to": "systematic discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "biased social and crowdsourced datasets",
   "to": "biased machine learning datasets",
   "relation": "IS_A",
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
   "from": "facial recognition systems",
   "to": "computer vision",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "individual and group privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "individual and group privacy violation",
   "to": "privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "model opacity and lack of interpretability",
   "to": "spatial justice and accountability violations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spatial justice and accountability violations",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatial justice and accountability violations",
   "to": "spatial injustice",
   "relation": "IS_A",
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
   "from": "human-centered design and human-in-the-loop",
   "to": "human agency and oversight",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "neglect of social and geographic significance",
   "to": "geographic misunderstanding",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "Generative AI and AI-generated maps",
   "to": "lack of understanding of geographic processes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "Generative AI and AI-generated maps",
   "to": "GeoAI technologies",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "lack of understanding of geographic processes",
   "to": "economic loss from misinformation-driven planning",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "lack of understanding of geographic processes",
   "to": "geographic misunderstanding",
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
   "from": "misrepresentation of urban areas",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social stigmatization of community members",
   "to": "harm:PsychologicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "social stigmatization of community members",
   "to": "stigmatization",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "AI-assisted mapping and monitoring",
   "to": "malicious use of spatial data",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "AI-assisted mapping and monitoring",
   "to": "GeoAI technologies",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "malicious use of spatial data",
   "to": "systematic discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "malicious use of spatial data",
   "to": "misuse of spatial data",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "AI and geographic information technologies",
   "to": "invasive monitoring of personal information",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "AI and geographic information technologies",
   "to": "GeoAI technologies",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "invasive monitoring of personal information",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "invasive monitoring of personal information",
   "to": "surveillance and tracking",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "data protection impact assessments dpia",
   "to": "risk to rights and freedoms",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "risk to rights and freedoms",
   "to": "fundamental rights violation",
   "relation": "IS_A",
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
   "from": "discriminatory resource allocation",
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
   "from": "GeoAI models utilizing location data",
   "to": "collinearity between geographic location and protected characteristics raceethnicity",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "GeoAI models utilizing location data",
   "to": "GeoAI modeling",
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
   "to": "systematic discrimination",
   "relation": "IS_A",
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
   "from": "group re-identification",
   "to": "re-identification risk",
   "relation": "IS_A",
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
   "from": "obfuscation of algorithmic bias",
   "to": "algorithmic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "undetected discriminatory outcomes",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "undetected discriminatory outcomes",
   "to": "algorithmic bias",
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
   "to": "racial discrimination in law enforcement",
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
   "to": "digital placelessness",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "digital placelessness",
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
   "from": "gender bias",
   "to": "bias",
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
   "to": "systematic discrimination",
   "relation": "IS_A",
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
   "from": "intellectual property complications",
   "to": "harm:EconomicLoss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatio-temporal predictive policing",
   "to": "neighborhood representation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spatio-temporal predictive policing",
   "to": "predictive policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "neighborhood representation bias",
   "to": "biased law enforcement outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "neighborhood representation bias",
   "to": "geographic representation bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "biased law enforcement outcomes",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "biased law enforcement outcomes",
   "to": "law enforcement inequity",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "GeoAI for disaster management",
   "to": "representation bias false negatives for buildings in rural or poor areas",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "GeoAI for disaster management",
   "to": "GeoAI applications",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "representation bias false negatives for buildings in rural or poor areas",
   "to": "denial of resources to marginalized populations",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "denial of resources to marginalized populations",
   "to": "harm:PhysicalHarm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "denial of resources to marginalized populations",
   "to": "inequitable resource distribution",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 10: Data Governance and Bias Audits",
   "to": "use of non-representative or error-prone geospatial datasets in high-risk systems",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 10: Data Governance and Bias Audits",
   "to": "EU Artificial Intelligence Act",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 14: Human Oversight",
   "to": "over-reliance on biased or erroneous automated geoai decisions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "EU AI Act Article 14: Human Oversight",
   "to": "EU Artificial Intelligence Act",
   "relation": "IS_A",
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
   "from": "interdependent privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "interdependent privacy violation",
   "to": "privacy violation",
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
   "to": "fundamental rights violation",
   "relation": "IS_A",
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
   "from": "predictive policing algorithms",
   "to": "predictive policing",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "incorrect criminal identification",
   "to": "violation of due process and equal rights",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "incorrect criminal identification",
   "to": "criminal misidentification",
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
   "to": "fundamental rights violation",
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
   "from": "Geomasking and spatial-temporal cloaking",
   "to": "disclosure of sensitive geospatial data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Geomasking and spatial-temporal cloaking",
   "to": "Privacy protection methods",
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
   "from": "geoai foundation models",
   "to": "geoai models",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "User privacy protection methods",
   "to": "disclosure of sensitive geospatial data",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "User privacy protection methods",
   "to": "Privacy protection methods",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "deep learning models for population mapping",
   "to": "population estimation bias",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "inequitable resource and service distribution",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable resource and service distribution",
   "to": "resource allocation inequality",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geo-referencing",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geo-referencing",
   "to": "geospatial data processing",
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
   "from": "outdated or irrelevant training data",
   "to": "training data quality",
   "relation": "IS_A",
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
   "from": "geographic location information",
   "to": "privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geographic location information",
   "to": "geospatial data features",
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
   "to": "harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "geoai ethics infographic framework",
   "to": "physical harm",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "geoai ethics infographic framework",
   "to": "geoai ethics awareness and education",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "gis ai ethics education",
   "to": "inequity from community exclusion",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "gis ai ethics education",
   "to": "geoai ethics awareness and education",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequity from community exclusion",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequity from community exclusion",
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
   "to": "flawed policy impacting marginalized communities",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "flawed policy impacting marginalized communities",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "flawed policy impacting marginalized communities",
   "to": "policy-level harm",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "Dimensionality reduction visualization",
   "to": "masking of subpopulation conditions",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Dimensionality reduction visualization",
   "to": "Visualization-based mitigation",
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
   "to": "resource allocation inequality",
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
   "from": "Multi-grouping visualization",
   "to": "subjective narrative reinforcement",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "Multi-grouping visualization",
   "to": "Visualization-based mitigation",
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
   "from": "outdated training data",
   "to": "training data quality",
   "relation": "IS_A",
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
   "to": "harm",
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
   "to": "fundamental rights violation",
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
   "from": "public sharing of personal vehicle trajectory data",
   "to": "rider privacy violation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "rider privacy violation",
   "to": "harm:PrivacyViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "rider privacy violation",
   "to": "privacy violation",
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
   "from": "predictive policing input data bias",
   "to": "biased law enforcement outcomes",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "predictive policing input data bias",
   "to": "predictive policing",
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
   "from": "loss of individual geoprivacy",
   "to": "privacy violation",
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
   "from": "unintended disclosure of sensitive personal characteristics",
   "to": "privacy violation",
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
   "from": "cell-tower location monitoring",
   "to": "oppressive surveillance",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "cell-tower location monitoring",
   "to": "mobile location tracking",
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
   "to": "fundamental rights violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "improved public education on position tracking",
   "to": "unintentional location data exposure",
   "relation": "INHIBITS",
   "weight": 1.0
  },
  {
   "from": "unintentional location data exposure",
   "to": "privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "GeoAI big data stream analysis",
   "to": "disclosure of intimate individual behaviors",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "GeoAI big data stream analysis",
   "to": "GeoAI data processing",
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
   "to": "privacy violation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "spatially biased crowdsourced datasets",
   "to": "inequitable map products",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "spatially biased crowdsourced datasets",
   "to": "biased machine learning datasets",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable map products",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "inequitable map products",
   "to": "social inequity",
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
   "to": "geospatial discrimination",
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
   "to": "deep fake geography",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "deep fake geography",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "deep fake geography",
   "to": "geospatial misinformation",
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
   "from": "algorithmic racial bias in criminal identification",
   "to": "racial discrimination in law enforcement",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "algorithmic racial bias in criminal identification",
   "to": "criminal misidentification",
   "relation": "IS_A",
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
   "to": "law enforcement inequity",
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
   "from": "economic loss due to price discrimination",
   "to": "economic loss",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "performance bias toward majority demographic groups",
   "to": "racial discrimination",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "performance bias toward majority demographic groups",
   "to": "algorithmic bias",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial discrimination",
   "to": "harm:EqualRightsViolation",
   "relation": "IS_A",
   "weight": 1.0
  },
  {
   "from": "racial discrimination",
   "to": "systematic discrimination",
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
   "to": "geospatial misinformation",
   "relation": "PROMOTES",
   "weight": 1.0
  },
  {
   "from": "geospatial misinformation",
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
   "to": "geospatial misinformation",
   "relation": "INHIBITS",
   "weight": 1.0
  }
 ],
 "public_safe": true
};
