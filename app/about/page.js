import Link from 'next/link';
import AnimatedCounter from '../../components/client/AnimatedCounter';
import AnimatedProgressBar from '../../components/client/AnimatedProgressBar';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="main">
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Bioinformatician at the African Genome Centre (AGC), UM6P, supporting researchers with microbiome, metagenomics, RNA-seq, and whole-genome sequencing projects.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center justify-content-between gy-5 mb-5">
              <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
                <div className="intro-content">
                  <span className="eyebrow">Background</span>
                  <h2 className="headline">I work at the intersection of biology, genomics, and scalable bioinformatics.</h2>
                  <p className="lead">My work focuses on helping research teams analyze complex biological datasets with practical, reproducible workflows. I support projects involving human, environmental, and plant microbiomes, shotgun metagenomics, RNA-seq, and whole-genome sequencing.</p>
                  <p>Using Python, R, and HPC environments with SLURM, I build pipelines that move cleanly from raw sequencing data to interpretable results. I value clear reporting, efficient collaboration, and scientific outputs that labs can reuse for manuscripts, grants, and ongoing analysis.</p>

                  <div className="cta-group">
                    <Link href="/services" className="btn-ghost">
                      View Services <i className="bi bi-arrow-up-right" />
                    </Link>
                    <Link href="/resume" className="link-underline">
                      Review Resume <i className="bi bi-file-earmark-text" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="250">
                <figure className="profile-figure text-center text-lg-end">
                  <img src="/assets/img/profile/rachid-elfermi-659bfb01bdeef.jpg" alt="Portrait of Rachid Elfermi" className="img-fluid profile-photo" />
                </figure>
              </div>
            </div>

            <div className="mb-5">
              <div className="row g-4">
                <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="120">
                  <div className="skill-item">
                    <i className="bi bi-diagram-3" />
                    <h3>Microbiome Studies</h3>
                    <p>Human, environmental, and plant community profiling.</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="180">
                  <div className="skill-item">
                    <i className="bi bi-code-slash" />
                    <h3>Metagenomics</h3>
                    <p>Shotgun workflows, annotation, and comparative analysis.</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="240">
                  <div className="skill-item">
                    <i className="bi bi-water" />
                    <h3>RNA-seq</h3>
                    <p>Transcriptomics workflows, quantification, and interpretation.</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                  <div className="skill-item">
                    <i className="bi bi-cpu" />
                    <h3>HPC Workflows</h3>
                    <p>Python, R, SLURM, and reproducible pipeline design.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="row g-4">
                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="120">
                  <article className="timeline-item">
                    <span className="dot" />
                    <time>2017</time>
                    <h4>Software Engineering</h4>
                    <p>Completed a strong technical foundation in software engineering and computation.</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="180">
                  <article className="timeline-item">
                    <span className="dot" />
                    <time>2021</time>
                    <h4>MSc in Bioinformatics</h4>
                    <p>Specialized in sequence analysis, microbial genomics, and reproducible computational workflows.</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="240">
                  <article className="timeline-item">
                    <span className="dot" />
                    <time>2021</time>
                    <h4>AGC at UM6P</h4>
                    <p>Joined the African Genome Centre and began building end-to-end genomics pipelines.</p>
                  </article>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                  <article className="timeline-item">
                    <span className="dot" />
                    <time>2026</time>
                    <h4>Research Leadership</h4>
                    <p>Contributing to multi-project microbiome, metagenomics, and infectious disease studies.</p>
                  </article>
                </div>
              </div>
            </div>

            <blockquote className="personal-quote text-center mb-5" data-aos="fade-down" data-aos-delay="200">
              <p>&quot;Good bioinformatics should be reproducible, understandable, and useful to the scientists making decisions from the data.&quot;</p>
            </blockquote>

            <div className="row g-3 justify-content-center">
              <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="120">
                <div className="fact-pill">
                  <i className="bi bi-people" />
                  <span>Mentorship</span>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="160">
                <div className="fact-pill">
                  <i className="bi bi-journal-code" />
                  <span>Publications</span>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="200">
                <div className="fact-pill">
                  <i className="bi bi-hdd-network" />
                  <span>HPC Ready</span>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="240">
                <div className="fact-pill">
                  <i className="bi bi-bar-chart" />
                  <span>Multi-omics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Core technical strengths across microbiome analysis, genomics, workflow automation, HPC deployment, and scientific communication.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4 skills-animation">
              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="skill-box">
                  <h3>Microbiome &amp; Metagenomics</h3>
                  <p>Community profiling, shotgun analysis, and ecological interpretation.</p>
                  <span className="text-end d-block">95%</span>
                  <AnimatedProgressBar value={95} />
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="skill-box">
                  <h3>Python &amp; R</h3>
                  <p>Data analysis, visualization, automation, and reproducible reporting.</p>
                  <span className="text-end d-block">92%</span>
                  <AnimatedProgressBar value={92} />
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="skill-box">
                  <h3>HPC &amp; Workflow Automation</h3>
                  <p>Slurm, Conda, reproducible environments, and scalable pipelines.</p>
                  <span className="text-end d-block">90%</span>
                  <AnimatedProgressBar value={90} />
                </div>
              </div>

              <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="skill-box">
                  <h3>RNA-seq &amp; WGS</h3>
                  <p>Transcriptomics, genome analysis, and downstream interpretation.</p>
                  <span className="text-end d-block">88%</span>
                  <AnimatedProgressBar value={88} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="stats section dark-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="row counters">
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <h2><AnimatedCounter end={18} suffix="+" /></h2>
                    <p>Research Projects Supported</p>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <h2><AnimatedCounter end={9} suffix="+" /></h2>
                    <p>Collaborating Labs</p>
                  </div>

                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                    <h2><AnimatedCounter end={6} suffix="+" /></h2>
                    <p>Production Pipelines Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-content" className="seo-content section light-background">
          <div className="container" data-aos="fade-up">
            <div className="seo-content-card">
              <h2>Bioinformatics Work Rooted in Moroccan Research</h2>
              <p>As a bioinformatician in Morocco, my work connects microbiome research in Morocco with practical computational delivery. I support projects involving 16S rRNA, shotgun metagenomics, RNA-seq, and comparative genomics, often using DADA2, QIIME2, Kraken2, and R-based analysis. The goal is not only to process sequencing data, but to build workflows that researchers can understand, reproduce, and use for manuscripts, grant reporting, or ongoing studies in human, soil, and plant-associated systems.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
