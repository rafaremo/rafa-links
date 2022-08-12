import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://rafa.page",
  integrations: [tailwind(), svelte(), sitemap()]
});