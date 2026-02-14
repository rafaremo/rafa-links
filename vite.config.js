import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: [
      "localhost",
      ".trycloudflare.com",
      ".local"
    ],
    host: true,
    port: 4321
  },
});
