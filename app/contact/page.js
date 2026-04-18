import ContactForm from '../../components/client/ContactForm';
import { emailAddress, linkedinUrl, whatsappNumber } from '../../lib/site';

export const metadata = {
  title: 'Contact'
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const initialSubject = typeof resolvedSearchParams?.subject === 'string' ? resolvedSearchParams.subject : '';
  const initialMessage = typeof resolvedSearchParams?.message === 'string' ? resolvedSearchParams.message : '';

  return (
    <div className="contact-page">
      <main className="main">
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <span className="description-title">Contact</span>
            <h2>Contact</h2>
            <p>Best for project inquiries, pipeline requests, microbiome studies, and bioinformatics consulting.</p>
          </div>

          <div className="container">
            <div className="contact-wrapper" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-panel">
                <div className="contact-info-header">
                  <h3>Start the conversation</h3>
                  <p>I support researchers, labs, and companies that need reliable microbiome and genomics analysis without wasting time on fragile workflows or unclear outputs.</p>
                </div>

                <div className="contact-info-cards">
                  <div className="info-card">
                    <div className="icon-container">
                      <i className="bi bi-pin-map-fill" />
                    </div>
                    <div className="card-content">
                      <h4>Location</h4>
                      <p>Ben Guerir, Morocco</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="icon-container">
                      <i className="bi bi-envelope-open" />
                    </div>
                    <div className="card-content">
                      <h4>Email</h4>
                      <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="icon-container">
                      <i className="bi bi-whatsapp" />
                    </div>
                    <div className="card-content">
                      <h4>WhatsApp-first contact</h4>
                      <p>Use the brief on the right to open a ready-to-send WhatsApp message.</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="icon-container">
                      <i className="bi bi-linkedin" />
                    </div>
                    <div className="card-content">
                      <h4>LinkedIn</h4>
                      <p><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">linkedin.com/in/rachid-elfermi-75a84b8b</a></p>
                    </div>
                  </div>
                </div>

                <div className="social-links-panel">
                  <h5>Quick Links</h5>
                  <div className="social-icons">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Rachid, I would like to discuss a bioinformatics project.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <i className="bi bi-whatsapp" />
                    </a>
                    <a href={`mailto:${emailAddress}`} aria-label="Email">
                      <i className="bi bi-envelope" />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-panel">
                <div className="map-container availability-panel">
                  <div className="availability-content">
                    <span className="availability-label">Current Focus</span>
                    <h3>Microbiome analysis, metagenomics pipelines, RNA-seq support, and reproducible HPC workflows.</h3>
                    <p>Ideal for collaborators who need high-quality analysis, clear reporting, and a workflow they can trust on future datasets too.</p>
                  </div>
                </div>

                <div className="form-container whatsapp-container">
                  <h3>Send project brief to WhatsApp</h3>
                  <p>Fill in a few details and open a prewritten WhatsApp message with your project scope, service needs, and preferred contact information.</p>
                  <ContactForm initialSubject={initialSubject} initialMessage={initialMessage} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seo-content" className="seo-content section light-background">
          <div className="container" data-aos="fade-up">
            <div className="seo-content-card">
              <h2>Collaboration for Microbiome and Genomics Projects</h2>
              <p>This page is intended for teams that want to hire a bioinformatician in Morocco for targeted analytical work, longer collaborations, or freelance bioinformatics support. Typical requests involve microbiome projects, shotgun metagenomics, RNA-seq, comparative genomics, or workflow troubleshooting on HPC systems. If your study needs DADA2 or QIIME2 processing, Kraken2-based profiling, figure-ready summaries, or help structuring a reproducible pipeline, the contact brief is the fastest way to start a focused scientific discussion.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
