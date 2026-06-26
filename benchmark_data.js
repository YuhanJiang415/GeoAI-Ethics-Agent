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
   "report": "",
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
      "evidence": "The paper introduces an uncertainty quantification framework that computes per-point accuracy credentials, which is critical for mitigating the unreliability of spatial measurements in high-stakes fields like disaster response.",
      "input_quote": "By providing \"per-point accuracy credentials,\" the framework allows for better decision-making in sectors relying on remote sensing, such as precision agriculture or disaster response, where knowing the reliability of a 3D measurement is critical.",
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
     "chain_id": "audit::chain000",
     "tid": "001#0"
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
      "evidence": "If photogrammetric predictions are unreliable and lack certifiable accuracy during remote sensing and mapping missions, it can directly compromise safety assessments and lead to systemic monitoring failures during disaster responses.",
      "input_quote": "Improved accuracy in UAV-based mapping can impact safety assessments for aging infrastructure (buildings and bridges) in densely populated urban areas.",
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
     "chain_id": "audit::chain000",
     "tid": "001#1"
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
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "geoai foundation models",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "During pre-training and fine-tuning stages with geospatial data",
      "evidence": "The paper introduces LandSegmenter, a foundation model specifically designed for Earth Observation, heavily trained on diverse and large-scale geospatial imagery.",
      "input_quote": "To address these challenges, we propose LandSegmenter, an LULC FM framework that resolves three-stage challenges at the input, model, and output levels.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "disclosure of sensitive geospatial data",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "002#0"
    },
    {
     "head": {
      "entity": "disclosure of sensitive geospatial data",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "non-public data associated with industry or national security | When exposing home locations, workspaces, and daily trajectories",
      "evidence": "The foundation model is trained and evaluated using very-high-resolution datasets (e.g., 5cm Potsdam, 0.6m NYC) that capture detailed features in urban environments and residential settings, risking the exposure of localized private patterns.",
      "input_quote": "Potsdam: 5cm GSD; very-high-resolution urban semantic segmentation (Germany).",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "location privacy violation",
      "type": "EthicalImpact",
      "harm_family": "PrivacyViolation"
     },
     "chain_id": "audit::chain000",
     "tid": "002#1"
    },
    {
     "head": {
      "entity": "High-complexity GeoAI models",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "LandSegmenter's architecture integrates highly complex, multi-modal components including a SAM2 backbone, high-frequency extractors, and vision-text decoders with stacked transformers.",
      "input_quote": "A vision–text collaborative decoder featuring stacked Two-Way Transformer blocks.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "greenhouse gas emissions",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain001",
     "tid": "002#2"
    },
    {
     "head": {
      "entity": "greenhouse gas emissions",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Global scope affecting communities most vulnerable to climate change",
      "evidence": "Training a highly complex remote sensing foundation model involves processing hundreds of thousands of image patches, demanding massive computational resources that drive up energy consumption and carbon footprints.",
      "input_quote": "LAS Dataset (Primary Training): A curated dataset of ~150k globally distributed sample points (~311k image patches).",
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
     "chain_id": "audit::chain001",
     "tid": "002#3"
    },
    {
     "head": {
      "entity": "process automation with reduced human intervention",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "By replacing rigorous human annotation with automated generation of weak labels from existing products in Google Earth Engine, human oversight is minimized during the curation of the primary training dataset.",
      "input_quote": "LAS provides a scalable, cost-effective alternative to manual annotation, enabling large-scale FM training across diverse LULC domains.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "bias",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain002",
     "tid": "002#4"
    },
    {
     "head": {
      "entity": "bias",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Overreliance on AI results without local expertise",
      "evidence": "Automating dataset generation with weakly supervised, potentially noisy labels can embed inaccuracies into the foundation model. Overreliance on these outputs in resource allocation or land management can lead to negative economic outcomes.",
      "input_quote": "Label Quality: ~80% of the dataset consists of weak labels derived from existing LULC products via Google Earth Engine (GEE).",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "misinterpretation or misuse of remote sensing data",
      "type": "EthicalImpact",
      "harm_family": "EconomicLoss"
     },
     "chain_id": "audit::chain002",
     "tid": "002#5"
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
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "process automation with reduced human intervention",
      "type": "TechnicalFeature",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "The framework automates the generation of dense pixel-level mappings from sparse point labels, significantly reducing the human intervention and annotation effort required for wetland monitoring.",
      "input_quote": "With minimal labeling effort, our framework shows strong generalization ability and holds promise for scalable, low-cost wetland mapping at high spatial resolutions.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "bias",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "003#0"
    },
    {
     "head": {
      "entity": "bias",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Overreliance on AI results without local expertise",
      "evidence": "By deploying the automated model in data-scarce regions specifically as a substitute for expensive local field surveys, there is a risk of overreliance on the AI's generalizations. If biases exist in the learned temporal features, it leads to the misinterpretation of remote sensing data and subsequent misallocation of conservation resources.",
      "input_quote": "Enables high-resolution (10m) environmental monitoring in data-scarce or developing regions where expensive field surveys are not feasible.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "misinterpretation or misuse of remote sensing data",
      "type": "EthicalImpact",
      "harm_family": "EconomicLoss"
     },
     "chain_id": "audit::chain000",
     "tid": "003#1"
    },
    {
     "head": {
      "entity": "geoai foundation models",
      "type": "TechnicalFeature",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "During pre-training and fine-tuning stages with geospatial data",
      "evidence": "WetSAM leverages and adapts the Segment Anything Model (SAM)—a foundation model—using multi-temporal geospatial data. This adaptation allows the model to actively capture and disclose nuanced, high-frequency spatial patterns, such as human interventions.",
      "input_quote": "The temporal branch extends SAM to learn temporal contexts from satellite image time series via hierarchical adapters and a dynamic temporal aggregation module.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "disclosure of sensitive geospatial data",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain001",
     "tid": "003#2"
    },
    {
     "head": {
      "entity": "structured evaluation framework and quantifiable metrics",
      "type": "Mitigation",
      "harm_family": null
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "Implementation during AI development and deployment",
      "evidence": "To ensure model reliability and generalizability while inhibiting omission or commission errors, the researchers evaluate the framework across multiple distinct global ecosystems using quantifiable performance metrics like the F1-score.",
      "input_quote": "We validate the effectiveness of WetSAM across eight diverse global locations, each covering an area of around 5000 $km^2$ and with various wetland types and geographical features. WetSAM reaches an average F1-score of 85.58%, considerably outperforming other state-of-the-art algorithms.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "unintentional biases and ethical risks in remote sensing",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain002",
     "tid": "003#3"
    }
   ]
  },
  {
   "id": "004",
   "source": {
    "title": "Enhanced daily retrieval of Evapotranspiration from a Transformer-based deep learning model combined with satellite passive microwave and optical observations",
    "doi": "10.1016/j.isprsjprs.2026.05.027",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.027",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Evapotranspiration (ET) is a key component influencing Earth’s hydrological cycle and energy balance. Although the integration of deep learning models with multi-source remote sensing data represents a cutting-edge approach for quantitative ET retrieval from end-to-end, few studies have developed a daily-scale deep-learning model driven simultaneously by satellite multi-channel passive microwave and optical observations. This study proposed a novel lightweight model to achieve daily ET estimations, which combined convolutional neural networks (CNNs) for local temporal feature extractions and Transformer’s self-attention mechanism for long-term temporal dependencies. We employed Chinese Fengyun-3D satellite passive microwave Emissivity Difference Vegetation Indices (EDVIs) at X-, Ku-, and Ka- bands as the indicator of hierarchical vegetation water content, and MODIS optical Enhanced Vegetation Index (EVI) as proxy of greenness foliage, which offered distinct and complementary vegetation characteristics for the model learning. The hybrid CNN-Transformer model was trained and tested over 108 global forest, cropland, wetland, savanna and grassland flux sites, and compared with three widely-used deep learning models (Transformer, CNN-LSTM, and LSTM). Results indicated that the CNN-Transformer model achieved daily ET estimation with an overall root mean square error (RMSE) &lt; 35% and bias &lt; 5%, particularly in the Northern Hemisphere (R2 = 0.86, RMSE = 0.52 mm day⁻1 or 34%). T"
   },
   "report": "",
   "triples": []
  },
  {
   "id": "005",
   "source": {
    "title": "XFuse: Multi-sensor CNN transformer fusion with cross attention and quality aware curriculum learning for high resolution fractional snow cover mapping",
    "doi": "10.1016/j.isprsjprs.2026.05.028",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.028",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Accurate fractional snow cover (FSC) mapping requires combining the complementary strengths of optical imagery (spectral discrimination) and Synthetic Aperture Radar (all-weather capability). Yet existing fusion approaches employ simplistic concatenation strategies that fail to capture complex inter-modal relationships, while taking into account the resolution mismatch between high-resolution inputs and coarse reference labels. This paper introduces XFuse, a hybrid CNN-Transformer architecture that addresses these challenges through three key contributions: (1) bidirectional cross-attention fusion that explicitly models SAR-optical interdependencies via query-key–value transformations, enabling each modality to selectively attend to complementary information from the other; (2) a multi-resolution training strategy ( 10 m → 60 m → 10 m ) that fuses Sentinel-1/2 features at native resolution, aggregates to 60 m for supervision against Gap-Filled Fractional Snow Cover (GFSC) labels, and disaggregates through guided upsampling to restore fine spatial structure at 10 m ; and (3) quality-aware curriculum learning that incorporates multi-source metadata (cloud masks, atmospheric parameters, quality control flags) through adaptive loss weighting, enabling robust training from heterogeneous satellite data while providing calibrated uncertainty estimates. Evaluation on 29 Sentinel-1/2 tiles from Northern Finland (18,117 test patches from 4 geographically unseen tiles) demonstrates stat"
   },
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "uncertainty quantification",
      "type": "Mitigation"
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "high-risk remote sensing applications",
      "evidence": "The model mitigates unreliability in high-risk remote sensing applications by incorporating a dedicated head to compute calibrated pixel-wise uncertainty estimates.",
      "input_quote": "A dedicated head using negative log-likelihood (NLL) to provide pixel-wise uncertainty estimates (calibrated via Expected Calibration Error).",
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
     "chain_id": "audit::chain000",
     "tid": "005#0"
    },
    {
     "head": {
      "entity": "unreliability of algorithmic predictions in safety-critical tasks",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Earth observation imaging process",
      "evidence": "In earth observation processes, unreliable algorithmic predictions can compromise safety-critical monitoring tasks such as avalanche risk assessment and flood forecasting, leading to systemic failures.",
      "input_quote": "The uncertainty-aware maps and high-resolution boundary detection are identified as tools for avalanche risk assessment.",
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
     "chain_id": "audit::chain000",
     "tid": "005#1"
    }
   ]
  },
  {
   "id": "006",
   "source": {
    "title": "Geographically-weighted weakly supervised Bayesian High-Resolution Transformer for 200 m resolution pan-Arctic sea ice concentration mapping and uncertainty estimation using Sentinel-1, RCM, and AMSR2 data",
    "doi": "10.1016/j.isprsjprs.2026.05.032",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.032",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Although high-resolution mapping of pan-Arctic sea ice with reliable corresponding uncertainty is essential for operational sea ice concentration (SIC) charting, it is a difficult task due to the subtle nature of ice signature features, inexact SIC labels, model uncertainty, and data heterogeneity. This study presents a novel Bayesian High-Resolution Transformer approach for 200-meter resolution pan-Arctic SIC mapping and uncertainty quantification using Sentinel-1, RADARSAT Constellation Mission (RCM), and Advanced Microwave Scanning Radiometer 2 (AMSR2) data. First, we design a high-resolution Transformer with global and local modules to better detect subtle sea ice features. Second, to address low-resolution, inexact SIC labels, we introduce a geographically weighted weakly supervised loss that trains at the region level rather than pixel level, prioritizing pure open water and ice pack signatures while mitigating the impact of ambiguity in the marginal ice zone. Third, we design a Bayesian extension of the proposed Transformer that treats model parameters as random variables to better quantify epistemic uncertainty. Fourth, we fuse the three data sources (Sentinel-1, RCM, and AMSR2) at the decision level to provide pan-Arctic SIC and uncertainty maps. The proposed approach is evaluated under pan-Arctic minimum-extent and melt season conditions in 2021 and 2025. Our model achieves high-resolution SIC maps with up to 200-meter spatial resolution, 0.70 overall feature detect"
   },
   "report": "",
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
      "evidence": "The research integrates uncertainty quantification through a Bayesian Neural Network extension to calculate reliable epistemic uncertainties, reducing the unreliability of the model in critical Earth observation applications.",
      "input_quote": "A Bayesian Neural Network (BNN) extension using Bayes-by-backpropagation (BBB). It treats model parameters as random variables with a diagonal, mean-field Gaussian variational posterior, enabling the calculation of epistemic uncertainty via stochastic inferences and the reparameterization trick.",
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
     "chain_id": "audit::chain000",
     "tid": "006#0"
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
      "evidence": "In the context of pan-Arctic mapping, unreliable algorithmic predictions would fail to detect small-scale hazards, leading to a systemic failure in safety monitoring that threatens maritime vessels and human safety.",
      "input_quote": "By detecting small-scale hazardous features like ice floes and leads at 200m resolution, the technology directly supports the safety of vessels in Arctic waters.",
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
     "chain_id": "audit::chain000",
     "tid": "006#1"
    }
   ]
  },
  {
   "id": "007",
   "source": {
    "title": "TMF: Temporal multi-modal fusion framework for estimating wheat yield from multi-source satellite and environmental data across the European Union",
    "doi": "10.1016/j.isprsjprs.2026.05.041",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.041",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Accurate large-scale crop yield estimation is critical for agricultural management and advance warning of potentially compromised food security. While recent advances in remote sensing provide diverse data sources for crop monitoring, effectively integrating these data sources for accurate yield estimation at the continental scale remains challenging due to complex crop-environment interactions and high spatial heterogeneity. In this study, we developed a Temporal Multi-modal Fusion (TMF) framework for end-of-season wheat yield estimation at the sub-national level across the European Union from 2001 to 2019. Our framework integrated time-series data across the entire growing season from climate variables, satellite-based remote sensing measurements including vegetation indices (e.g., Enhanced Vegetation Index) and productivity indicators (e.g., Solar-Induced Fluorescence, Gross Primary Productivity), and static soil properties. By employing parallel transformer encoders followed by a late-fusion strategy, our architecture preserves modality-specific temporal dynamics before explicitly anchoring them against static spatial constraints. Leave-one-year-out cross-validation demonstrated that the TMF framework achieved accurate yield estimation with an RMSE of 0.75 Mg·ha−1, 7–38% lower than baseline models (LSTM, GBRT, RF, and ANN). The model demonstrated better spatial stability and captured severe yield anomalies during extreme climate events (e.g., the 2003 and 2018 droughts). "
   },
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "hierarchical deep learning architecture",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When deployed for complex, multi-modal continental-scale agricultural modeling",
      "evidence": "Complex multi-modal neural network architectures inherently lack transparency, acting as opaque systems that hide how specific variables influence yield predictions.",
      "input_quote": "Temporal Multi-modal Fusion (TMF) framework, a hierarchical deep learning architecture.",
      "provenance": "graph_anchored",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "model opacity and lack of interpretability",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "007#0"
    },
    {
     "head": {
      "entity": "SHAP-based interpretability analysis",
      "type": "Mitigation"
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "By analyzing feature importance during critical crop phenological stages",
      "evidence": "The framework uses SHAP to quantify marginal contributions of different input variables, mitigating black-box opacity and providing feature-level transparency.",
      "input_quote": "SHAP (SHapley Additive exPlanations) for feature-level interpretability and quantifying marginal contributions of variables.",
      "provenance": "graph_anchored",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "model opacity and lack of interpretability",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "007#1"
    },
    {
     "head": {
      "entity": "model opacity and lack of interpretability",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When insights are utilized by stakeholders for sub-national decision making",
      "evidence": "Uninterpretable model outputs could cause stakeholders to misunderstand the drivers of yield variations, resulting in flawed data-driven policies that negatively impact agricultural economies.",
      "input_quote": "Supports the development of data-driven agricultural management and regional policy interventions at the NUTS sub-national level.",
      "provenance": "graph_anchored",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "inappropriate policy decisions impacting communities",
      "type": "EthicalImpact",
      "harm_family": "EconomicLoss"
     },
     "chain_id": "audit::chain000",
     "tid": "007#2"
    },
    {
     "head": {
      "entity": "continental-scale crop yield estimation",
      "type": "TechnicalFeature"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "Due to complex crop-environment interactions and high spatial heterogeneity across regions",
      "evidence": "Modeling yields at a massive continental scale risks averaging out local nuances, which can obscure critical sub-national or regional agricultural disparities.",
      "input_quote": "effectively integrating these data sources for accurate yield estimation at the continental scale remains challenging due to complex crop-environment interactions and high spatial heterogeneity.",
      "provenance": "inferred",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "masking of subpopulation conditions",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain001",
     "tid": "007#3"
    },
    {
     "head": {
      "entity": "integration of static soil properties",
      "type": "Mitigation"
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "By complementing dynamic satellite data with localized, spatially structured constraints",
      "evidence": "Incorporating high-resolution static soil data grounds the model locally, preventing the homogenization of predictions and ensuring heterogeneous spatial conditions are accurately represented.",
      "input_quote": "Although satellite-derived measurements effectively capture seasonal canopy dynamics and interannual yield fluctuations, static soil properties provide complementary spatially structured information for yield estimation.",
      "provenance": "inferred",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "masking of subpopulation conditions",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain001",
     "tid": "007#4"
    },
    {
     "head": {
      "entity": "masking of subpopulation conditions",
      "type": "RiskMechanism"
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When determining regions requiring infrastructure improvements or interventions",
      "evidence": "Failing to account for local heterogeneity could cause regional yield gaps to be overlooked, leading to misdirected financial investments and structural neglect in vulnerable agricultural zones.",
      "input_quote": "By identifying regions with stagnating yields (e.g., parts of Western Europe) versus those with closing yield gaps (e.g., Baltic countries), the technology can inform targeted investments in agricultural infrastructure or soil health management.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "policy-level harm",
      "type": "EthicalImpact",
      "harm_family": "EconomicLoss"
     },
     "chain_id": "audit::chain001",
     "tid": "007#5"
    }
   ]
  },
  {
   "id": "008",
   "source": {
    "title": "Relative Energy Learning for LiDAR out-of-distribution detection",
    "doi": "10.1016/j.isprsjprs.2026.05.051",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.051",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "LiDAR perception is central to GeoAI applications such as autonomous driving. However, current LiDAR perception models are trained under a closed-set assumption and remain vulnerable to out-of-distribution (OOD) objects that are not represented in training datasets. OOD detection is essential for trustworthy and safe AI by identifying unexpected inputs that differ from the training distribution, as it enables distinguishing rare anomalies from common classes and avoiding overconfident predictions for unknown samples. In this paper, we propose Relative Energy Learning (REL), a simple yet effective framework for OOD detection in LiDAR point clouds. REL leverages the energy gap between positive (in-distribution) and negative logits as a relative scoring function, mitigating calibration issues in raw energy values and improving robustness across various scenes. To address the absence of OOD samples during training, we propose a lightweight data synthesis strategy called Point Raise, which perturbs existing point clouds to generate auxiliary anomalies without altering the inlier semantics. Evaluated on SemanticKITTI and the Spotting the Unexpected (STU) benchmark, REL consistently outperforms existing methods by a large margin. Our results highlight that modeling relative energy, combined with simple synthetic outliers, provides a principled and scalable solution for reliable OOD detection in open-world autonomous driving. 1 1 Project Page: https://github.com/343gltysprk/rel."
   },
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "closed-set assumption in LiDAR perception",
      "type": "TechnicalFeature",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "When confronted with unfamiliar structures or novel out-of-distribution objects during deployment",
      "evidence": "Track 2 defines that LiDAR models trained under closed-set assumptions produce unreliable predictions by forcing anomalous inputs into known classes. The audited text confirms this vulnerability leads to overconfident predictions for unknown samples.",
      "input_quote": "However, current LiDAR perception models are trained under a closed-set assumption and remain vulnerable to out-of-distribution (OOD) objects that are not represented in training datasets.",
      "provenance": "inferred",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "overconfident predictions for unknown samples",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "008#0"
    },
    {
     "head": {
      "entity": "overconfident predictions for unknown samples",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "If an OOD object is confidently interpreted as a known category and the autonomous vehicle fails to react appropriately",
      "evidence": "Track 2 background explains that misinterpreting unexpected objects undermines system safety. The audited text explicitly acknowledges that failing to identify these safety-critical road obstacles can lead to physical collisions.",
      "input_quote": "The primary touchpoint is the detection of \"safety-critical road obstacles\" (e.g., objects like buckets or furniture in the vehicle's path) that could lead to collisions if not identified as OOD.",
      "provenance": "inferred",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "autonomous vehicle collisions",
      "type": "EthicalImpact",
      "harm_family": "PhysicalHarm"
     },
     "chain_id": "audit::chain000",
     "tid": "008#1"
    },
    {
     "head": {
      "entity": "Relative Energy Learning (REL) combined with Point Raise",
      "type": "Mitigation",
      "harm_family": null
     },
     "edge": {
      "relation_type": "INHIBITS",
      "condition": "By leveraging a relative scoring function and geometry-aware auxiliary anomaly synthesis",
      "evidence": "The input text proposes REL and Point Raise to identify unexpected inputs and distinguish rare anomalies, effectively mitigating the risk of overconfident predictions for unknown samples.",
      "input_quote": "OOD detection is essential for trustworthy and safe AI by identifying unexpected inputs that differ from the training distribution, as it enables distinguishing rare anomalies from common classes and avoiding overconfident predictions for unknown samples.",
      "provenance": "inferred",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "overconfident predictions for unknown samples",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "008#2"
    }
   ]
  },
  {
   "id": "009",
   "source": {
    "title": "Multi-temporal calving front segmentation",
    "doi": "10.1016/j.isprsjprs.2026.05.053",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.05.053",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "The calving fronts of marine-terminating glaciers undergo constant changes. These changes significantly affect the glacier’s mass and dynamics, demanding continuous monitoring. To address this need, deep learning models were developed that can automatically delineate the calving front in Synthetic Aperture Radar imagery. However, these models often struggle to correctly classify areas affected by seasonal conditions such as ice mélange or snow-covered surfaces. To address this issue, we propose to process multiple frames from a satellite image time series of the same glacier in parallel and exchange temporal information between the corresponding feature maps to stabilize each prediction. We integrate our approach into the current state-of-the-art architecture Tyrion and accomplish a new state-of-the-art performance on the CaFFe benchmark dataset. In particular, we achieve a Mean Distance Error of 184.4m and a mean Intersection over Union of 83.6 . Furthermore, we empirically demonstrate that our modifications are highly robust to seasonal conditions, achieving a Mean Distance Error of 213.0m under adverse conditions and outperforming prior state-of-the-art methods, such as Tyrion, by more than 100m. The CaFFe benchmark dataset is publicly available at https://doi.pangaea.de/10.1594/PANGAEA.940950 and the code at https://github.com/ki7077/Multi-Temporal-Tyrion."
   },
   "report": "",
   "triples": []
  },
  {
   "id": "010",
   "source": {
    "title": "EchoNet: Efficient railway segmentation from satellite imagery",
    "doi": "10.1016/j.isprsjprs.2026.06.010",
    "doi_url": "https://doi.org/10.1016/j.isprsjprs.2026.06.010",
    "journal": "ISPRS Journal of Photogrammetry and Remote Sensing",
    "year": "2026",
    "abstract": "Accurate railway segmentation from satellite imagery is the prerequisite of transportation infrastructure mapping and monitoring, yet remains challenging due to the sparse and discontinuous geometry of rail networks, substantial intra-class texture variation, and the stringent precision required by downstream geospatial applications. This study presents EchoNet, a lightweight deep learning framework designed for efficient and accurate railway extraction, together with RailSAT, a new dataset comprising 1,250 satellite image tiles collected across the United States. The proposed architecture features a tailored decoder integrating three key components: a Semantic-guided Implicit Spatial Decoder (SISD) that restores spatial resolution through semantic-driven channel modulation without explicit upsampling; a Lite Contextual Decoder (LCD) employing dilated convolutions to capture long-range structural context; and a Pixel-wise Complementary Attention Fusion (PCAF) module that adaptively merges semantic and spatial features. With only 2.97 M parameters and 0.83 GFLOPs, EchoNet achieves an F1 score and IoU within 0.01 of mainstream baselines, while attaining a throughput of 791 images/s and a peak memory usage of 7 GB on 512 × 512 inputs with a batch size of 200 on a single NVIDIA RTX A6000 GPU. Experimental and ablation results validate the effectiveness of each decoder component. Overall, EchoNet demonstrates high accuracy and computational efficiency, offering a scalable solution"
   },
   "report": "",
   "triples": [
    {
     "head": {
      "entity": "black-box nature of deep neural networks",
      "type": "TechnicalFeature",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "",
      "evidence": "EchoNet is introduced as a deep learning framework for semantic segmentation. The complex internal mechanics, such as the semantic-driven channel modulation in the SISD branch, inherently operate as a black box, resulting in a lack of algorithmic transparency.",
      "input_quote": "This study presents EchoNet, a lightweight deep learning framework designed for efficient and accurate railway extraction, together with RailSAT, a new dataset comprising 1,250 satellite image tiles collected across the United States.",
      "provenance": "graph_exact",
      "quote_verified": true,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "lack of algorithmic transparency and explainability",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "chain_id": "audit::chain000",
     "tid": "010#0"
    },
    {
     "head": {
      "entity": "lack of algorithmic transparency and explainability",
      "type": "RiskMechanism",
      "harm_family": null
     },
     "edge": {
      "relation_type": "PROMOTES",
      "condition": "high-risk remote sensing applications",
      "evidence": "Applying an opaque deep learning model to railway infrastructure safety assessments represents a high-risk application. The inability to transparently verify how the model handles occluded or low-visibility regions can mask structural flaws, leading to safety risks and potential physical harm, which necessitates strict human-in-the-loop protocols.",
      "input_quote": "The authors explicitly note that for operational use, the model output should be integrated with human verification and uncertainty filtering, especially in occluded or low-visibility regions.",
      "provenance": "graph_exact",
      "quote_verified": false,
      "instantiation": "POTENTIAL",
      "instantiation_quote": "",
      "instantiation_verified": false
     },
     "tail": {
      "entity": "safety risks in critical missions",
      "type": "EthicalImpact",
      "harm_family": "PhysicalHarm"
     },
     "chain_id": "audit::chain000",
     "tid": "010#1"
    }
   ]
  }
 ]
};
