import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
// import vercel from "@astrojs/vercel/serverless";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE,
  trailingSlash: "never",
  output: "server",
  adapter: cloudflare(),
  build: {
    format: "file"
  },
  integrations: [svelte(), image(), mdx(), tailwind({
    config: {
      path: "./tailwind.config.cjs",
      applyBaseStyles: false
    }
  })]
});