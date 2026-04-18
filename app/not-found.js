import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-page">
      <main className="main">
        <section id="starter-section" className="starter-section section">
          <div className="container section-title" data-aos="fade-up">
            <h2>404</h2>
            <p>The page you are looking for is not available.</p>
          </div>

          <div className="container text-center" data-aos="fade-up">
            <p>This link may have changed while the site was being updated into a bioinformatics portfolio and blog.</p>
            <div className="mt-4">
              <Link href="/" className="btn btn-primary">Back Home</Link>
              <Link href="/blog" className="btn btn-outline">Visit The Blog</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
