import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://rafa.page",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    }
  }), svelte(), sitemap(), mdx()]
});