import { getNormalizedPost } from "~/utils/getNormalizedPost";

const load = async function () {
  const posts = import.meta.glob("~/data/markets/**/*.{md,mdx}", {
    eager: true,
  });

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await getNormalizedPost(post);
  });

  const results = (await Promise.all(normalizedPosts))
    .sort(
      (a, b) =>
        new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf()
    )
    .reverse()
    .filter((post) => !post.draft);
  return results;
};

let _posts;

export const fetchMarkets = async () => {
  _posts = _posts || load();

  return await _posts;
};

export const fetchMarketsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const markets = await fetchMarkets();

  return ids.reduce(function (r, a) {
    markets.some(function (el) {
      return a === el.label && r.push(el);
    });
    return r;
  }, []);
};

export const fetchMarketById = async (id) => {
  if (Array.isArray(id)) return;

  const market = await fetchMarket();

  return id.reduce(function (r, a) {
    market.some(function (el) {
      return a === el.label && r.push(el);
    });
    return r;
  }, []);
};
