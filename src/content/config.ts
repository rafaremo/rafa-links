import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    layout: z.enum(['../../layouts/main.astro']).optional(),
    date: z.date(),
    title: z.string(),
    description: z.string(),
    exerpt: z.string(),
    image: z.string()
  }),
});

export const collections = {
  'blog': blogCollection,
};