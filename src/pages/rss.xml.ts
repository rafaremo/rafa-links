import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  const posts = await getCollection("blog");
  const items = posts.map(({ data: { image, title, exerpt, date }, slug }) => ({
    title,
    exerpt,
    link: `${site}${slug}`,
    pubDate: new Date(date),
  }));

  return rss({
    title: 'Rafael González | Blog',
    description: 'Blog personal de Rafael González, tecnología, e-commerce y más.',
    site: site.toString(),
    customData: `<language>es-mx</language>`,
    items
  });
}
