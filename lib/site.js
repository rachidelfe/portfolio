import blogPosts from '../data/blogPosts';
import services from '../data/services';

const siteName = 'Rachid Elfermi';
const siteRole = 'Bioinformatician | African Genome Centre (AGC), UM6P';
const contactUrl = '/contact';
const linkedinUrl = 'https://www.linkedin.com/in/rachid-elfermi-75a84b8b/';
const githubUrl = 'https://github.com/rachidelfe';
const emailAddress = 'rachid.elfermi@gmail.com';
const whatsappNumber = '212694231964';
const defaultMetaDescription = 'Bioinformatician at the African Genome Centre (AGC), UM6P, specializing in microbiome research, metagenomics, RNA-seq, WGS, HPC workflows, and multi-omics data analysis.';
const defaultMetaKeywords = 'Rachid Elfermi, bioinformatics, microbiome, metagenomics, RNA-seq, WGS, MAGs, HPC, Slurm, UM6P, African Genome Centre';

function getBlogCategories(posts = blogPosts) {
  return posts.reduce((categories, post) => {
    const existingCategory = categories.find((category) => category.name === post.category);

    if (existingCategory) {
      existingCategory.count += 1;
      return categories;
    }

    categories.push({
      name: post.category,
      count: 1,
      filterClass: post.filterClass
    });

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

function buildWhatsAppUrl(message) {
  const searchParams = new URLSearchParams();

  if (message) {
    searchParams.set('text', message);
  }

  if (whatsappNumber) {
    searchParams.set('phone', whatsappNumber);
    return `https://api.whatsapp.com/send?${searchParams.toString()}`;
  }

  return `https://wa.me/?${searchParams.toString()}`;
}

export {
  blogPosts,
  services,
  siteName,
  siteRole,
  contactUrl,
  linkedinUrl,
  githubUrl,
  emailAddress,
  whatsappNumber,
  buildWhatsAppUrl,
  defaultMetaDescription,
  defaultMetaKeywords,
  getBlogCategories,
  getNextPost
};
