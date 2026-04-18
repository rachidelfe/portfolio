import Link from 'next/link';
import TypedText from '../components/client/TypedText';

export default function HomePage() {
  return (
    <div className="index-page">
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="hero-content">
                  <h1 data-aos="fade-up" data-aos-delay="200">Hello, I&apos;m <span className="highlight">Rachid Elfermi</span></h1>
                  <h2 data-aos="fade-up" data-aos-delay="300">Bioinformatician specializing in <TypedText strings={['Microbiome', 'Metagenomics', 'RNA-seq']} /></h2>
                  <p data-aos="fade-up" data-aos-delay="400">I help researchers, labs, and scientific teams turn sequencing data into useful insight through microbiome analysis, metagenomics workflows, RNA-seq, whole-genome sequencing, and scalable HPC environments designed for reproducible collaboration.</p>
                  <div className="hero-actions" data-aos="fade-up" data-aos-delay="500">
                    <Link href="/services" className="btn btn-primary">Explore Services</Link>
                    <Link href="/contact" className="btn btn-outline">Start a Project</Link>
                  </div>
                  <div className="social-links" data-aos="fade-up" data-aos-delay="600">
                    <a href="https://github.com/rachidelfe" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" /></a>
                    <a href="https://www.linkedin.com/in/rachid-elfermi-75a84b8b/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
                    <a href="mailto:rachid.elfermi@gmail.com" aria-label="Email"><i className="bi bi-envelope" /></a>
                    <Link href="/blog" aria-label="Blog"><i className="bi bi-journal-text" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="hero-image" data-aos="zoom-in" data-aos-delay="300">
                  <div className="image-wrapper">
                    <img src="/assets/img/profile/rachid-elfermi-659bfb01bdeef.jpg" alt="Rachid Elfermi" className="img-fluid" />
                    <div className="floating-elements">
                      <div className="floating-card design" data-aos="fade-left" data-aos-delay="700">
                        <i className="bi bi-diagram-3" />
                        <span>Microbiome</span>
                      </div>
                      <div className="floating-card code" data-aos="fade-right" data-aos-delay="800">
                        <i className="bi bi-code-slash" />
                        <span>Workflows</span>
                      </div>
                      <div className="floating-card creativity" data-aos="fade-up" data-aos-delay="900">
                        <i className="bi bi-bar-chart-line" />
                        <span>Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
