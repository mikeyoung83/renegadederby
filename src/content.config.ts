import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

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

const gameEntrySchema = z.object({
  time: z.string(),
  title: z.string(), // e.g. "All-Stars vs. Forest City"
  isTentative: z.boolean().default(false),
});

const games = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/games" }),
  schema: z.object({
    date: z.coerce.date(),
    location: z.enum(["home", "away"]),
    hostedBy: z.string().optional(),
    pricing: z.string().optional(),
    isTentative: z.boolean().default(false), // Overarching event status
    entries: z.array(gameEntrySchema), // The list of actual games
  }),
});

export const collections = {
  teams,
  players,
  coaches,
  officials,
  sponsors,
  games,
};
