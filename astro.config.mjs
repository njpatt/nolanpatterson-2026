import { defineConfig } from "astro/config";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://nolanpatterson.github.io",
  base: isProduction ? "/nolanpatterson-2026/" : "/",
  server: {
    host: true,
    port: 3000,
  },
});
