import getReadingTime from "reading-time";

export const getNormalizedPost = async (post) => {
  const { frontmatter, compiledContent, rawContent, file } = post;

  return {
    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,

    canonical: frontmatter.canonical,
    slug: file.split("/").pop().split(".").shift(),

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    label: frontmatter.label,
    logo: frontmatter.logo,

    startDate: frontmatter.startDate,
    endDate: frontmatter.endDate,
    displayDate: frontmatter.displayDate,
    
    locationLogo: frontmatter.locationLogo,
    locationUrl: frontmatter.locationUrl,
    location: frontmatter.location,
    address: frontmatter.address,

    host: frontmatter.host,
    hostUrl: frontmatter.hostUrl,
    hostLogo: frontmatter.hostLogo,

    price: frontmatter.price,
    currency: frontmatter.currency,
    displayPrice: frontmatter.displayPrice,

    register: frontmatter.register,
    regLabel: frontmatter.regLabel,
    
    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};
