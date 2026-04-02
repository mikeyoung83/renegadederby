import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // The new way to "load" local files

const teams = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/teams",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      groupPhoto: image(),
      // The description will come from the Markdown body
    }),
});

const players = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/players", // Make sure this points to the parent folder
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      number: z.number(),
      photo: image(),
    }),
});

export const collections = { teams, players };
