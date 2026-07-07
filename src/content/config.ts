import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepageSettingsCollection = defineCollection({
  // Remove the 'type' property. The loader handles the content.
  loader: glob({
    pattern: "homepage-settings.md",
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

const gamesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    entries: z.array(
      z.object({
        title: z.string(),
        // Add other fields for game entries here if they exist in your games/*.md files
      }),
    ),
  }),
});

const homepageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sectionImage: z.string().optional(), // Assuming this is a path to an image and is optional
    // Add other fields for homepage sections here if they exist in your homepage/*.md files
  }),
});

export const collections = {
  homepageSettings: homepageSettingsCollection,
  games: gamesCollection,
  homepage: homepageCollection,
};
