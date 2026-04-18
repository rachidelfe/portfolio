'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { emailAddress, githubUrl, linkedinUrl } from '../lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

function isActivePath(pathname, href) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', isMobileNavOpen);

    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileNavOpen]);

  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={isActivePath(pathname, item.href) ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
            aria-expanded={isMobileNavOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMobileNavOpen((currentValue) => !currentValue)}
          />
        </nav>

        <div className="header-social-links">
          <a href={githubUrl} className="twitter" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href={linkedinUrl} className="facebook" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href={`mailto:${emailAddress}`} className="instagram" aria-label="Email"><i className="bi bi-envelope"></i></a>
          <Link href="/blog" className="linkedin" aria-label="Blog"><i className="bi bi-journal-text"></i></Link>
        </div>
      </div>
    </header>
  );
}
