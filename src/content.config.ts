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
      // New Socials Object
      socials: z
        .object({
          facebook: z.string().url().optional(),
          twitter: z.string().url().optional(),
          instagram: z.string().url().optional(),
        })
        .optional(),
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
      photo: image().optional(),
    }),
});

const coaches = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/coaches" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      photo: image().optional(), // Fallback supported here too
    }),
});

const officials = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/officials",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      photo: image().optional(), // Fallback supported here too
    }),
});

const sponsors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/sponsors",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      url: z.string().url(),
      // Description can stay in the frontmatter or be the body of the MD
    }),
});

export const collections = { teams, players, coaches, officials, sponsors };
