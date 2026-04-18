import Link from 'next/link';
import { buildWhatsAppUrl, emailAddress, githubUrl, linkedinUrl } from '../lib/site';

export default function Footer({ siteName }) {
  const whatsappHref = buildWhatsAppUrl('Hello Rachid, I would like to discuss a bioinformatics project.');

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-shell">
          <div className="footer-grid">
            <section className="footer-column">
              <Link href="/" className="footer-logo" aria-label="Go to homepage">
                <img
                  src="/assets/img/logo.png"
                  alt="Rachid Elfermi logo"
                  width="1408"
                  height="768"
                />
              </Link>
              <h2 className="footer-title">Address</h2>
              <address className="footer-address">
                <span>Ben Guerir, Morocco</span>
                <span>African Genome Centre</span>
                <span>Available for remote collaboration</span>
              </address>
            </section>

            <section className="footer-column">
              <h2 className="footer-title">Contact</h2>
              <div className="footer-links">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="footer-socials" aria-label="Social links">
                <a href={githubUrl} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" /></a>
                <a href={linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
                <a href={`mailto:${emailAddress}`} aria-label="Email"><i className="bi bi-envelope" /></a>
                <Link href="/blog" aria-label="Blog"><i className="bi bi-journal-text" /></Link>
              </div>
            </section>

            <section className="footer-column">
              <h2 className="footer-title">Focus</h2>
              <p className="footer-copy">Microbiome analysis, shotgun metagenomics, RNA-seq, comparative genomics, and reproducible HPC workflows for research teams that need interpretable outputs and clean delivery.</p>
            </section>

            <section className="footer-column">
              <h2 className="footer-title">Bioinformatics Morocco</h2>
              <p className="footer-copy">Bioinformatics work in Morocco spanning microbiome studies, DADA2 and QIIME2 workflows, metagenomics profiling, and RNA-seq support for academic and applied genomics projects.</p>
            </section>
          </div>

          <div className="footer-bottom">
            <p className="footer-meta">© {new Date().getFullYear()} {siteName}. Built for scientific collaboration, reproducible analysis, and clear genomic reporting.</p>
          </div>
        </div>
      </footer>

      <a href={whatsappHref} className="whatsapp-float" aria-label="Contact on WhatsApp" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp" />
      </a>
    </>
  );
}
