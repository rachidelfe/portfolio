const express = require('express');
const path = require('path');
const blogPosts = require('./data/blogPosts');
const services = require('./data/services');

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '127.0.0.1';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory and form assets.
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/forms', express.static(path.join(__dirname, 'forms')));

const siteName = 'Rachid Elfermi';
const siteRole = 'Bioinformatics Specialist';
const whatsappUrl = 'https://wa.me/YOUR_NUMBER?text=Hello%20Rachid%20Elfermi%2C%20I%20am%20interested%20in%20your%20bioinformatics%20services.';
const defaultMetaDescription = 'Bioinformatics freelancer offering microbiome analysis, metagenomics workflows, eDNA analysis, HPC support, and data visualization for research teams.';
const defaultMetaKeywords = 'bioinformatics, microbiome, metagenomics, eDNA, HPC, Slurm, Conda, data visualization, research collaboration';

function renderPage(res, view, title, bodyClass, extra = {}) {
  res.render(view, {
    title,
    bodyClass,
    siteName,
    siteRole,
    whatsappUrl,
    metaDescription: defaultMetaDescription,
    metaKeywords: defaultMetaKeywords,
    ...extra
  });
}

function getBlogCategories(posts) {
  return posts.reduce((categories, post) => {
    const existingCategory = categories.find((category) => category.name === post.category);

    if (existingCategory) {
      existingCategory.count += 1;
    } else {
      categories.push({
        name: post.category,
        count: 1,
        filterClass: post.filterClass
      });
    }

    return categories;
  }, []);
}

function getNextPost(slug) {
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return blogPosts[0];
  }

  return blogPosts[(currentIndex + 1) % blogPosts.length];
}

function buildWhatsappLink(message) {
  return `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`;
}

app.get(['/', '/index.html'], (req, res) => {
  renderPage(res, 'index', `Bioinformatics Freelancer | ${siteName}`, 'index-page');
});

app.get(['/about', '/about.html'], (req, res) => {
  renderPage(res, 'about', `About | ${siteName}`, 'about-page');
});

app.get(['/resume', '/resume.html'], (req, res) => {
  renderPage(res, 'resume', `Resume | ${siteName}`, 'resume-page');
});

app.get(['/services', '/services.html'], (req, res) => {
  renderPage(res, 'services', `Services | ${siteName}`, 'services-page', {
    services,
    projectDiscussionMessage: buildWhatsappLink('Hello, I would like to discuss a bioinformatics research project.')
  });
});

app.get('/services/:slug', (req, res, next) => {
  const service = services.find((item) => item.slug === req.params.slug);

  if (!service) {
    next();
    return;
  }

  renderPage(res, 'service-details', `${service.title} | ${siteName}`, 'service-details-page', {
    service
  });
});

app.get(['/blog', '/blog.html'], (req, res) => {
  renderPage(res, 'portfolio', `Blog | ${siteName}`, 'blog-page', {
    posts: blogPosts,
    categories: getBlogCategories(blogPosts),
    recentPosts: blogPosts.slice(0, 3)
  });
});

app.get(['/portfolio', '/portfolio.html'], (req, res) => {
  res.redirect('/blog');
});

app.get('/blog/:slug', (req, res, next) => {
  const post = blogPosts.find((item) => item.slug === req.params.slug);

  if (!post) {
    next();
    return;
  }

  renderPage(res, 'blog-details', `${post.title} | ${siteName}`, 'blog-details-page', {
    post,
    nextPost: getNextPost(post.slug)
  });
});

app.get(['/contact', '/contact.html'], (req, res) => {
  renderPage(res, 'contact', `Contact | ${siteName}`, 'contact-page', {
    contactSubject: req.query.subject || '',
    contactMessage: req.query.message || ''
  });
});

app.use((req, res) => {
  res.status(404);
  renderPage(res, '404', `404 | ${siteName}`, 'error-page');
});

function startServer(port) {
  const server = app.listen(port, HOST, () => {
    console.log(`Bioinformatics portfolio running at http://${HOST}:${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Port ${port} is in use, trying ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    console.error('Server failed to start:', error.message);
  });
}

startServer(DEFAULT_PORT);
