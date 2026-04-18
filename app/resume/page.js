import AnimatedProgressBar from '../../components/client/AnimatedProgressBar';

export const metadata = {
  title: 'Resume'
};

const deliverySnapshot = [
  ['Pipelines delivered for microbiome, RNA-seq, WGS, and metagenomics projects', '10+'],
  ['Bacterial genomes processed in a large-scale comparative genomics workflow', '94'],
  ['Researchers trained in reproducible bioinformatics and HPC execution', '20+']
];

const selectedProjects = [
  {
    title: '16S rRNA / Microbiome',
    subtitle: 'End-to-end analysis delivery',
    summary: 'Microbiome profiling pipelines for research and applied study teams.',
    description:
      'Built reproducible workflows from raw FASTQ files to diversity analysis, differential abundance, community structure, and publication-ready figures so collaborators could move faster from sequencing to interpretation.',
    tools: 'DADA2, phyloseq, microeco, ggplot2, R',
    outcome:
      'Clear microbial insights, reusable analysis templates, and faster manuscript or report preparation.'
  },
  {
    title: 'Shotgun Metagenomics',
    subtitle: 'Read-based and assembly-based workflows',
    summary: 'Scalable taxonomic, functional, and genome-resolved metagenomics pipelines.',
    description:
      'Delivered integrated pipelines covering QC, taxonomic classification, functional profiling, assembly, binning, and MAG refinement for complex datasets running on HPC infrastructure.',
    tools: 'Kraken2, Kaiju, MetaPhlAn4, HUMAnN3, MEGAHIT, MetaBAT2, GTDB-Tk',
    outcome:
      'Deeper insight into microbial composition, functions, and recoverable genomes from large sequencing runs.'
  },
  {
    title: 'RNA-seq & WGS',
    subtitle: 'Standardized analysis and reporting',
    summary: 'Transcriptomics and comparative genomics support for multi-sample studies.',
    description:
      'Structured pipelines for quality control, expression analysis, assembly, annotation, and comparison so teams could focus on biological conclusions instead of fragmented processing steps.',
    tools: 'R, Python, Bash, Prokka, EggNOG, comparative genomics',
    outcome:
      'Reliable cross-sample comparisons, cleaner biological narratives, and better downstream reporting for stakeholders.'
  },
  {
    title: 'HPC Automation',
    subtitle: 'Consulting and workflow optimization',
    summary: 'Cluster-ready pipelines for labs that need speed, reproducibility, and less manual work.',
    description:
      'Automated repetitive analysis steps, improved cluster execution, and documented reusable workflows so projects could scale without depending on fragile manual commands.',
    tools: 'SLURM, Nextflow, Linux, Conda, Git',
    outcome:
      'More reproducible runs, easier handoff to collaborators, and faster turnaround on large datasets.'
  }
];

const approach = [
  {
    title: 'Scope the biological question',
    description:
      'Clarify the study goal, sequencing design, metadata quality, and expected outputs before analysis starts.'
  },
  {
    title: 'Build a reproducible workflow',
    description:
      'Set up the right pipeline, document parameters, and make the analysis reusable across datasets or future studies.'
  },
  {
    title: 'Translate outputs into insights',
    description:
      'Convert technical results into plots, summaries, and interpretation that collaborators can actually present or publish.'
  },
  {
    title: 'Support handoff and training',
    description:
      'Provide guidance for collaborators, students, or internal teams so the work remains useful after delivery.'
  }
];

const services = [
  'Microbiome analysis: 16S rRNA and community ecology workflows from raw reads to diversity, differential analysis, and interpretation.',
  'Metagenomics pipelines: read-based profiling, functional analysis, assembly, binning, and genome-resolved metagenomics support.',
  'RNA-seq analysis: quality control, alignment, quantification, differential expression, and reporting for transcriptomics studies.',
  'Phylogenetic analysis: sequence alignment, tree construction, comparative interpretation, and figure-ready outputs.',
  'Sanger analysis: chromatogram review, sequence cleaning, assembly, BLAST support, and reporting for targeted sequencing projects.',
  'Bioinformatics consulting: pipeline planning, troubleshooting, reproducibility reviews, and HPC strategy for ongoing projects.'
];

const credibility = [
  'Bioinformatician at the African Genome Centre (AGC), UM6P since December 2021, supporting real-world omics projects from design to interpretation.',
  'Co-author on 10+ publications and preprints between 2023 and 2026 across microbiome science, infectious disease, and environmental genomics.',
  'Hands-on experience with human-associated, plant-associated, and environmental datasets in both academic and applied research settings.',
  'MSc in Bioinformatics and BSc in Software Engineering, combining biological insight with strong technical implementation.'
];

const technicalAreas = [
  {
    title: 'Microbiome and Amplicon Analysis',
    description:
      'DADA2, phyloseq, microeco, ggplot2, ASV and OTU workflows, diversity metrics, differential abundance, and ecological interpretation.'
  },
  {
    title: 'Metagenomics and Genome-Resolved Workflows',
    description:
      'Kraken2, Bracken, Kaiju, MetaPhlAn4, HUMAnN3, MEGAHIT, metaSPAdes, MetaBAT2, GTDB-Tk, Prokka, EggNOG, and MAG-oriented analysis.'
  },
  {
    title: 'RNA-seq, WGS, and Comparative Genomics',
    description:
      'Quality control, alignment, quantification, differential expression, genome assembly, annotation, and cross-sample comparisons.'
  },
  {
    title: 'Workflow Engineering and HPC',
    description:
      'SLURM, Nextflow, Linux, Conda, Git, reproducible execution on clusters, and project-ready pipeline handoff.'
  }
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <main className="main">
        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>I help researchers and companies analyze microbiome and genomics data using scalable, reproducible pipelines.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">What I Do</h3>
                  <div className="resume-content">
                    <article>
                      <h4>Rachid Elfermi</h4>
                      <p className="company"><em>Bioinformatician | African Genome Centre (AGC), UM6P</em></p>
                      <p>Ben Guerir, Morocco</p>
                      <p>rachid.elfermi@gmail.com</p>
                      <p><a href="https://www.linkedin.com/in/rachid-elfermi-75a84b8b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rachid-elfermi-75a84b8b</a></p>
                      <p>I turn raw sequencing data into clean outputs teams can actually use: quality-controlled workflows, interpretable figures, reproducible reports, and delivery-ready analyses for studies, grants, manuscripts, and internal R&amp;D.</p>
                      <p>My work sits between academic research and freelance-style delivery. I support scientific projects with the rigor expected in research environments while keeping communication, timelines, and outputs practical for collaborators who need results they can reuse, publish, or hand off.</p>
                    </article>
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Delivery Snapshot</h3>
                  <div className="resume-content">
                    {deliverySnapshot.map(([label, value]) => (
                      <article key={label}>
                        <h4>{value}</h4>
                        <p>{label}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="resume-item skills-animation" data-aos="fade-up">
                  <h3 className="resume-title">Core Skills</h3>
                  <div className="resume-content">
                    {[
                      ['Microbiome and Metagenomics', 96],
                      ['HPC, SLURM, and Workflow Automation', 94],
                      ['RNA-seq, WGS, and Comparative Genomics', 92],
                      ['R, Python, Visualization, and Reporting', 90]
                    ].map(([label, value]) => (
                      <div className="skill-item" key={label}>
                        <h4>{label}</h4>
                        <AnimatedProgressBar value={value} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Approach</h3>
                  <div className="resume-content">
                    {approach.map((item) => (
                      <article key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-content">
                    <article className="education-item">
                      <h4>MSc in Bioinformatics</h4>
                      <h5>2018 - 2021</h5>
                      <p className="institution"><em>Moulay Ismail University, Meknes</em></p>
                    </article>
                    <article className="education-item">
                      <h4>BSc in Software Engineering</h4>
                      <h5>2013 - 2017</h5>
                      <p className="institution"><em>Ouarzazate</em></p>
                    </article>
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Languages</h3>
                  <div className="resume-content">
                    <article>
                      <ul>
                        <li>Arabic: Native</li>
                        <li>French: Fluent</li>
                        <li>English: C1</li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="resume-item" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="resume-title">Selected Projects</h3>
                  <div className="resume-content">
                    {selectedProjects.map((project) => (
                      <article className="experience-item" key={project.title}>
                        <h4>{project.title}</h4>
                        <p className="company"><em>{project.subtitle}</em></p>
                        <p>{project.summary}</p>
                        <p>{project.description}</p>
                        <p><strong>Tools:</strong> {project.tools}</p>
                        <p><strong>Outcome:</strong> {project.outcome}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Experience</h3>
                  <div className="resume-content">
                    <article className="experience-item">
                      <h4>Bioinformatician</h4>
                      <h5>Dec 2021 - Present</h5>
                      <p className="company"><em>African Genome Centre (AGC), UM6P</em></p>
                      <ul>
                        <li>Designed and delivered end-to-end pipelines for microbiome, metagenomics, RNA-seq, and whole-genome sequencing projects.</li>
                        <li>Supported academic studies, collaborative research, and applied analysis requests with reproducible workflows and interpretable reporting.</li>
                        <li>Managed read-based and assembly-based analyses across human-associated, environmental, and plant-associated datasets.</li>
                        <li>Optimized execution on HPC environments using SLURM and documented workflows for reuse, training, and team handoff.</li>
                        <li>Mentored students and researchers in R, microbiome analysis, workflow reproducibility, and scalable computing.</li>
                      </ul>
                    </article>
                    <article className="experience-item">
                      <h4>Bioinformatics Intern</h4>
                      <h5>Mar 2021 - Nov 2021</h5>
                      <p className="company"><em>African Genome Centre, UM6P</em></p>
                      <ul>
                        <li>Developed genomic databases and annotation tools including MegaLTR and MegaSSR.</li>
                      </ul>
                    </article>
                    <article className="experience-item">
                      <h4>Bioinformatics Intern</h4>
                      <h5>Feb 2020 - Sep 2020</h5>
                      <p className="company"><em>AgroBioScience, UM6P</em></p>
                      <ul>
                        <li>Built deep learning-based pipelines for metagenomic gene prediction.</li>
                      </ul>
                    </article>
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Services</h3>
                  <div className="resume-content">
                    <article>
                      <ul>
                        {services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Credibility</h3>
                  <div className="resume-content">
                    <article>
                      <ul>
                        {credibility.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Technical Areas</h3>
                  <div className="resume-content">
                    {technicalAreas.map((item) => (
                      <article key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="resume-item" data-aos="fade-up">
                  <h3 className="resume-title">Training and Community</h3>
                  <div className="resume-content">
                    <article>
                      <ul>
                        <li>Instructor for microbiome analysis workshops at UM6P from 2023 to 2025.</li>
                        <li>Mentor for PhD students, postdocs, and researchers working with reproducible bioinformatics workflows.</li>
                        <li>Contributor to African bioinformatics training initiatives and HPC-oriented scientific support.</li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-content" className="seo-content section light-background">
          <div className="container" data-aos="fade-up">
            <div className="seo-content-card">
              <h2>Bioinformatics Expertise Across NGS and HPC</h2>
              <p>This resume reflects bioinformatics expertise built across NGS workflows, microbiome analysis, metagenomics, RNA-seq, and bacterial genomics. A large part of the work involves HPC genomics, including SLURM pipelines, reproducible environments, and scalable execution for datasets that do not fit manual analysis. Tools such as DADA2, Kraken2, MetaPhlAn, GTDB-Tk, Nextflow, R, and Python are used not as isolated software choices, but as parts of reliable analytical systems that support interpretation, collaboration, and scientific reporting.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
