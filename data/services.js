const sharedFaqs = [
  {
    question: 'What type of data can you analyze?',
    answer: 'I work with microbiome datasets including 16S/18S/ITS amplicon data and shotgun metagenomics from environmental, clinical, or plant-associated samples.'
  },
  {
    question: 'Do you support both QIIME2 and DADA2 workflows?',
    answer: 'Yes. I can work with QIIME2, DADA2, or custom pipelines depending on your project requirements and reproducibility needs.'
  },
  {
    question: 'What do I receive after the analysis?',
    answer: 'You receive processed data, statistical analysis results, publication-ready figures, and a clear report explaining the findings.'
  },
  {
    question: 'Can you handle large-scale or HPC-based projects?',
    answer: 'Yes. I regularly work with HPC environments (SLURM, clusters) and can scale workflows for large datasets.'
  },
  {
    question: 'How do we start working together?',
    answer: 'You can select a plan and contact me via WhatsApp or Email. We will discuss your data, goals, and timeline before starting.'
  }
];

module.exports = [
  {
    slug: 'microbiome-analysis',
    title: 'Microbiome Analysis',
    category: 'Microbiome',
    startingPrice: '$30',
    excerpt: 'End-to-end analysis for 16S, 18S, ITS, and microbiome studies with reproducible outputs and clear biological interpretation.',
    intro: 'This service is designed for researchers and labs that need a reliable analytical workflow from raw sequencing files to interpretable microbiome results. It is especially useful for studies involving community profiling, diversity analysis, taxonomic interpretation, and publication-ready reporting.',
    whatYouGet: [
      'Quality control and preprocessing review',
      'ASV or OTU table generation depending on workflow',
      'Taxonomy assignment and ecological summaries',
      'Publication-ready figures and structured reporting'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$30',
        delivery: '3-5 days',
        description: 'A focused entry-level analysis for small microbiome datasets or pilot studies.',
        features: [
          'Up to 10 samples',
          'Basic QC review',
          'Taxonomy table',
          'Alpha and beta diversity summary',
          'Short written interpretation'
        ]
      },
      {
        name: 'Standard',
        price: '$70',
        delivery: '5-7 days',
        description: 'A balanced package for standard microbiome projects requiring publication-grade reporting.',
        recommended: true,
        badge: 'Most Popular',
        features: [
          'Up to 30 samples',
          'DADA2 or QIIME2 processing',
          'Taxonomy and diversity analysis',
          'Ordination plots and key figures',
          'Structured PDF or slide-ready summary'
        ]
      },
      {
        name: 'Premium',
        price: '$100',
        delivery: '7-10 days',
        description: 'A more complete analysis package for research teams needing deeper interpretation and figure support.',
        features: [
          'Up to 60 samples',
          'Extended ecological comparisons',
          'Differential abundance support',
          'Enhanced figure set',
          'Methods-ready reporting notes'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For larger studies, ongoing collaborations, or projects with advanced requirements.',
        features: [
          'Large cohorts or multiple batches',
          'Custom statistical design support',
          'Integrated HPC workflow options',
          'Iterative collaboration with your team',
          'Flexible deliverables'
        ]
      }
    ]
  },
  {
    slug: 'metagenomics-pipelines',
    title: 'Metagenomics Pipelines',
    category: 'Pipelines',
    startingPrice: '$70',
    excerpt: 'Scalable shotgun metagenomics workflows for profiling, annotation, reporting, and reproducible execution on local or HPC systems.',
    intro: 'This service focuses on turning shotgun metagenomics workflows into robust, repeatable analytical systems. It is suitable for researchers who need clear taxonomic profiling, functional annotation, and execution logic that can scale beyond one-off commands.',
    whatYouGet: [
      'Pipeline design aligned with the biological question',
      'Workflow setup for profiling or annotation',
      'Execution guidance for local or HPC environments',
      'Documented outputs for reruns and handover'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$70',
        delivery: '4-6 days',
        description: 'A compact workflow setup for profiling-focused metagenomics analysis.',
        features: [
          'Initial workflow setup',
          'QC and profiling steps',
          'One database configuration',
          'Run instructions',
          'Basic reporting output'
        ]
      },
      {
        name: 'Standard',
        price: '$120',
        delivery: '6-8 days',
        description: 'A strong workflow package for teams needing reproducibility and better scaling.',
        recommended: true,
        badge: 'Best Value',
        features: [
          'Workflow for profiling and summary outputs',
          'Resource-aware execution plan',
          'Conda environment definition',
          'Reusable configuration structure',
          'Annotated documentation'
        ]
      },
      {
        name: 'Premium',
        price: '$180',
        delivery: '8-12 days',
        description: 'A more complete pipeline for advanced project delivery and team handover.',
        features: [
          'Expanded multi-step workflow',
          'HPC or cluster tuning guidance',
          'Functional profiling integration',
          'Logging and rerun support',
          'Delivery-ready handover package'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For large studies, institutional deployments, or long-term metagenomics collaboration.',
        features: [
          'Complex or multi-project workflows',
          'Custom compute strategy',
          'Longitudinal or high-volume datasets',
          'Shared team support',
          'Flexible implementation scope'
        ]
      }
    ]
  },
  {
    slug: 'edna-analysis',
    title: 'eDNA Analysis',
    category: 'Environmental DNA',
    startingPrice: '$50',
    excerpt: 'Professional eDNA processing and interpretation for biodiversity monitoring, conservation, and environmental sequencing projects.',
    intro: 'This service supports environmental DNA projects that require careful handling of low-biomass signals, contamination review, taxonomic assignment, and structured ecological interpretation. It is useful for biodiversity monitoring, aquatic surveillance, and environmental assessment studies.',
    whatYouGet: [
      'Read processing and denoising strategy',
      'Taxonomic assignment and confidence review',
      'Contamination-aware interpretation',
      'Summary outputs for ecological reporting'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$50',
        delivery: '3-5 days',
        description: 'An entry package for smaller eDNA studies or pilot biodiversity screens.',
        features: [
          'Up to 12 samples',
          'Basic quality filtering',
          'Taxonomic assignment summary',
          'Control-aware interpretation notes'
        ]
      },
      {
        name: 'Standard',
        price: '$90',
        delivery: '5-7 days',
        description: 'A complete package for well-structured eDNA monitoring projects.',
        recommended: true,
        badge: 'Most Popular',
        features: [
          'Up to 30 samples',
          'Denoising and taxonomy workflow',
          'Contamination review',
          'Ecological summary figures',
          'Structured reporting'
        ]
      },
      {
        name: 'Premium',
        price: '$130',
        delivery: '7-10 days',
        description: 'A more detailed package with extended interpretation and communication support.',
        features: [
          'Expanded study-level review',
          'Comparative analysis across groups',
          'Enhanced figure and table outputs',
          'Methods-ready summary',
          'Consultation on interpretation'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For larger monitoring programs, repeated seasonal sampling, or specialized ecological requirements.',
        features: [
          'Large or repeated sampling studies',
          'Custom reporting structure',
          'Extended collaboration',
          'Flexible ecological analysis scope',
          'Project-tailored delivery'
        ]
      }
    ]
  },
  {
    slug: 'bioinformatics-consulting',
    title: 'Bioinformatics Consulting',
    category: 'Consulting',
    startingPrice: '$30',
    excerpt: 'Targeted consulting for research teams that need expert support with study design, workflow planning, troubleshooting, or result interpretation.',
    intro: 'Consulting is ideal when you do not need a fully outsourced pipeline, but you do need an experienced bioinformatics perspective to help shape a project, review an analysis, or solve a technical bottleneck efficiently.',
    whatYouGet: [
      'Methodology review and practical recommendations',
      'Pipeline or analysis troubleshooting',
      'Interpretation support for complex outputs',
      'Clear next-step guidance'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$30',
        delivery: '1-2 days',
        description: 'A focused review for one analysis question, one workflow issue, or one dataset challenge.',
        features: [
          'Single consultation topic',
          'Short written recommendations',
          'One round of follow-up clarification'
        ]
      },
      {
        name: 'Standard',
        price: '$70',
        delivery: '2-4 days',
        description: 'A broader consulting package for researchers needing review plus practical action items.',
        recommended: true,
        badge: 'Best Value',
        features: [
          'Workflow or analysis review',
          'Structured recommendations',
          'Priority next steps',
          'Follow-up discussion support'
        ]
      },
      {
        name: 'Premium',
        price: '$100',
        delivery: '4-6 days',
        description: 'An in-depth consulting package for complex projects or high-stakes analysis decisions.',
        features: [
          'Extended technical review',
          'Multiple analytical questions',
          'Detailed written guidance',
          'Workflow improvement suggestions',
          'Interpretation support'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For ongoing collaboration, advisory support, or institution-level consulting.',
        features: [
          'Recurring advisory support',
          'Flexible scope and frequency',
          'Team-facing recommendations',
          'Longer-term project guidance'
        ]
      }
    ]
  },
  {
    slug: 'data-visualization',
    title: 'Data Visualization',
    category: 'Reporting',
    startingPrice: '$40',
    excerpt: 'Scientific figures, dashboards, and polished reporting outputs for microbiome, metagenomics, and broader bioinformatics projects.',
    intro: 'This service focuses on transforming analytical outputs into clear, publication-ready visuals and reports. It is ideal when your team already has results but needs stronger communication, cleaner figures, or a more professional final presentation.',
    whatYouGet: [
      'Figure redesign or new visual generation',
      'Consistent labels and layout logic',
      'Audience-aware reporting outputs',
      'Reusable scripts where possible'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$40',
        delivery: '2-3 days',
        description: 'A small visualization package for targeted figures or a concise result summary.',
        features: [
          'Up to 3 figures',
          'Minor layout refinement',
          'Basic styling consistency',
          'Export-ready outputs'
        ]
      },
      {
        name: 'Standard',
        price: '$75',
        delivery: '4-6 days',
        description: 'A solid reporting package for research teams preparing internal review or manuscript drafts.',
        recommended: true,
        badge: 'Most Popular',
        features: [
          'Up to 6 figures',
          'Improved narrative flow',
          'Color and label consistency',
          'Summary-ready outputs',
          'One revision round'
        ]
      },
      {
        name: 'Premium',
        price: '$110',
        delivery: '6-8 days',
        description: 'A complete figure and reporting package for more advanced communication needs.',
        features: [
          'Extended figure set',
          'Multi-panel presentation support',
          'Report-ready design consistency',
          'Iterative refinement',
          'Presentation or manuscript use'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For dashboards, large reports, or broader visualization systems across multiple datasets.',
        features: [
          'Expanded visual reporting scope',
          'Interactive or dashboard-oriented work',
          'Complex project structuring',
          'Flexible collaboration mode'
        ]
      }
    ]
  },
  {
    slug: 'custom-pipeline-development',
    title: 'Custom Pipeline Development',
    category: 'HPC & Automation',
    startingPrice: '$100',
    excerpt: 'Custom workflow development for sequencing and bioinformatics projects that need automation, reproducibility, and scalable execution.',
    intro: 'This service is intended for teams that need more than one analysis run. It focuses on building reusable workflows that can be executed consistently across projects, machines, or HPC environments with clear documentation and practical handover.',
    whatYouGet: [
      'Workflow architecture matched to your use case',
      'Automation for repeated analytical steps',
      'Environment setup guidance with Conda or containers',
      'Documentation for reuse and team adoption'
    ],
    faqs: sharedFaqs,
    plans: [
      {
        name: 'Basic',
        price: '$100',
        delivery: '5-7 days',
        description: 'A compact workflow for one focused analysis path.',
        features: [
          'Single pipeline objective',
          'Core workflow logic',
          'Basic documentation',
          'Environment notes'
        ]
      },
      {
        name: 'Standard',
        price: '$170',
        delivery: '7-10 days',
        description: 'A complete workflow package for routine research use.',
        recommended: true,
        badge: 'Best Value',
        features: [
          'Reusable configuration structure',
          'Logging and output organization',
          'Conda or container support',
          'One revision cycle',
          'Deployment guidance'
        ]
      },
      {
        name: 'Premium',
        price: '$240',
        delivery: '10-14 days',
        description: 'A higher-end workflow package for serious project scale and team handover.',
        features: [
          'Advanced automation logic',
          'HPC-oriented resource planning',
          'Expanded documentation',
          'Team-facing handover notes',
          'Support for more complex project structure'
        ]
      },
      {
        name: 'Custom',
        price: 'Adapted to your data & needs',
        delivery: 'Custom timeline',
        description: 'For institutional workflows, large production pipelines, or long-term pipeline support.',
        features: [
          'Large-scale custom architecture',
          'Longer-term implementation scope',
          'Flexible feature set',
          'Collaboration with your technical team'
        ]
      }
    ]
  }
];
