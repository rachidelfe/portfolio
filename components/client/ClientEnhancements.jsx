'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClientEnhancements() {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let preloaderTimeoutId;

    function hidePreloader() {
      preloaderTimeoutId = window.setTimeout(() => {
        setShowPreloader(false);
      }, 150);
    }

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }

    return () => {
      window.removeEventListener('load', hidePreloader);
      window.clearTimeout(preloaderTimeoutId);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      document.body.classList.toggle('scrolled', window.scrollY > 100);
      setShowScrollTop(window.scrollY > 100);
    }

    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('scrolled');
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    let glightboxInstance;

    async function initEnhancements() {
      const [{ default: AOS }, { default: GLightbox }] = await Promise.all([
        import('aos'),
        import('glightbox')
      ]);

      if (!isMounted) {
        return;
      }

      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
      AOS.refreshHard();

      glightboxInstance = GLightbox({
        selector: '.glightbox'
      });
    }

    initEnhancements();

    return () => {
      isMounted = false;
      glightboxInstance?.destroy();
    };
  }, [pathname]);

  return (
    <>
      {showPreloader ? <div id="preloader" /> : null}
      <button
        type="button"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? 'active' : ''}`}
        aria-label="Scroll to top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        <i className="bi bi-arrow-up-short" />
      </button>
    </>
  );
}
