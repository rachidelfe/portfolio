import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, contactUrl, emailAddress, getNextPost, siteName, siteRole } from '../../../lib/site';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const nextPost = getNextPost(post.slug);

  return (
    <div className="blog-details-page">
      <main className="main">
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <article className="blog-article-shell">
              <Link href="/blog" className="blog-back-link">
                <i className="bi bi-arrow-left" />
                <span>Back to Blog</span>
              </Link>

              <header className="blog-article-header">
                <div className="blog-tags mb-3">
                  {post.tags.map((tag) => (
                    <span className="blog-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <h1>{post.title}</h1>
                <p className="blog-article-subtitle">{post.excerpt}</p>

                <div className="blog-meta-row">
                  <span className="blog-meta-item"><i className="bi bi-calendar-check" /> {post.date}</span>
                  <span className="blog-meta-item"><i className="bi bi-clock" /> {post.readTime}</span>
                  <span className="blog-meta-item"><i className="bi bi-diagram-3" /> {post.category}</span>
                  <span className="blog-meta-item"><i className="bi bi-person" /> {siteName} - {siteRole}</span>
                </div>
              </header>

              <figure className="blog-featured-image" data-aos="fade-up" data-aos-delay="150">
                <img src={post.image} alt={post.title} className="img-fluid" />
              </figure>

              <div className="blog-article-body">
                <p>{post.lead}</p>
                {post.sections.map((section, index) => (
                  <div key={section.heading}>
                    {index === 0 ? <h2>{section.heading}</h2> : <h3>{section.heading}</h3>}
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ))}

                <section className="blog-key-takeaways">
                  <h3>Key Takeaways</h3>
                  <ul>
                    {post.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="blog-cta">
                  <h3>Need help with microbiome or metagenomics analysis?</h3>
                  <p>Contact me by email if you need support with sequencing workflows, HPC deployment, microbiome interpretation, or scientific reporting for your research project.</p>
                  <div className="blog-cta-actions">
                    <Link href={contactUrl} className="btn-view-project">Contact by Email</Link>
                    <a href={`mailto:${emailAddress}`} className="btn-next-project">Contact via Email <i className="bi bi-arrow-right" /></a>
                  </div>
                </section>

                <div className="cta-buttons mt-4">
                  <Link href={`/blog/${nextPost.slug}`} className="btn-next-project">Next Article <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
