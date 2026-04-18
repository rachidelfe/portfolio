import Link from 'next/link';
import { services } from '../../lib/site';

export const metadata = {
  title: 'Services'
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <main className="main">
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Bioinformatics support for research teams that need reliable analysis, reproducible workflows, and clear scientific outputs.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center g-5">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className="col-md-6"
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                  data-aos-delay={100 + (Math.floor(index / 2) * 100)}
                >
                  <Link href={`/services/${service.slug}`} className="service-card-link">
                    <article className="service-item service-card-clean">
                      <div className="service-content">
                        <div className="service-card-meta">
                          <span className="service-category-badge">{service.category}</span>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.excerpt}</p>
                        <div className="service-card-footer">
                          <span className="service-link service-link-static">
                            <span>View Service</span>
                            <i className="bi bi-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="seo-content" className="seo-content section light-background">
          <div className="container" data-aos="fade-up">
            <div className="seo-content-card">
              <h2>Scientific Workflows Designed for Real Analysis</h2>
              <p>These services are built around microbiome analysis services that laboratories can actually use, from 16S rRNA analysis in DADA2 or QIIME2 to shotgun metagenomics workflows combining Kraken2, MetaPhlAn, HUMAnN, assembly, and MAG-oriented interpretation. The work is relevant for human microbiome, soil microbiome, and environmental sequencing projects, and it is especially useful for teams in Morocco or abroad that need reproducible reporting rather than isolated scripts or one-off command lines.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
