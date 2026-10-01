# Renegade Derby Dames

Website for Renegade Derby Dames, Simcoe County's flat-track roller derby
league. Astro 6 (static) + Tailwind CSS v4 + daisyUI 5, deployed to Netlify.
Players, coaches, officials, games, sponsors and homepage sections are
editable through Pages CMS (`.pages.yml`).

Design and content decisions live in `STYLE-GUIDE.md`.

## Commands

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm run dev`       | Local dev server                                         |
| `npm run build`     | `astro check` + `eslint .` + production build to `dist/` |
| `npm run lint`      | Accessibility/lint check only                            |
| `npm run typecheck` | `astro check` only                                       |
| `npm run preview`   | Serve the production build locally                       |

A GitHub Action (`.github/workflows/daily-build.yml`) triggers a Netlify
rebuild every night so the games schedule rolls past finished games.
