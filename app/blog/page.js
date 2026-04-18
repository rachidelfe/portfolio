import ContactTriggerButton from '../../components/client/ContactTriggerButton';
import BlogFilterGrid from '../../components/client/BlogFilterGrid';
import { blogPosts, getBlogCategories } from '../../lib/site';

export const metadata = {
  title: 'Blog'
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Blog</h2>
            <p>Articles, tutorials, and practical notes on microbiome analysis, metagenomics workflows, RNA-seq, and scientific data interpretation.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <BlogFilterGrid posts={blogPosts} categories={getBlogCategories(blogPosts)} />

            <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
              <ContactTriggerButton
                type="button"
                className="btn btn-primary"
                service="Bioinformatics Research Project"
                plan="Project Discussion"
                message="Hello, I would like to discuss a bioinformatics research project."
                emailSubject="Service Request: Bioinformatics Research Project"
              >
                Discuss a Research Project
              </ContactTriggerButton>
            </div>
          </div>
        </section>

        <section id="seo-content" className="seo-content section light-background">
          <div className="container" data-aos="fade-up">
            <div className="seo-content-card">
              <h2>Practical Bioinformatics Tutorials from Real Workflows</h2>
              <p>This blog focuses on bioinformatics tutorials that come from real analysis practice rather than simplified demos. Topics include DADA2 pipeline design, QIIME2 analysis, amplicon sequencing interpretation, phyloseq workflows, and the logic behind microbiome statistics and ecological visualization. The goal is to explain how raw reads move through denoising, taxonomy assignment, diversity analysis, and reporting so researchers can better understand the analytical choices behind 16S, ITS, and broader sequencing projects.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
