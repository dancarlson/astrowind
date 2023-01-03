export const SITE = {
  name: "The Express Conferences",

  domain: "https://boisterous-cocada-3a5d71.netlify.app/",
  baseUrl: "/",

  title: "The Express Conferences — Your website with Astro + Tailwind CSS",
  description: "🚀 AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M",

  facebook: "https://www.facebook.com/The-Express-Conferences-102675482083607/",
  twitter: "https://twitter.com/Xconferences",
  linkedin: "https://www.linkedin.com/company/the-express-conferences/",
  instagram: "https://www.instagram.com/theexpressconferences/",
  phone: "1-866-375-5147",
  email: "info@theexpressconferences.com",
  address: "",
};

export const BLOG = {
  disabled: false,
  slug: "blog",

  postsWithoutBlogSlug: false,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
};

export const CONF = {
  disabled: false,
  slug: "conference",

  postsWithoutConfSlug: false,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
};
