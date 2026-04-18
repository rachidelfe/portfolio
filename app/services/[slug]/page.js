import Link from 'next/link';
import { notFound } from 'next/navigation';
import FaqAccordion from '../../../components/client/FaqAccordion';
import { buildWhatsAppUrl, services } from '../../../lib/site';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.excerpt
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappMessage = `Hello, I would like to know more about your ${service.title} service.`;

  return (
    <div className="service-details-page">
      <main className="main">
        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="service-detail-shell">
              <Link href="/services" className="blog-back-link">
                <i className="bi bi-arrow-left" />
                <span>Back to Services</span>
              </Link>

              <div className="service-detail-header">
                <span className="service-category-badge">{service.category}</span>
                <h1>{service.title}</h1>
                <p className="service-detail-excerpt">{service.excerpt}</p>
                <p className="service-detail-intro">{service.intro}</p>
              </div>

              <div className="service-includes">
                <h3>What You Will Get</h3>
                <div className="row g-3">
                  {service.whatYouGet.map((item) => (
                    <div className="col-md-6" key={item}>
                      <div className="service-include-card">
                        <i className="bi bi-check2-circle" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-cta-section">
                <div className="service-cta-card">
                  <div className="service-cta-copy">
                    <h2>Need more details?</h2>
                    <p>Tell me about your dataset or research goal and continue the conversation on WhatsApp.</p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(whatsappMessage)}
                    className="btn service-whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp" />
                    <span>Get in Touch on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="service-faq-section">
                <div className="section-title text-start">
                  <h2>FAQ</h2>
                  <p>Common questions about scope, delivery, and how the service is typically handled.</p>
                </div>
                <FaqAccordion faqs={service.faqs} idPrefix={`service-faq-${service.slug}`} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
