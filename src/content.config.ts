import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

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
  time: z.string().optional(),
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

const homepage = defineCollection({
  // 2. Use the loader instead of type: "content"
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/homepage",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      sectionImage: image(),
    }),
});

const homepageSettings = defineCollection({
  loader: glob({
    pattern: "homepageSettings/homepage-settings.md",
    base: "./src/content",
  }),
  schema: z.object({
    hero_heading: z.string(),
    hero_tagline: z.string(),
    hero_cta_primary_label: z.string(),
    hero_cta_primary_url: z.string(),
    hero_cta_secondary_label: z.string(),
    hero_cta_secondary_url: z.string(),
    about_eyebrow: z.string(),
    about_heading: z.string(),
    about_cta_label: z.string(),
    about_cta_url: z.string(),
  }),
});

export const collections = {
  teams,
  players,
  coaches,
  officials,
  sponsors,
  games,
  homepage,
  homepageSettings,
};
