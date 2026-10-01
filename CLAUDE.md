# Renegade Derby Dames — project memory

> Supplements `~/.claude/CLAUDE.md` (universal brochure-site rules) with
> facts specific to this site. Design/content decisions live in
> `STYLE-GUIDE.md`.

@STYLE-GUIDE.md

## What this site is
Site for Renegade Derby Dames, a skater-run flat-track roller derby league
in Alliston, Ontario (Simcoe County). Audience is fans, prospective members
and sponsors.

## DaisyUI theme name in use
`business` (built-in dark theme), extended in `src/styles/global.css` with a
green `secondary`. See `STYLE-GUIDE.md` §2.

## Pages
Home, About, Games, League Calendar, Teams (`/teams/[team]` for Bombshells and
Vikings), Officials, Sponsors, Join Us. `STYLE-GUIDE.md` §6 is the source of truth.

## Content source
Real league copy, largely maintained by the league through Pages CMS. Some
placeholders remain (homepage carousel images, About testimonial, Join Us
payment/insurance text): never invent replacements for those. Ask instead.

## Special integrations / exceptions
- **Pages CMS** (`.pages.yml`) commits straight to `master`. Pull before
  starting work, and expect CMS commits to land while a branch is open.
- **Nightly rebuild**: `.github/workflows/daily-build.yml` hits a Netlify
  build hook at 00:00 UTC so `/games` drops finished games.
- **No production domain yet**: `site` is `https://renegadederby.netlify.app`.
  Update `astro.config.mjs` and `public/robots.txt` together once one exists.
- `eslint-plugin-jsx-a11y` doesn't declare ESLint 10 support yet. An npm
  `overrides` entry in `package.json` forces it. Remove the override once
  jsx-a11y ships ESLint 10 support.
- Navbar/Footer are site-specific (nav items hardcoded in `Nav.astro`), not
  the starter's prop-driven versions.

## Status
In progress, not launched. Migrated to the new workflow on 2026-10-01.
