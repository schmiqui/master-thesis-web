# Master thesis — project site

A small static site for the master thesis: **intro**, **aim and motivation**, **weekly progress log**, **literature**, **PDF downloads**, and **contact / GitHub**. Built with **Vite** and **vanilla HTML, CSS, and JS** so it stays easy to change and deploy.

## Sections (page order)

| Section | Source |
|--------|--------|
| Intro & title | [`index.html`](index.html) (hero copy); author name and “last updated” in [`content/site-content.js`](content/site-content.js) (`meta`). |
| Aim and motivation | [`index.html`](index.html) prose blocks. |
| Weekly progress | [`content/site-content.js`](content/site-content.js) (`weeklyLog`), rendered by [`scripts/main.js`](scripts/main.js). |
| Literature | [`content/site-content.js`](content/site-content.js) (`literature`); each entry can include HTML for the citation line. |
| PDFs | [`content/site-content.js`](content/site-content.js) (`documents`) + files under [`public/thesis/`](public/thesis/). |
| Contact & GitHub | [`content/site-content.js`](content/site-content.js) (`links`), plus footer links injected by JS. |

## Typography

- **Source Serif 4** — long-form aim / literature text.
- **Source Sans 3** — navigation, UI, progress log.

Loaded from Google Fonts in `index.html`. Theme tokens live in [`styles/main.css`](styles/main.css).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Production build:

```bash
npm run build
```

Output is in `dist/`. [`vite.config.js`](vite.config.js) sets `base: '/master-thesis-web/'` for GitHub Pages-style hosting; change `base` if your repo path differs.

## Editing content

1. **Author, dates, links** — Edit `meta` and `links` in [`content/site-content.js`](content/site-content.js).
2. **Weekly log** — Append or edit objects in `weeklyLog` (`weekLabel`, optional `dateRange`, `title`, `bullets`).
3. **Literature** — Edit the `literature` array (`citation` as HTML string, optional `role`).
4. **PDFs** — Add files under `public/thesis/`, then add rows to `documents` with `path` relative to `public/` (e.g. `thesis/my-draft.pdf`).
5. **Hero / aim text** — Edit [`index.html`](index.html) directly.

## Tech

- Vite 6
- No UI framework
