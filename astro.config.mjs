import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://rafa.page/",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    }
  }), svelte(), sitemap(), mdx()]
});
