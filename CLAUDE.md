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
Vikings), Officials, Sponsors, Join Us, Membership Application, Roller Derby
Insurance, Contact Us (+ `/contact-us/thanks/`). `STYLE-GUIDE.md`
§6 is the source of truth.

## Pages to build (linked from Join Us, currently 404)
Found by auditing `/join-us` on 2026-10-01. Build one at a time, then update
the links in `src/pages/join-us.astro` (line numbers as of that date).
- [x] **Membership Application**: `/join-us/membership-application`. Built
  2026-10-01. It embeds the league's Google Form, and all Join Us links point to it.
- [x] **Roller Derby Insurance**: `/join-us/roller-derby-insurance`. Built
  2026-10-01. RDC prices were checked against rdcservices.org/membership on that date.
- [x] **Referees**: no page needed. The old site's Referees page is
  word-for-word the Join Us accordion's Referees section, so the link now
  goes to `#referees`. Each accordion section has an anchor (`#new-skaters`,
  `#transfer-skaters`, `#visiting-skaters`, `#referees`,
  `#non-skating-officials`, `#volunteers`), and a script opens it from the URL hash.
- [x] **Contact Us**: `/contact-us`. Built 2026-10-05 as a Netlify form
  with a topic dropdown. It's in the main nav, where Sponsors used to be.

Fixed 2026-10-01: old games and events links → `/games/` and `/league-calendar/`,
Skating 101 → `#new-skaters`, Monster Muffin → homepage (old collection
404'd), WFTDA gender statement → new resources.wftda.org URL. A re-audit
showed `/contact-us` as the only broken link left on Join Us.

Also still on this page: "League Membership" (no email yet, see the TODO
comment). "Media Relations" now links to pr@renegadederbydames.com.
- [ ] The NSO and Volunteers sections say "sign up on our Games page", but
  `/games/` has no sign-up. Find out how volunteers actually sign up and
  point those links there.

## Content source
Real league copy, largely maintained by the league through Pages CMS. Old
copy can be cross-checked against the previous Google Site, which is still up
at renegadederbydames.com. Never invent missing details like emails, prices or
dates. Ask instead.

## Special integrations / exceptions
- **Pages CMS** (`.pages.yml`) commits straight to `master`. Pull before
  starting work, and expect CMS commits to land while a branch is open.
- **Contact form (Netlify Forms)**: Netlify can't route one form to
  different inboxes, so `src/pages/contact-us/index.astro` registers one
  hidden Netlify form per inbox (`contact-general`, `contact-skating101`,
  `contact-skaters`, `contact-bouts`, `contact-refs`, `contact-nsos`,
  `contact-volunteers`, `contact-tickets`, `contact-sponsor`,
  `contact-vendors`, `contact-pr`, `contact-admin`). The topic dropdown sets
  which one the visible form submits as. Each form's email notification is
  configured in the Netlify dashboard, not in code. Adding a topic that needs
  a new inbox means a new form name plus a new dashboard notification.
  `?topic=<key>` preselects a topic. Uses a honeypot (`bot-field`) plus
  Netlify's spam filter.
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
