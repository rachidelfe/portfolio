/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/resume.html', destination: '/resume', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/portfolio', destination: '/blog', permanent: true },
      { source: '/portfolio.html', destination: '/blog', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true }
    ];
  }
};

module.exports = nextConfig;
