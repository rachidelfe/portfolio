'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function BlogFilterGrid({ posts, categories }) {
  const gridRef = useRef(null);
  const isotopeRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    let isMounted = true;

    async function initIsotope() {
      const [{ default: Isotope }, imagesLoadedModule] = await Promise.all([
        import('isotope-layout'),
        import('imagesloaded')
      ]);

      if (!isMounted || !gridRef.current) {
        return;
      }

      const imagesLoaded = imagesLoadedModule.default || imagesLoadedModule;

      imagesLoaded(gridRef.current, () => {
        if (!isMounted || !gridRef.current) {
          return;
        }

        isotopeRef.current?.destroy();
        isotopeRef.current = new Isotope(gridRef.current, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry'
        });

        isotopeRef.current.arrange({ filter: activeFilter });
      });
    }

    initIsotope();

    return () => {
      isMounted = false;
      isotopeRef.current?.destroy();
      isotopeRef.current = null;
    };
  }, []);

  useEffect(() => {
    isotopeRef.current?.arrange({ filter: activeFilter });
  }, [activeFilter]);

  return (
    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
        <li
          className={activeFilter === '*' ? 'filter-active' : ''}
          onClick={() => setActiveFilter('*')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveFilter('*');
            }
          }}
          role="button"
          tabIndex={0}
        >
          All
        </li>
        {categories.map((category) => {
          const categoryFilter = `.${category.filterClass}`;

          return (
            <li
              key={category.name}
              className={activeFilter === categoryFilter ? 'filter-active' : ''}
              onClick={() => setActiveFilter(categoryFilter)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setActiveFilter(categoryFilter);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {category.name}
            </li>
          );
        })}
      </ul>

      <div ref={gridRef} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
        {posts.map((post) => (
          <div key={post.slug} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${post.filterClass}`}>
            <Link href={`/blog/${post.slug}`} className="blog-card-link">
              <article className="portfolio-card blog-card">
                <div className="portfolio-img">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                </div>
                <div className="portfolio-info">
                  <div className="blog-card-meta">
                    <time dateTime={post.isoDate}>{post.date}</time>
                    <span>{post.readTime}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-badge-row">
                      <span className="blog-badge">{post.category}</span>
                      <span className="blog-badge">{post.readTime}</span>
                    </div>
                    <span className="blog-card-readmore">Read More <i className="bi bi-arrow-right" /></span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
