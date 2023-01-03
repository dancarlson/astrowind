import { getNormalizedPost } from "~/utils/getNormalizedPost";

const load = async function () {
  const posts = import.meta.glob("~/data/conferences/**/*.{md,mdx}", {
    eager: true,
  });

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await getNormalizedPost(post);
  });

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf())
    .reverse()
    .filter((post) => !post.draft);
  return results;
};

let _posts;

export const fetchConferences = async () => {
  _posts = _posts || load();

  return await _posts;
};

export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchConferences();

  return ids.reduce(function (r, a) {
    posts.some(function (el) {
      return a === el.slug && r.push(el);
    });
    return r;
  }, []);
};