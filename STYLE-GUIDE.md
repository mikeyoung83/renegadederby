# Renegade Derby Dames — Style Guide

> Single source of truth for the site's design and content decisions;
> `CLAUDE.md` just points here. This site predates the workflow, so most of
> this documents what's already built.

---

## 1. Brand & voice

**Who is this for?**
- Business: Renegade Derby Dames (RDD) — Simcoe County's first flat-track
  roller derby league, founded April 2011, a skater-run non-profit and full
  WFTDA member since March 2014. Based in Alliston, Ontario.
- Audience: fans looking for game dates and tickets; prospective skaters,
  referees, NSOs and volunteers; local businesses considering sponsorship;
  visiting skaters from other leagues.
- Primary goal of the site: get people to games and get new members to join.

**Personality**
tough, welcoming, community-run, a little irreverent

**Voice dos and don'ts**
- Do: direct, energetic, talk to the reader as "you," use derby terms but explain them for newcomers
- Don't: corporate stiffness, walls of text

**One line of example copy in this voice**
"A league run for the skaters, by the skaters." (existing homepage heading)

---

## 2. Color palette

Built on daisyUI's built-in dark **`business`** theme, with only `secondary`
overridden to the league green. Everything not listed as overridden is the
`business` default.

| Role | Direction | oklch value |
|---|---|---|
| `primary` | muted navy (business default) — used sparingly | `oklch(41.703% 0.099 251.473)` |
| `secondary` | **derby green** (override) — main CTAs, "Join Us!", eyebrow accents | `oklch(75% 0.167 129.6)` (was `#8bc242`) |
| `accent` | orange (business default) — outline buttons, eyebrows, rings | `oklch(67.271% 0.167 35.791)` |
| `neutral` | dark slate (business default) | `oklch(27.441% 0.013 253.041)` |
| `base-100/200/300` | charcoal greys, dark → darker | `oklch(24.353% 0 0)` / `oklch(22.648% 0 0)` / `oklch(20.944% 0 0)` |
| `base-content` | light grey text | `oklch(84.87% 0 0)` |
| `info / success / warning / error` | business defaults | default |

Headings are styled bright white for contrast against the charcoal base.

**Theme block in use** (`src/styles/global.css`)

```css
@plugin "daisyui" {
    themes: business --default;
}

@plugin "daisyui/theme" {
    name: "business";
    default: true;
    --color-secondary: oklch(75% 0.167 129.6);
}
```

**Extra named tokens** (`@theme` in `global.css`, beyond daisyUI's set):

| Token | Value | Use |
|---|---|---|
| `bright` | `oklch(100% 0 0)` | headings / high-emphasis text (`text-bright`), white sponsor-logo tiles |
| `facebook` / `instagram` / `twitter` | brand blues/pink | social icon hover only |

Muted text uses `text-base-content/60–80`; hairlines use
`border-base-content/10–30`. Home vs away game badges are `secondary` vs
`primary`; tentative badges use `warning`. The only fixed color left is the
black gradient scrim over team group photos (`from-black/98`), deliberately
theme-independent.

---

## 3. Typography

- Heading font: **Anton** (Google Fonts, 400) — all-caps feel, condensed,
  `letter-spacing: 2px`. Applied to `h1`/`h2` globally via `--font-heading`.
- Body font: system sans stack (Tailwind default) — deliberately no web font.
- Pairing feel: loud condensed display headings against a plain, readable body.

**Astro Fonts API config** (`astro.config.mjs`)
```js
fonts: [
  {
    provider: fontProviders.google(),
    name: "Anton",
    cssVariable: "--font-heading-family",
    weights: [400],
    styles: ["normal"],
  },
],
```

**Type scale notes**
- Headings: uppercase, oversized on heroes (`text-6xl`/`sm:text-7xl` on the homepage H1).
- Body: `prose` / `prose-invert` from `@tailwindcss/typography` for CMS-rendered content.

---

## 4. Shape & feel

- Corner rounding: subtle (business default — `--radius-box: 0.25rem`), with `rounded-xl`/`rounded-2xl` on photos and embeds.
- Density: spacious; sections centred in `max-w-4xl`–`max-w-7xl` containers.
- Borders: thin hairlines (`border-neutral/20`-style).
- Shadows: mostly flat (`--depth: 0`).
- Overall reference: dark, sporty, a bit gritty — a scrappy local sports league, not a corporate club.

---

## 5. Imagery direction

- Style: real team and action photography.
- Source: league-provided photos (player headshots, team group shots, sponsor logos via Pages CMS).
- Do: real game/practice shots, consistent player headshot framing
- Don't: stock photos. **The homepage hero carousel currently uses Unsplash/Wikimedia placeholders, and About has a placeholder testimonial with a stock avatar — both should be replaced with real RDD photos.**
- Aspect ratios: player/official headshots consistent per roster; team group shots wide; sponsor logos on white tiles.

---

## 6. Site map

| Page | Purpose | Key sections |
|---|---|---|
| Home (`/`) | get people to the next game / to join | upcoming-game pill, hero + carousel, about blurb, CMS-driven feature sections |
| About Us (`/about`) | league history and credibility | story, testimonial, YouTube embed |
| Games (`/games`) | game schedule | last completed + upcoming games grouped by year (rebuilt nightly) |
| League Calendar (`/league-calendar`) | practices and events | Google Calendar embed, visiting-skater info |
| Bombshell Battalion (`/teams/bombshells`) | "B" travel team roster | group photo, players, coaches, socials |
| Striking Vikings (`/teams/vikings`) | "A" travel / WFTDA charter team roster | group photo, players, coaches, socials |
| Officials (`/teams/officials`) | recognise refs and NSOs | officials grid |
| Sponsors (`/sponsors`) | thank sponsors, recruit new ones | sponsor logos, sponsorship package PDF |
| Join Us (`/join-us`) | recruit members | apply-now link, accordion per role |
| Membership Application (`/join-us/membership-application`) | sign up | dues list, insurance callout, member-update link, embedded Google Form |
| Roller Derby Insurance (`/join-us/roller-derby-insurance`) | explain required RDC insurance | who needs it, coverage, 3-step signup, price cards, apply CTA |
| Contact Us (`/contact-us`) | route enquiries to the right volunteer | topic dropdown (13 topics → 12 inboxes), name/email/message form, address, socials. Thank-you page at `/contact-us/thanks/` |

---

## 7. Inspiration folder (optional)

**Using it?** Yes — `inspiration/` exists (gitignored).

**If yes, naming convention:** `inspiration/<page-name>-1.jpg`, `inspiration/<page-name>-2.jpg`, etc. — matching the page names in the site map above.

---

## 8. CMS

**Needed?** Yes — Pages CMS, already live (`.pages.yml`). Edits commit straight to `master`.

| Section | What's editable | Content type |
|---|---|---|
| Homepage settings | hero heading/tagline/CTAs, about eyebrow/heading/CTA/body | file |
| Homepage sections | title, image, rich-text body | collection |
| Games | date, home/away, host, pricing, tentative flag, list of matchups | collection |
| Players | name, jersey number, photo (subfolder per team) | collection |
| Coaches | name, photo (subfolder per team) | collection |
| Officials | name, photo | collection |
| Sponsors | name, URL, logo, description | collection |

Teams themselves (name, logo, group photo, socials) are in `src/content/teams/` but **not** CMS-editable.

---

## 9. Components & patterns

- **Navbar**: sticky, solid `base-100`; oversized logo that shrinks on scroll (desktop); dropdowns for Schedules, Teams & Support (incl. Sponsors), and Join Us! (Information, Membership Application, Insurance); mobile uses a daisyUI drawer. The "Join Us!" dropdown label is bold `text-secondary`. Contact Us sits where Sponsors used to be. Active link highlighting is exact-match. Facebook/Instagram icons inline.
- **Page texture**: every interior page except the homepage and the two team roster pages (where the group photo fills the top) has a subtle comic-book corner behind the content, top right: faint green sunburst rays (`secondary`, 7%) over white halftone dots (`bright`, 5%), radially faded. It lives in `src/components/PageTexture.astro` and is rendered by `BaseLayout`; opt out with `texture={false}`. The dots are `public/textures/halftone.svg`, a generated file.
- **Hero**: split — text + angled SVG edge on the left, auto-rotating image carousel on the right.
- **Cards**: roster/official grids of photo + name (+ number).
- **CTA buttons**: solid `btn-secondary` for primary actions; `btn-accent btn-outline` for secondary.
- **Footer**: centred nav (same items as navbar), copyright, arena address link (49 Nelson St. West, Alliston).
- **Forms**: Netlify Forms for the contact form (daisyUI `fieldset`/`input`/`select`/`textarea` with `validator` hints, labels above fields). The membership application stays the league's embedded Google Form.

---

## 10. Accessibility & performance notes
No exceptions to the global baseline.
