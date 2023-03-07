// https://astro.build/config
import {defineConfig} from "astro/config";
import svelte from "@astrojs/svelte";
// import image from "@astrojs/image";

import vercel from "@astrojs/vercel/serverless";
// import cloudflare from '@astrojs/cloudflare';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";

export default defineConfig({
  site: process.env.PUBLIC_SITE,
  trailingSlash: "never",
  output: "server",
  adapter: vercel(),
  build: {
    format: "file"
  },
  integrations: [
    svelte(),
    mdx(),
    tailwind({
      config: {
        path: "./tailwind.config.cjs",
        applyBaseStyles: false
      }
    }),
    critters({
      fonts: true,
    })]
});
