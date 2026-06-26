window.BENCHMARK_DATA = {
 "generated": "2026-06-26",
 "papers": [
  {
   "id": "001",
   "source": {
    "title": "Uncertainty quantification framework for aerial and UAV photogrammetry through error propagation",
    "doi": "10.1016/j.isprsjprs.2026.04.047",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.04.047",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Uncertainty quantification of the photogrammetry process is essential for providing per-point accuracy credentials of the point clouds. Unlike airborne LiDAR, whose accuracy generally remains consistent with objects with varying geometric complexity, the accuracy of photogrammetric point clouds is rather object/scene-dependent, as it relies on algorithm-derived measurements. Generally, errors of the photogrammetric point clouds propagate through a two-step process: Structure-from-Motion (SfM) with Bundle adjustment (BA), followed by Multi-view Stereo (MVS). While uncertainty estimation in the SfM stage has been well studied using the first-order statistics of the reprojection error function, that in the MVS stage remains largely unsolved and non-standardized, primarily due to its non-differentiable and multi-modal nature (i.e., from pixel values to geometry). In this paper, we present an uncertainty quantification framework closing this gap by associating an error covariance matrix per point accounting for this two-step photogrammetry process. Specifically, to estimate the uncertainty in the MVS stage, we propose a novel, self-calibrating method by taking reliable n-view points (n ≥ 6) per-view to regress the disparity uncertainty using highly relevant cues (such as matching cost values) from the MVS stage. Compared to existing approaches, our method uses self-contained, reliable 3D points extracted directly from the MVS process, with the benefit of being self-supervised and "
   },
   "report": "This paper introduces a technical framework focused on uncertainty quantification for the photogrammetry process, aiming to provide certifiable per-point accuracy credentials for point clouds. By addressing measurement dispersions and evaluating reliability within the Earth observation imaging process, the methodology inherently touches upon the ethical domain of deploying models in high-stakes environments. The primary ethical touchpoints involve the performance of these models in safety-critical tasks and high-risk remote sensing applications, where the accuracy of algorithmic predictions is paramount to downstream decision-making.\n\nThe auditor found no ethical risk actually instantiated by this paper's contribution—the findings are at most disclosures of category-level dynamics, and the methodology actively works against potential harms. As a broader category disclosure, there is a strongly grounded potential that the application of uncertainty quantification serves to inhibit the unreliability of algorithmic predictions, specifically under the condition of high-risk remote sensing applications. Furthermore, while it is moderately plausible that such unreliability could promote systemic failure in disaster or safety monitoring—carrying risks of physical harm during the Earth observation imaging process—this negative causal pathway is explicitly not triggered by the paper. The methodology inherently avoids the triggering actions that would compromise safety monitoring systems.\n\nRather than exacerbating risks, the paper natively embeds mitigations by providing certifiable per-point accuracy that allows point clouds to be used reliably. By actively developing uncertainty quantification, the framework successfully neutralizes the unreliability mechanisms that would otherwise threaten safety-critical tasks. In the auditor’s overall judgment, zero risks are actually instantiated by this paper; the review yields only one potential disclosure regarding a protective mechanism and one moderately grounded risk pathway that is explicitly not triggered. The paper proactively addresses ethical concerns within its domain, resulting in a safe technical contribution with no actionable audit findings against it.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (uncertainty quantification:Mitigation) --INHIBITS--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)  <graph_exact | quote✓ | disclosure>  (when: high-risk remote sensing applications)\n- (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --PROMOTES--> (systemic failure in disaster or safety monitoring:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | n/a>  (when: Earth observation imaging process)\n\nEntities by type:\n  RiskMechanism: unreliability of algorithmic predictions in safety-critical tasks\n  EthicalImpact: systemic failure in disaster or safety monitoring\n  Mitigation: uncertainty quantification",
   "triples": [
    {
     "head": {
      "entity": "uncertainty quantification",
      "type": "Mitigation",
      "harm_family": null
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "high-risk remote sensing applications",
      "evidence": "The paper introduces a framework for estimating the uncertainty of the photogrammetry process in the Structure-from-Motion and Multi-view Stereo stages, providing certifiable per-point accuracy that mitigates algorithmic unreliability.",
      "input_quote": "Uncertainty quantification of the photogrammetry process is essential for providing per-point accuracy credentials of the point clouds.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "unreliability of algorithmic predictions in safety-critical tasks",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.04.047#0"
    },
    {
     "head": {
      "entity": "unreliability of algorithmic predictions in safety-critical tasks",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Earth observation imaging process",
      "evidence": "If algorithmic predictions remain unreliable, they risk triggering systemic failures when deployed in high-stakes downstream applications like disaster management and urban planning.",
      "input_quote": "The framework provides \"certifiable\" per-point accuracy, enabling photogrammetric point clouds to be used reliably in high-stakes downstream applications.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "NOT_TRIGGERED",
      "instantiation_model_label": "NOT_TRIGGERED",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "systemic failure in disaster or safety monitoring",
      "type": "EthicalImpact",
      "harm_family": "PhysicalHarm"
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.04.047#1"
    }
   ],
   "graph_paths": [
    "(re-identification risk:RiskMechanism) --[PROMOTES | Condition: When de-identification is insufficient to protect sensitive location traces | When anonymous datasets are publicly shared without sufficient protection]--> (privacy violation:EthicalImpact)",
    "(privacy violation:EthicalImpact) --[PROMOTES | Condition: non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories]--> (privacy violation:EthicalImpact)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (discriminatory resource allocation in humanitarian aid:EthicalImpact)",
    "(uncertainty quantification:Mitigation) --[INHIBITS | Condition: high-risk remote sensing applications]--> (unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism)",
    "(unreliability of algorithmic predictions in safety-critical tasks:RiskMechanism) --[PROMOTES | Condition: Earth observation imaging process]--> (systemic failure in disaster or safety monitoring:EthicalImpact)",
    "(predictive policing:TechnicalFeature) --[PROMOTES | Condition: When biased input data or model designs are employed]--> (criminal misidentification:RiskMechanism)",
    "(EU Artificial Intelligence Act:Mitigation) --[INHIBITS | Condition: Implementation of a comprehensive legislative attempt]--> (risks of artificial intelligence:RiskMechanism)",
    "(spatial data bias:RiskMechanism) --[PROMOTES]--> (social inequity:EthicalImpact)",
    "(predictive policing:TechnicalFeature) --[PROMOTES | Condition: Neighborhood level]--> (geographic representation bias:RiskMechanism)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (resource allocation inequality:EthicalImpact)",
    "(modifiable areal unit problem maup:TechnicalFeature) --[PROMOTES]--> (geographic representation bias:RiskMechanism)",
    "(training data errors in ml-based mapping:TechnicalFeature) --[PROMOTES | Condition: Mapping of Deprived Urban Areas (DUAs)]--> (geographic representation bias:RiskMechanism)",
    "(biased machine learning datasets:TechnicalFeature) --[PROMOTES | Condition: When data is sparse in rural areas or privileges dominant demographics]--> (social inequity:EthicalImpact)",
    "(ai-driven building detection and classification from remote sensing data:TechnicalFeature) --[PROMOTES | Condition: When training data contains sample imbalances for specific infrastructure types]--> (misclassification of heterogeneous roof types:RiskMechanism)",
    "(individual risk profiling based on location and driving data:RiskMechanism) --[PROMOTES]--> (economic loss from increased insurance costs:EthicalImpact)",
    "(data integration and modeling:Mitigation) --[INHIBITS | Condition: When used to correct bias in crowdsourced or VGI datasets by combining multiple data sources.]--> (algorithmic bias:RiskMechanism)",
    "(Privacy by Design:Mitigation) --[INHIBITS | Condition: In humanitarian and crisis contexts]--> (privacy violation:EthicalImpact)",
    "(ai risk estimation models:TechnicalFeature) --[PROMOTES | Condition: When applied to health insurance rate setting]--> (individual risk profiling based on location and driving data:RiskMechanism)",
    "(computer vision:TechnicalFeature) --[PROMOTES | Condition: Identity authentication at borders or on devices]--> (algorithmic bias:RiskMechanism)",
    "(individual risk profiling based on location and driving data:RiskMechanism) --[PROMOTES]--> (economic loss:EthicalImpact)",
    "(inadvertent inferential error:RiskMechanism) --[PROMOTES | Condition: In the absence of ethical guides to provide checks and balances on data and methods.]--> (social inequity:EthicalImpact)",
    "(deep-learning algorithm for image segmentation beam:TechnicalFeature) --[PROMOTES | Condition: When training data is specific to informal dwellings but applied to formal or industrial city areas.]--> (algorithmic focus bias:RiskMechanism)",
    "(EU AI Act Article 10: Data Governance and Bias Audits:Mitigation) --[INHIBITS | Condition: High-risk systems under Annex III]--> (use of non-representative or error-prone geospatial datasets in high-risk systems:RiskMechanism)",
    "(Multi-grouping visualization:Mitigation) --[INHIBITS | Condition: By comparing outcomes across different grouping schemes]--> (subjective narrative reinforcement:RiskMechanism)",
    "(manipulation of xai methods:TechnicalFeature) --[PROMOTES]--> (algorithmic bias:RiskMechanism)",
    "(deep learning models for population mapping:TechnicalFeature) --[PROMOTES | Condition: Under conditions of spatial heterogeneity and varying neighborhood sizes]--> (population estimation bias:RiskMechanism)",
    "(Privacy by Design:Mitigation) --[INHIBITS | Condition: By reducing the volume of sensitive spatial data collected]--> (re-identification risk:RiskMechanism)",
    "(geographic data scarcity in rural and remote areas:TechnicalFeature) --[PROMOTES | Condition: when models perform well only in data-rich urban areas]--> (inequitable resource and service distribution:EthicalImpact)",
    "(EU Artificial Intelligence Act:Mitigation) --[INHIBITS | Condition: High-risk systems under Annex III]--> (use of non-representative or error-prone geospatial datasets in high-risk systems:RiskMechanism)",
    "(inadvertent inferential error:RiskMechanism) --[PROMOTES | Condition: In the absence of ethical guides to provide checks and balances on data and methods.]--> (inequitable social outcomes:EthicalImpact)",
    "(population estimation bias:RiskMechanism) --[PROMOTES | Condition: In the context of land use and resource management]--> (inequitable resource allocation from misclassification:EthicalImpact)",
    "(subjective spatial and non-spatial data grouping:TechnicalFeature) --[PROMOTES]--> (subjective narrative reinforcement:RiskMechanism)",
    "(population-based heuristics in toponym resolution:TechnicalFeature) --[PROMOTES | Condition: During place name disambiguation (toponym resolution)]--> (geographic representation bias:RiskMechanism)",
    "(surveillance and tracking measures:TechnicalFeature) --[PROMOTES | Condition: During the COVID-19 pandemic]--> (privacy violation:EthicalImpact)",
    "(population estimation bias:RiskMechanism) --[PROMOTES | Condition: When models are used to facilitate resource allocation and disaster preparedness]--> (inequitable resource and service distribution:EthicalImpact)",
    "(geographic data scarcity in rural and remote areas:TechnicalFeature) --[PROMOTES | Condition: When datasets fail to represent actual target regions]--> (population estimation bias:RiskMechanism)",
    "(subjective narrative reinforcement:RiskMechanism) --[PROMOTES]--> (statistical gerrymandering and social stereotype reinforcement:EthicalImpact)",
    "(black-box spatial analysis:TechnicalFeature) --[PROMOTES | Condition: When complex multidimensional geographic variables are processed without transparent guardrails.]--> (inadvertent inferential error:RiskMechanism)",
    "(Visualization-based mitigation:Mitigation) --[INHIBITS | Condition: By comparing outcomes across different grouping schemes]--> (subjective narrative reinforcement:RiskMechanism)",
    "(deep-learning algorithm for image segmentation beam:TechnicalFeature) --[PROMOTES | Condition: When training data is specific to informal dwellings but applied to formal or industrial city areas.]--> (algorithmic bias:RiskMechanism)",
    "(EU Artificial Intelligence Act:Mitigation) --[INHIBITS | Condition: High-risk automated decision systems]--> (over-reliance on biased or erroneous automated geoai decisions:RiskMechanism)"
   ],
   "track2_docs": [
    {
     "source": "Responsible_AI_for_Cities.pdf",
     "content": "news articles, and online presentations related to these two pro - jects. Appendix C presents the sources of the secondary data used in our study. Findings Generalizability Owing to the limited bandwidth of eThekwini’s broadband network, data for AI model  training took a prolonged time to reach UNITAC, which is based in Hamburg, Germany.  JOURNAL OF URBAN TECHNOLOGY   119 Initial samples were shared via a third party to begin development of the tool, but the  bulk of the database for a single year of imagery (approximately 200GB) had to be phys - ically transported on a hard drive. Although the model achieved 94 percent accuracy for  the year 2019, it soon became apparent that the data-task-AI fit was very limited in terms  of generalizability. The images were affected by atmospheric conditions, seasons, and  time of flight. Additionally, the quality was affected by the sensor used for image  capture, as the company managing the collection process operates over a three-year con - tract, and every third year a LiDAR scan is performed instead of normal photography.  Therefore, image sets vary significantly from year to year. As a result, the images collected  in 2020 had already a significantly lower tool performance and required retraining of the  model. One of the use cases envisioned by the Human Settlement Unit was running  BEAM through decades-wide historical aerials in the municipality’s archives.  However, this solution would have required lengthy manual labeling and training for  each image set. Project development on the eThekwini side also moved from the  Human Settlement Unit to Corporate GIS Unit, the City’s centralized spatial data  storage unit. This handover was meant to provide better technical expertise and was  aligned with the city’s data management rationalization. However, it shifted the focus  of the tool from informal settlements to the entire city: a building footprint layer is “foun - dational” (INT.05) because it provides the basis for"
    },
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "uncertainty quantification approaches were developed to estimate the reliability of the model predictions. B. Sources of Uncertainty 1) Data Uncertainty: Data uncertainty consists of random- ness and bias in the data samples in the training and testing datasets caused by measurement errors or sampling errors, and lack of knowledge, [105]. In particular, data uncertainty can be divided into uncertainty in the raw data and lack of domain knowledge. Uncertainty in the raw data usually arises in the EO data collection and preprocessing stages, including the RS imaging process and annotations of the Earth’s surface properties for remote observation. To understand uncertainty in this EO data collection stage, a guide to the expression of uncertainty in measurement (GUM) has been proposed. It defines uncertainty as a parameter associated with the result of a measurement that characterizes the dispersion of the values that could reasonably be attributed to the measurand of the raw EO data ( i.e., X and X ∗) [106]. However, uncertainty in the measurement is inevitable and remains difficult to represent and estimate from the observations [107]. On the contrary, the labeled targets subset Y of the training dataset can bring uncertainty due to mistakes in the artificial labeling process and discrete annotations of ground surfaces. Specifically, definite bound- aries between land cover classes are often nonexistent in the real world, and determining the type of classification scheme characterizing the precise nature of the classes is uncertain [108]. Furthermore, the lack of domain knowledge of the model can cause uncertainty concerning the different domain dis- tributions of the observed data in the training dataset X and testing dataset X ∗. In the process of RS imaging, the characteristics of the observed data are related to spatial and temporal conditions, such as illumination, season and weather. The alternatives of the imaging situation can lead to hetero- geneous data"
    },
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "model deployment. In the context of supervised learning, a training dataset D is constructed in the data collection step, containing N pairs of input data sample x and labeled target y, as follows: D = (X , Y) = {xi, yi}N i=1. (9) Then, the model architecture is designed according to the requirement of EO missions, and the mapping function as well as its parameters θ are initialized (i.e., fθ is determined). IEEE GEOSCIENCE AND REMOTE SENSING MAGAZINE, JUNE 2023 11 Data Collection𝒟=(𝒳,𝒴) Model Construction𝑓𝜽:𝕏→𝕐 Model Training𝜽→𝒟.𝜽Model Deployment𝑓#𝜽:𝕏∗→𝕐∗ Data UncertaintyModel Uncertainty Fig. 9. Flow chart of an AI algorithm being applied to geoscience and RS data analysis. Next, the model training process utilizes a loss function to minimize errors and optimize the parameters of the model with the training dataset D (i.e., the parameters θ are optimized to ˆθ). Finally, the samples in the testing dataset x∗ ∈ X ∗ are forwarded into predictions y∗ ∈ Y ∗ using the trained model fˆθ in the model deployment step ( i.e., f ˆθ : X∗ → Y∗). The concept of uncertainty refers to a lack of knowledge about specific factors, parameters or models [104]. Among the above steps of applying an AI algorithm, uncertainty can occur in the training dataset and testing dataset during data collection and model deployment (data uncertainty). Mean- while, uncertainty can also arise in the model parameters and their optimization during model construction and model training (model uncertainty). In the literature, many studies were undertaken to determine the sources of uncertainty, while various uncertainty quantification approaches were developed to estimate the reliability of the model predictions. B. Sources of Uncertainty 1) Data Uncertainty: Data uncertainty consists of random- ness and bias in the data samples in the training and testing datasets caused by measurement errors or sampling errors, and lack of knowledge, [105]. In particular, data uncertainty can be divided into"
    }
   ]
  },
  {
   "id": "002",
   "source": {
    "title": "LandSegmenter: Towards a flexible foundation model for Land Use and Land Cover mapping",
    "doi": "10.1016/j.isprsjprs.2026.04.056",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.04.056",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Land Use and Land Cover (LULC) mapping is a fundamental task in Earth Observation (EO). However, current LULC models are typically developed for a specific modality and a fixed class taxonomy, limiting their generalizability and broader applicability. Recent advances in foundation models (FMs) offer promising opportunities for building universal models. Yet, task-agnostic FMs often require fine-tuning for downstream applications, whereas task-specific FMs rely on massive amounts of labeled data for training, which is costly and impractical in the remote sensing (RS) domain. To address these challenges, we propose LandSegmenter, an LULC FM framework that resolves three-stage challenges at the input, model, and output levels. From the input side, to alleviate the heavy demand on labeled data for FM training, we introduce LAnd Segment (LAS), a large-scale, multi-modal, multi-source dataset built primarily with globally sampled weak labels from existing LULC products. LAS provides a scalable, cost-effective alternative to manual annotation, enabling large-scale FM training across diverse LULC domains. For model architecture, LandSegmenter integrates an RS-specific adapter for cross-modal feature extraction and a text encoder for semantic awareness enhancement. At the output stage, we introduce a class-wise confidence-guided fusion strategy to mitigate semantic omissions and further improve LandSegmenter’s zero-shot performance. We evaluate LandSegmenter on six precisely annotated"
   },
   "report": "This paper introduces LandSegmenter, a land use and land cover (LULC) foundation model framework designed to handle diverse sensors and taxonomies with minimal fine-tuning. Technically, the authors curate a large-scale dataset comprising subsets from diverse sources for the model's pre-training and fine-tuning stages, and they apply AI-driven building detection to remote sensing data from major metropolitan areas. These methodological choices intersect with ethical considerations primarily through the mass aggregation of geospatial training data, the push toward process automation with reduced human intervention, and the categorization of urban infrastructure.\n\nThe auditor finds with strong confidence one actually instantiated risk: the development of this GeoAI foundation model promotes the disclosure of sensitive geospatial data, specifically conditioned upon the pre-training and fine-tuning stages that utilize the curated geospatial datasets. Beyond this concrete finding, several category-level risks are disclosed as potential pathways associated with the paper's techniques, though they are not actually triggered by this research. Plausibly, the disclosure of sensitive geospatial data could promote location privacy violations, but only under the condition that home locations, workspaces, or daily trajectories are explicitly exposed. Furthermore, the framework's highly automated nature presents a moderate potential for automation bias; if users overrely on the AI results without local expertise, this bias could lead to economic loss through the misinterpretation or misuse of remote sensing data. Finally, the AI-driven building detection technique holds a moderate potential for misclassifying heterogeneous roof types if the training data contains sample imbalances, which could subsequently drive resource allocation inequality if roof typology is inappropriately utilized as a proxy for socio-economic status. \n\nThe extracted audit records do not identify any explicit mitigations or neutralized risks within the paper's text. Overall, the auditor's judgment is that out of six evaluated risk pathways, only one is actually instantiated by the paper's contributions: the well-grounded, strong-confidence finding regarding the exposure of sensitive geospatial data during model training. The remaining five risk pathways are merely disclosures of broader category-level vulnerabilities—such as downstream privacy violations, automation bias, and equality harms—which the paper's specific use cases do not trigger. While the baseline data sensitivity risk requires careful consideration by developers, the more severe downstream ethical impacts remain theoretical rather than actualized by this work.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (geoai foundation models:TechnicalFeature) --PROMOTES--> (disclosure of sensitive geospatial data:RiskMechanism)  <graph_exact | quote✓ | AUDIT>  (when: During pre-training and fine-tuning stages with geospatial data)\n- (disclosure of sensitive geospatial data:RiskMechanism) --PROMOTES--> (location privacy violation:EthicalImpact) [PrivacyViolation]  <graph_exact | quote✗ | disclosure>  (when: When exposing home locations, workspaces, and daily trajectories)\n- (process automation with reduced human intervention:TechnicalFeature) --PROMOTES--> (automation bias:RiskMechanism)  <graph_exact | quote✗ | disclosure>\n- (automation bias:RiskMechanism) --PROMOTES--> (misinterpretation or misuse of remote sensing data:EthicalImpact) [EconomicLoss]  <graph_exact | quote✗ | disclosure>  (when: Overreliance on AI results without local expertise)\n- (ai-driven building detection and classification from remote sensing data:TechnicalFeature) --PROMOTES--> (misclassification of heterogeneous roof types:RiskMechanism)  <graph_exact | quote✗ | disclosure>  (when: When training data contains sample imbalances for specific infrastructure types)\n- (misclassification of heterogeneous roof types:RiskMechanism) --PROMOTES--> (resource allocation inequality:EthicalImpact) [EqualRightsViolation]  <graph_exact | quote✗ | disclosure>  (when: When roof typology is used as a proxy for socio-economic status)\n\nEntities by type:\n  TechnicalFeature: geoai foundation models, process automation with reduced human intervention, ai-driven building detection and classification from remote sensing data\n  RiskMechanism: disclosure of sensitive geospatial data, automation bias, misclassification of heterogeneous roof types\n  EthicalImpact: location privacy violation, misinterpretation or misuse of remote sensing data, resource allocation inequality",
   "triples": [
    {
     "head": {
      "entity": "geoai foundation models",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "During pre-training and fine-tuning stages with geospatial data",
      "evidence": "The paper introduces LandSegmenter, a foundational model trained on massive multi-modal remote sensing datasets across global contexts, which inherent risks sensitive data inclusion during large-scale pre-training.",
      "input_quote": "To address these challenges, we propose LandSegmenter, an LULC FM framework that resolves three-stage challenges at the input, model, and output levels.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "INSTANTIATED",
      "instantiation_model_label": "INSTANTIATED",
      "instantiation_downgraded": false,
      "instantiation_quote": "For LULC FM training, we curated the LAS dataset, comprising eight subsets from diverse sources, as shown in Fig. 2.",
      "instantiation_verified": true
     },
     "tail": {
      "entity": "disclosure of sensitive geospatial data",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.04.056#0"
    },
    {
     "head": {
      "entity": "disclosure of sensitive geospatial data",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When exposing home locations, workspaces, and daily trajectories",
      "evidence": "By training and evaluating on high-resolution urban datasets capable of identifying individual structures and residential details, the framework poses risks of exposing specific locational contexts if non-public or sensitive features are inadvertently mapped.",
      "input_quote": "Utilizes datasets from major metropolitan areas (New York City, Chinese cities) for identifying buildings, impervious surfaces, and residential areas.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "location privacy violation",
      "type": "EthicalImpact",
      "harm_family": "PrivacyViolation"
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.04.056#1"
    },
    {
     "head": {
      "entity": "process automation with reduced human intervention",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "The implementation of zero-shot semantic segmentation with robust generalizability automates the creation of land cover maps while requiring little to no human fine-tuning.",
      "input_quote": "The framework provides a universal, flexible LULC solution capable of handling diverse sensors and taxonomies with minimal or no fine-tuning.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "automation bias",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain001",
     "tid": "10.1016/j.isprsjprs.2026.04.056#2"
    },
    {
     "head": {
      "entity": "automation bias",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Overreliance on AI results without local expertise",
      "evidence": "Given that these automatically generated maps are explicitly intended for critical environmental and administrative decisions, an overreliance on zero-shot map boundaries without local ground-truthing can lead to critical misinterpretations affecting agriculture and resource allocation.",
      "input_quote": "Directly maps land use for agriculture (crops), forestry, and water management.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "misinterpretation or misuse of remote sensing data",
      "type": "EthicalImpact",
      "harm_family": "EconomicLoss"
     },
     "chain_id": "audit::chain001",
     "tid": "10.1016/j.isprsjprs.2026.04.056#3"
    },
    {
     "head": {
      "entity": "ai-driven building detection and classification from remote sensing data",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When training data contains sample imbalances for specific infrastructure types",
      "evidence": "The framework is applied specifically to map structures and residential areas using metropolitan datasets. Uneven representation of global architectural variations in the weak training labels could drive the misclassification of certain urban morphologies.",
      "input_quote": "Utilizes datasets from major metropolitan areas (New York City, Chinese cities) for identifying buildings, impervious surfaces, and residential areas.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "misclassification of heterogeneous roof types",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain002",
     "tid": "10.1016/j.isprsjprs.2026.04.056#4"
    },
    {
     "head": {
      "entity": "misclassification of heterogeneous roof types",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When roof typology is used as a proxy for socio-economic status",
      "evidence": "Because regional planners and public administrators rely on these segmented features as reference data, misclassification of different residential types could unfairly skew the geographic distribution of administrative resources or public funds.",
      "input_quote": "Employs reference data from administrative databases (e.g., French BDOCGE2) used by regional planners.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "resource allocation inequality",
      "type": "EthicalImpact",
      "harm_family": "EqualRightsViolation"
     },
     "chain_id": "audit::chain002",
     "tid": "10.1016/j.isprsjprs.2026.04.056#5"
    }
   ],
   "graph_paths": [
    "(re-identification risk:RiskMechanism) --[PROMOTES | Condition: When de-identification is insufficient to protect sensitive location traces | When anonymous datasets are publicly shared without sufficient protection]--> (privacy violation:EthicalImpact)",
    "(disclosure of sensitive geospatial data:RiskMechanism) --[PROMOTES | Condition: non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories]--> (location privacy violation:EthicalImpact)",
    "(privacy violation:EthicalImpact) --[PROMOTES | Condition: non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories]--> (privacy violation:EthicalImpact)",
    "(dalle 2 generative map synthesis:TechnicalFeature) --[PROMOTES | Condition: when models generate pseudo-words or non-existent provinces]--> (generation of misleading geospatial information and pseudo-words:RiskMechanism)",
    "(GeoAI models utilizing location data:TechnicalFeature) --[PROMOTES | Condition: When location is used as a proxy for social demographics]--> (collinearity between geographic location and protected characteristics raceethnicity:RiskMechanism)",
    "(unrepresentative geographic training data:TechnicalFeature) --[PROMOTES | Condition: When data is heavily skewed toward specific regions like North America and Europe]--> (biased model predictions and rankings:RiskMechanism)",
    "(process automation with reduced human intervention:TechnicalFeature) --[PROMOTES]--> (automation bias:RiskMechanism)",
    "(User privacy protection methods:Mitigation) --[INHIBITS | Condition: In human mobility studies seeking to balance data utility and privacy]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(public sharing of personal vehicle trajectory data:TechnicalFeature) --[PROMOTES]--> (privacy violation:EthicalImpact)",
    "(federated learning:Mitigation) --[INHIBITS | Condition: decentralized data distribution]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(classification of informal settlements and slums:TechnicalFeature) --[PROMOTES | Condition: When sensitive maps are published without care for local consequences]--> (Territorial stigmatization:RiskMechanism)",
    "(GeoAI modeling:TechnicalFeature) --[PROMOTES | Condition: When location is used as a proxy for social demographics]--> (collinearity between geographic location and protected characteristics raceethnicity:RiskMechanism)",
    "(bias:RiskMechanism) --[PROMOTES | Condition: Overreliance on AI results without local expertise]--> (misinterpretation or misuse of remote sensing data:EthicalImpact)",
    "(collinearity between geographic location and protected characteristics raceethnicity:RiskMechanism) --[PROMOTES]--> (systematic discrimination:EthicalImpact)",
    "(biased model predictions and rankings:RiskMechanism) --[PROMOTES | Condition: In scenarios affecting resource allocation, safety classification, or visibility]--> (geographic discrimination and social inequality:EthicalImpact)",
    "(generative adversarial networks gans:TechnicalFeature) --[PROMOTES | Condition: When models create unrealistic artifacts in map designs]--> (deep fake geography:EthicalImpact)",
    "(ai-driven building detection and classification from remote sensing data:TechnicalFeature) --[PROMOTES | Condition: When training data contains sample imbalances for specific infrastructure types]--> (misclassification of heterogeneous roof types:RiskMechanism)",
    "(surveillance and tracking measures:TechnicalFeature) --[PROMOTES | Condition: During the COVID-19 pandemic]--> (privacy violation:EthicalImpact)",
    "(biased model predictions and rankings:RiskMechanism) --[PROMOTES | Condition: In scenarios affecting resource allocation, safety classification, or visibility]--> (geospatial discrimination:EthicalImpact)",
    "(geospatial data features:TechnicalFeature) --[PROMOTES | Condition: If geodata is not handled appropriately.]--> (privacy violation:EthicalImpact)",
    "(ai technology:TechnicalFeature) --[PROMOTES | Condition: Development lacking integration with the humanities]--> (bias:RiskMechanism)",
    "(collinearity between geographic location and protected characteristics raceethnicity:RiskMechanism) --[PROMOTES]--> (racial and income-based discrimination:EthicalImpact)",
    "(process automation with reduced human intervention:TechnicalFeature) --[PROMOTES]--> (bias:RiskMechanism)",
    "(generation of misleading geospatial information and pseudo-words:RiskMechanism) --[PROMOTES | Condition: particularly in sensitive political or cultural contexts]--> (geospatial misinformation:EthicalImpact)",
    "(Territorial stigmatization:RiskMechanism) --[PROMOTES | Condition: When stigmatization affects public perception and policy]--> (forced evictions and displacement:EthicalImpact)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (discriminatory resource allocation in humanitarian aid:EthicalImpact)",
    "(Geomasking and spatial-temporal cloaking:Mitigation) --[INHIBITS]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (resource allocation inequality:EthicalImpact)",
    "(predictive policing:TechnicalFeature) --[PROMOTES | Condition: When biased input data or model designs are employed]--> (criminal misidentification:RiskMechanism)",
    "(generative adversarial networks gans:TechnicalFeature) --[PROMOTES | Condition: When models create unrealistic artifacts in map designs]--> (geospatial misinformation:EthicalImpact)",
    "(predictive policing:TechnicalFeature) --[PROMOTES | Condition: Neighborhood level]--> (geographic representation bias:RiskMechanism)",
    "(resnet-18 based ai-generated map detector:Mitigation) --[INHIBITS | Condition: when applied to identify potential misinformation on social media]--> (geospatial misinformation:EthicalImpact)",
    "(geoai foundation models:TechnicalFeature) --[PROMOTES | Condition: During pre-training and fine-tuning stages with geospatial data]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(automation bias:RiskMechanism) --[PROMOTES | Condition: Overreliance on AI results without local expertise]--> (misinterpretation or misuse of remote sensing data:EthicalImpact)"
   ],
   "track2_docs": [
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "map in the 1st convolutional layer. (b) Detection results for vegetation. (c) The 6th feature map in the 6th convolutional layer. (d) Detection results for metal sheets. Guided Grad-CAM method, which indicates that the differ- ences in the edge shapes of foliage and bush of branch play an important role in identifying tree species for CNN models. In [152], Huang et al. proposed a novel network, named encoder- classifier-reconstruction CAM (ECR-CAM), to provide more accurate visual interpretations for more complicated objects contained in remote sensing images. Specifically, the ECR- CAM method can learn more informative features by attaching a reconstruction subtask to the original classification task. Meanwhile, the extracted features are visualized using the CAM module based on the training of the network. The visualized heatmaps of ResNet-101 and DenseNet-201 with the proposed ECR-CAM method and other XAI methods are shown in Fig. 15. We can observe that the ECR-CAM can more precisely locate the target objects and achieves a better evaluation result for capturing multiple objects. In [15], Xu et al. proposed a novel text-to-image modern Hopfield network (Txt2Img-MHN) for RS image generation 6. Unlike previous studies that directly learn concrete and diverse text-image fea- tures, the Txt2Img-MHN aims to learn the most representative prototypes from text-image embeddings by the Hopfield layer, thus, generating coarse-to-fine images for different semantics. For an understandable interpretation of the learned prototypes, the top 20 tokens were visualized, which are highly correlated to the basic components for image generation, such as different colors and texture patterns. Other representative prototype- based XAI algorithms in geoscience and RS include [153]– [155]. C. Future Perspectives The past 10 years have witnessed a rapid rise of AI algorithms in geoscience and RS. Meanwhile, there now exists greater awareness of the need to develop AI models with more"
    },
    {
     "source": "RESPONSIBLE AI FOR EARTH OBSERVATION.pdf",
     "content": "crop types, land use intensities or tree species separable only at certain phenological stages [110–112]. • Most AI algorithms for image analyses were developed on three-band red-green-blue (RGB) imagery, often based on VHR drone data. Today’s multi- to hyperspectral satellite data ask for more sophisticated approaches to detect not just the obvious, but the relevant. This is aggravated by more spectral detail in radiometric data beyond 8-bit and even more by using virtual constellations [113], ranging from optical over radar to LiDAR data. • Sparse labeling problems occur with increasing areas of interest enabled by AI4EO. More severe problems are inherited by biased samples across larger regions or non-trivial features to be sampled from existing data or the imagery itself [114, 115]. While all these aspects are relevant for any EO analysis framework, opportunities have increased rapidly with AI4EO (e.g., regarding the size of areas of interest that can be handled). Along with these are the related risks and potential awareness deficits. Many, if not the majority of, AI4EO studies focused on comparably small use cases in the past to develop or apply algorithms. However, the roll-out to real-world problems, for example, at the national, continental or even global scale, requires ubiquitous algorithms that can handle much more diverse feature spaces (over time). There is indeed a lack of upscaling studies demonstrating the suitability of most algorithms for tackling real-world problems [68, 116, 117]. 5.6 Sustainability Since 2015, the United Nations has set an ambitious agenda related to the Sustainable Development Goals (SDG), aiming to improve social, economic and environmental conditions globally by 2030 [118, 119], with a wealth of implications for AI and also specifically for AI4EO [106]. Here, we take the broadest possible standpoint, including the intrinsic sustainability of AI4EO workflows and the external impacts for all three SDG dimensions. Given that"
    },
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "of Geog- raphy and Environment, University of Southampton, SO17 1BJ Southampton, U.K. (e-mail: pma@lancaster.ac.uk). P. Ghamisi is also with Helmholtz-Zentrum Dresden-Rossendorf, Helmholtz Institute Freiberg for Resource Technology, Machine Learning Group, 09599 Freiberg, Germany (e-mail: p.ghamisi@hzdr.de). Fig. 1. Overview of the research topics covered in this paper. in EO [3]. Fig. 2 shows the cumulative number of AI-related papers appearing in IEEE Geoscience and Remote Sensing Society (GRSS) publications along with ISPRS Journal of Photogrammetry and Remote Sensing and Remote Sensing of Environment in the past ten years. It is clearly apparent that the number of AI-related papers increased significantly after 2021. The successful application of AI covers almost all aspects of EO missions, from low-level vision tasks like super-resolution, denoising and inpainting, to high-level vision tasks like scene classification, object detection and semantic segmentation [4]. Table I summarizes some of the most representative tasks in the geoscience and RS field using AI techniques and reveals the increasing importance of deep learning methods such as convolutional neural networks (CNNs) in EO. Despite the great success achieved by AI techniques, related safety and security issues should not be neglected [23]. While advanced AI models like CNNs possess powerful data fitting capabilities and are designed to learn like the human brain, they usually act like black boxes, which makes it difficult to understand and explain how they work [24]. Moreover, such characteristics may lead to uncertainties, vulnerabilities and security risks, which could seriously threaten the safety and arXiv:2212.09360v2  [cs.CV]  22 Jun 2023 IEEE GEOSCIENCE AND REMOTE SENSING MAGAZINE, JUNE 2023 2 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 Year 0 500 1000 1500 2000Cumulative # of papers IEEE Transactions on Geoscience and Remote Sensing IEEE Journal of Selected Topics in Applied Earth"
    }
   ]
  },
  {
   "id": "003",
   "source": {
    "title": "Wetland mapping from sparse annotations with satellite image time series and temporal-aware segment anything model",
    "doi": "10.1016/j.isprsjprs.2026.05.017",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.017",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Accurate wetland mapping is critical for ecosystem monitoring and management, yet acquiring dense pixel-level annotations is prohibitively costly. In practice, only sparse point labels are typically available. Existing deep learning-based models face significant challenges in capturing accurate wetland extents under such weak supervision, particularly when coupled with the strong seasonal dynamics of wetlands, which, meanwhile, makes single-date imagery insufficient and causing substantial omission and commission errors when mapping. Although powerful foundation models like the Segment Anything Model (SAM) provide promising generalization from point prompts, it is intrinsically designed for static natural images, resulting in spatially fragmented masks in heterogeneous wetland environments and cannot exploit satellite image time series. To address these challenges, we propose WetSAM, a novel SAM-based framework that effectively leverages satellite image time series to enhance wetland mapping from sparse point annotations. WetSAM adopts a dual-branch design: (1) The temporal branch extends SAM to learn temporal contexts from satellite image time series via hierarchical adapters and a dynamic temporal aggregation module. This branch equips SAM with the ability to capture and model temporal features of wetlands, allowing it to learn complex temporal patterns and phenological changes; (2) The spatial branch reconstructs distinct boundaries via a temporal-constrained region-growin"
   },
   "report": "The paper presents a technical framework designed for scalable, low-cost wetland mapping at high spatial resolutions. By focusing on process automation that requires minimal labeling effort and reduced human intervention, the methodology directly touches upon ethical considerations regarding human oversight in algorithmic processing. Additionally, the framework utilizes a temporal aggregation module to capture transient events such as sudden flooding, a capability that intersects with the sensitive domain of monitoring natural hazards affecting human populations near riverine and coastal margins.\n\nThe auditor identifies one strongly grounded, instantiated ethical risk within this methodology: the paper's core technical feature of process automation with reduced human intervention directly promotes automation bias. Because the framework actively relies on minimal human labeling to achieve its scalability, this bias mechanism is an instantiated finding for this specific paper. Beyond this direct finding, the auditor notes a moderate, potential disclosure associated with this class of technology. In general, automation bias has the potential to cause the misinterpretation or misuse of remote sensing data, which could theoretically lead to physical harm when applied to natural hazard monitoring. However, this downstream impact is strictly a potential, category-level risk rather than an outcome triggered by the paper itself, and it is entirely conditional upon operators overrelying on the AI results without integrating necessary local expertise.\n\nThe analyzed text does not present any instantiated mitigations to neutralize the identified automation bias or prevent the potential misuse of the system's outputs. In the overall judgment of the auditor, the paper directly instantiates a single, strongly grounded risk regarding the fundamental introduction of automation bias via its automated, low-intervention workflow. The subsequent, more severe ethical impact of physical harm resulting from misinterpreted hazard data remains solely a disclosed potential risk, emphasizing the ongoing necessity of maintaining contextual human expertise in real-world deployments.\n\n---\nAppendix: structured audit triples\n\nGeoAI Ethics Audit Report (triple-based)\n\n- (process automation with reduced human intervention:TechnicalFeature) --PROMOTES--> (automation bias:RiskMechanism)  <graph_exact | quote✓ | AUDIT>\n- (automation bias:RiskMechanism) --PROMOTES--> (misinterpretation or misuse of remote sensing data:EthicalImpact) [PhysicalHarm]  <graph_exact | quote✗ | disclosure>  (when: Overreliance on AI results without local expertise)\n\nEntities by type:\n  TechnicalFeature: process automation with reduced human intervention\n  RiskMechanism: automation bias\n  EthicalImpact: misinterpretation or misuse of remote sensing data",
   "triples": [
    {
     "head": {
      "entity": "process automation with reduced human intervention",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "The WetSAM framework heavily automates the process of wetland mapping by converting sparse point annotations into dense pseudo-labels, significantly reducing the necessity for manual, pixel-level human annotation.",
      "input_quote": "With minimal labeling effort, our framework shows strong generalization ability and holds promise for scalable, low-cost wetland mapping at high spatial resolutions.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "INSTANTIATED",
      "instantiation_model_label": "INSTANTIATED",
      "instantiation_downgraded": false,
      "instantiation_quote": "With minimal labeling effort, our framework shows strong generalization ability and holds promise for scalable, low-cost wetland mapping at high spatial resolutions.",
      "instantiation_verified": true
     },
     "tail": {
      "entity": "automation bias",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.05.017#0"
    },
    {
     "head": {
      "entity": "automation bias",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Overreliance on AI results without local expertise",
      "evidence": "By replacing professional surveys with automated pseudo-labels in data-scarce areas, there is a risk that authorities may blindly trust the AI's detection of sudden flooding or wetland boundaries. Without proper local validation, this can lead to disastrous mismanagement of natural hazards and resource allocation, threatening the safety of nearby human populations.",
      "input_quote": "The ability to capture \"transient events\" like sudden flooding via the temporal aggregation module has direct implications for monitoring natural hazards affecting human populations near riverine and coastal margins.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_model_label": "POTENTIAL",
      "instantiation_downgraded": false,
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "misinterpretation or misuse of remote sensing data",
      "type": "EthicalImpact",
      "harm_family": "PhysicalHarm"
     },
     "chain_id": "audit::chain000",
     "tid": "10.1016/j.isprsjprs.2026.05.017#1"
    }
   ],
   "graph_paths": [
    "(re-identification risk:RiskMechanism) --[PROMOTES | Condition: When de-identification is insufficient to protect sensitive location traces | When anonymous datasets are publicly shared without sufficient protection]--> (privacy violation:EthicalImpact)",
    "(disclosure of sensitive geospatial data:RiskMechanism) --[PROMOTES | Condition: non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories]--> (location privacy violation:EthicalImpact)",
    "(privacy violation:EthicalImpact) --[PROMOTES | Condition: non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories]--> (privacy violation:EthicalImpact)",
    "(oppressive surveillance:RiskMechanism) --[PROMOTES | Condition: When humanitarian data serves the intelligence needs of antagonists]--> (targeting of vulnerable communities for harm:EthicalImpact)",
    "(algorithmic bias:RiskMechanism) --[PROMOTES | Condition: When data excludes children, older adults, homeless individuals, or people with disabilities.]--> (marginalization and exclusion:EthicalImpact)",
    "(User privacy protection methods:Mitigation) --[INHIBITS | Condition: In human mobility studies seeking to balance data utility and privacy]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(process automation with reduced human intervention:TechnicalFeature) --[PROMOTES]--> (automation bias:RiskMechanism)",
    "(public sharing of personal vehicle trajectory data:TechnicalFeature) --[PROMOTES]--> (privacy violation:EthicalImpact)",
    "(federated learning:Mitigation) --[INHIBITS | Condition: decentralized data distribution]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(deep-learning algorithm for image segmentation beam:TechnicalFeature) --[PROMOTES | Condition: When training data is specific to informal dwellings but applied to formal or industrial city areas.]--> (algorithmic focus bias:RiskMechanism)",
    "(bias:RiskMechanism) --[PROMOTES | Condition: Overreliance on AI results without local expertise]--> (misinterpretation or misuse of remote sensing data:EthicalImpact)",
    "(minimal data collection:Mitigation) --[INHIBITS | Condition: When limiting spatial and temporal granularity]--> (re-identification and linkage:RiskMechanism)",
    "(oppressive surveillance:RiskMechanism) --[PROMOTES | Condition: Authoritarian contexts]--> (violation of political liberties and freedom of speech:EthicalImpact)",
    "(deep-learning algorithm for image segmentation beam:TechnicalFeature) --[PROMOTES | Condition: When training data is specific to informal dwellings but applied to formal or industrial city areas.]--> (algorithmic bias:RiskMechanism)",
    "(vgi and opportunistic data collection:TechnicalFeature) --[PROMOTES | Condition: When data collection depends on access to technology like smartphones or interest in volunteering data.]--> (algorithmic bias:RiskMechanism)",
    "(neighborhood representation bias:RiskMechanism) --[PROMOTES | Condition: Neighborhood level]--> (biased law enforcement outcomes:EthicalImpact)",
    "(spatio-temporal predictive policing:TechnicalFeature) --[PROMOTES | Condition: Neighborhood level]--> (neighborhood representation bias:RiskMechanism)",
    "(computer vision:TechnicalFeature) --[PROMOTES | Condition: Identity authentication at borders or on devices]--> (algorithmic bias:RiskMechanism)",
    "(re-identification and linkage:RiskMechanism) --[PROMOTES]--> (privacy violation:EthicalImpact)",
    "(ai-driven building detection and classification from remote sensing data:TechnicalFeature) --[PROMOTES | Condition: When training data contains sample imbalances for specific infrastructure types]--> (misclassification of heterogeneous roof types:RiskMechanism)",
    "(re-identification and linkage:RiskMechanism) --[PROMOTES]--> (location privacy violation:EthicalImpact)",
    "(surveillance and tracking measures:TechnicalFeature) --[PROMOTES | Condition: During the COVID-19 pandemic]--> (privacy violation:EthicalImpact)",
    "(geospatial data features:TechnicalFeature) --[PROMOTES | Condition: If geodata is not handled appropriately.]--> (privacy violation:EthicalImpact)",
    "(ai technology:TechnicalFeature) --[PROMOTES | Condition: Development lacking integration with the humanities]--> (bias:RiskMechanism)",
    "(geoai surveillance systems:TechnicalFeature) --[PROMOTES]--> (surveillance and tracking:RiskMechanism)",
    "(process automation with reduced human intervention:TechnicalFeature) --[PROMOTES]--> (bias:RiskMechanism)",
    "(sparse spatiotemporal traces:TechnicalFeature) --[PROMOTES]--> (re-identification and linkage:RiskMechanism)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (discriminatory resource allocation in humanitarian aid:EthicalImpact)",
    "(Geomasking and spatial-temporal cloaking:Mitigation) --[INHIBITS]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(misclassification of heterogeneous roof types:RiskMechanism) --[PROMOTES | Condition: When roof typology is used as a proxy for socio-economic status]--> (resource allocation inequality:EthicalImpact)",
    "(privacy violation:EthicalImpact) --[PROMOTES | Condition: When vulnerable populations are involved]--> (harm to vulnerable populations:EthicalImpact)",
    "(geoai foundation models:TechnicalFeature) --[PROMOTES | Condition: During pre-training and fine-tuning stages with geospatial data]--> (disclosure of sensitive geospatial data:RiskMechanism)",
    "(automation bias:RiskMechanism) --[PROMOTES | Condition: Overreliance on AI results without local expertise]--> (misinterpretation or misuse of remote sensing data:EthicalImpact)"
   ],
   "track2_docs": [
    {
     "source": "RESPONSIBLE AI FOR EARTH OBSERVATION.pdf",
     "content": "EO data well [68]. It has been argued that the AI/ML community urgently needs to recognize the distinct features of satellite-based EO data and to “move out of the comfort zone” of applying AI methods established in other domains without improved adaptation to EO or satellite data machine learning (SatML, [68]). The reasons are manifold as, for example: • Satellite data is rarely “analysis-ready data” (ARD) [107]), requiring state-of-the-art preprocessing to repre- sent the same values for the same features in different images, i.e., to avoid pseudo-variance. 13 Responsible AI for Earth Observation A PREPRINT • Spatial autocorrelation according to Tobler’s first law of geography [108] is rarely used to improve AI4EO, even less so newer concepts like Partitioned Autoregressive Time-Series (PARTS) that consider both spatial and temporal autocorrelation in a congruent fashion [95] • Satellite data provide a wide range of spatial resolutions (from very-fine-resolution to pixels of several km2) and extend across all scales to be observed (from local, fine-scale objects in urban environments to global phenomena). Both very diverse spatial detail and multi-scale research ask for adapted solutions. • Different temporal resolutions, i.e., data densities over time, represent the same land surface differently. In other words, change analyses over years or decades are far from trivial, and need contextualization [96, 109]. This is even more important when phenology is considered and specific temporal windows across the seasons are crucial to identify the relevant phenomena, e.g. different crop types, land use intensities or tree species separable only at certain phenological stages [110–112]. • Most AI algorithms for image analyses were developed on three-band red-green-blue (RGB) imagery, often based on VHR drone data. Today’s multi- to hyperspectral satellite data ask for more sophisticated approaches to detect not just the obvious, but the relevant. This is aggravated by"
    },
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "[122]. For example, a training iteration using IEEE GEOSCIENCE AND REMOTE SENSING MAGAZINE, JUNE 2023 12 TABLE IV AN OVERVIEW OF UNCERTAINTY QUANTIFICATION METHODS Deterministic Models Bayesian Inference Prior Network-based Methods Ensemble Methods Monte Carlo Methods External Methods Description Uncertainty distributions are cal- culated from the density of pre- dicted probabilities represented by prior distributions with tractable properties over categorical distri- bution. Predictions are obtained by aver- aging over a series of predictions of the ensembles, while the uncer- tainty is quantified based on their variety. Uncertainty distribution over pre- dictions is calculated by Bayes theorem based on the Monte Carlo approximation of the distri- butions over Bayesian model pa- rameters. The mean and standard deviation values of the prediction are di- rectly output simultaneously using external modules. Optimization Strategy Kullback-Leibler divergence Cross-entropy loss Cross-entropy loss and Kullback-Leibler divergence Depends on method Uncertainty Sources Data Data Model Model AI Techniques Deterministic Networks Deterministic Networks Bayesian Networks Bayesian Networks References [112] [113] [114] [115] [116] [117] [118] [119] [120] [121] the SGD optimizer [123] can be defined as follows: θi+1 = θi − ηi∇L(θi), (10) where θi represent the model parameters in the i-th iteration, L denotes the loss function, and η is the learning rate. Specifically, in a model training iteration, the amplitude of each update step is controlled by the learning rate η, while the gradient descent of the loss functions determines the directions. Concerning the model updates in a whole epoch, batch size determines the volume of samples to be calculated in the loss functions in each training iteration. Due to the heterogeneity of the training data, each sample of the whole training batch may be calculated into different optimization directions, which combines to an uncertain result"
    },
    {
     "source": "AI Security for Geoscience and Remote Sensing- Challenges and Future Trends.pdf",
     "content": "an input image x ∈ Rd, let f (θ) : x → y be a classifier mapping from the image space to the label space, where θ represents the parameters of the model in a classification problem. The predicted label ˆy for the input image x can then be obtained by ˆy = f (θ, x). Now, the explanation E : f ×Rd → Rd can be generated to describe the feature importance, contribution or relevance of that particular dimension to the class output [137]. The explanation map can be a pixel map with equal size to the input. For example, the Saliency method [139] is estimated by the gradient of the output ˆy with respect to the input x: ESaliency (ˆy, x) = ▽f (θ, x). (14) IEEE GEOSCIENCE AND REMOTE SENSING MAGAZINE, JUNE 2023 15 S2 Image Sal w. SG (0.16) DeepLift (0.15) Lime (0.08) Occlusion (0.01) Grad-CAM (0.01) 0.0 0.80.2 0.4 0.6 1.0 Fig. 13. Heatmaps of the DenseNet with different XAI algorithms for the class of Water in the SEN12MS dataset (source from [137]). Pixels that have a deeper color represent they are more likely to be interpreted as the target class. B. XAI Applications in Geoscience and RS In the quest to make AI algorithms explainable, many expla- nation methods and strategies have been proposed. Based on previously published surveys, the taxonomy of XAI algorithms can be discussed in the axis of scope and usage, respectively [136], [140], and the critical distinction of XAI algorithms is drawn in Fig. 12. • Scope: According to the scope of explanations, XAI algo- rithms can be either global or local. Globally explainable methods provide a comprehensive understanding of the entire model behavior. Locally explainable methods are designed to justify the individual feature attributions of an instance x from the data population X . Some XAI al- gorithms can be extended to both. For example, in [141], Ribeiro et al. introduced a Local Interpretable Model- Agnostic Explanation (LIME) method, which can reliably approximate any black-box classifier locally around the prediction."
    }
   ]
  }
 ]
};
