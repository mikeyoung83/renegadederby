// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // No production domain yet — swap this (and public/robots.txt) for the
  // real one once it's pointed at Netlify. Sitemap and canonical URLs use it.
  site: "https://renegadederby.netlify.app",
  output: "static",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  // cssVariable is "-family" suffixed so it doesn't collide with the
  // Tailwind --font-heading token in global.css that references it.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Anton",
      cssVariable: "--font-heading-family",
      weights: [400],
      styles: ["normal"],
    },
  ],
});
