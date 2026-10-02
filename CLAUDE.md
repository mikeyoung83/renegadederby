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

## Pages to build (linked from Join Us, currently 404)
Found by auditing `/join-us` on 2026-10-01. Build one at a time, then update
the links in `src/pages/join-us.astro` (line numbers as of that date).
- [ ] **Membership Application**: `/join-us/membership-application`. Linked
  4×: lines 690, 855, 964, plus line 167, which still points at the old
  site's absolute URL (`https://www.renegadederbydames.com/join-us/membership-application`).
- [ ] **Roller Derby Insurance**: `/join-us/roller-derby-insurance`. Linked
  2× (lines 656, 806). Covers buying RDC insurance, $30/yr for officials.
- [ ] **Referees**: `/join-us/referees`. Linked once (line 679), for
  experienced refs transferring to RDD.
- [ ] **Contact Us**: `/contact-us`. Linked once (line 273, "email us" for
  gear advice). Not in the nav yet.

Relink only, no new page needed:
- [ ] `/games/2018-games` (lines 936, 1033: officials/volunteer sign-up) →
  `/games/`.
- [ ] `http://www.renegadederbydames.com/events` (line 763) → `/league-calendar/`.
- [ ] `https://sites.google.com/renegadederbydames.com/main/join-us/new-skaters`
  (line 832, "Skating 101") points at the old Google Site → decide on a target.

Broken or moved external links:
- [ ] `https://monstermuffin.com/collections/roller-derby` (line 319,
  scrimmage shirt): 404, so find the current Monster Muffin URL.
- [ ] `https://wftda.org/wftda-gender-statement` (line 562) redirects. Update
  to `https://resources.wftda.org/membership/diversity-and-inclusion/wftda-statement-about-gender/`.

Also still on this page: "Media Relations" / "League Membership" (no email
yet, see TODO comments), and the placeholder Payment / Insurance text.

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
