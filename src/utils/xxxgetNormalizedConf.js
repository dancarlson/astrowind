import getReadingTime from "reading-time";

export const getNormalizedConf = async (conf) => {
  const { frontmatter, compiledContent, rawContent, file } = conf;

  return {
    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,

    canonical: frontmatter.canonical,
    slug: file.split("/").pop().split(".").shift(),

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,

    conference: frontmatter.conf,
    label: frontmatter.title,
    logo: frontmatter.image,
    startDate: frontmatter.startDate,
    endDate: frontmatter.endDate,
    displayDate: frontmatter.displayDate,

    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};
