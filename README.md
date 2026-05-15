# Master thesis — project site

A small static site for the master thesis: **intro**, **aim and motivation**, **weekly progress log**, **literature**, **PDF downloads**, and **contact / GitHub**. Built with **Vite** and **vanilla HTML + CSS only** (no JavaScript).

## Sections (page order)

| Section | Source |
|--------|--------|
| Intro, hero, author | [`index.html`](index.html) |
| Aim and motivation | [`index.html`](index.html) |
| Weekly progress | [`index.html`](index.html) (`ol.progress-timeline`) |
| Literature | [`index.html`](index.html) (`ul.literature-list`) |
| PDFs | [`index.html`](index.html) + files under [`public/thesis/`](public/thesis/) |
| Contact, footer | [`index.html`](index.html) |

See [`content/README.md`](content/README.md) for a short note on where content lives.

## Typography

- **Source Serif 4** — long-form aim / literature text.
- **Source Sans 3** — navigation, UI, progress log.

Loaded from Google Fonts in `index.html`. Theme tokens live in [`styles/main.css`](styles/main.css).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/master-thesis-web/` because of `base`). Production build:

```bash
npm run build
```

Output is in `dist/`. [`vite.config.js`](vite.config.js) sets `base: '/master-thesis-web/'` for GitHub Pages-style hosting; change `base` if your repository name or Pages URL differs.

## Editing content

Edit **[`index.html`](index.html)** only for copy, lists, and links.

1. **Author / footer** — Update the hero line, footer “Last updated” line, and contact rows in one place each.
2. **Weekly log** — Copy or edit an `li.progress-item` block inside `#progress`.
3. **Literature** — Add `li.literature-item` entries with `div.literature-cite` and optional `p.literature-role`.
4. **PDFs** — Replace the empty-state paragraph under `#documents` with a `ul.documents-list` of links, for example:

```html
<ul class="documents-list">
  <li class="document-item">
    <a class="document-link" href="thesis/my-draft.pdf" target="_blank" rel="noopener noreferrer">
      <span class="document-label">Thesis draft v0.1</span>
      <span class="document-meta">2026-05-14</span>
    </a>
  </li>
</ul>
```

Use **`href` paths relative to the deployed site root** (e.g. `thesis/file.pdf`). With the default `base`, Vite copies `public/thesis/file.pdf` into `dist/thesis/file.pdf`, so that `href` resolves correctly on GitHub Pages.

## Tech

- Vite 6 (dev server, build, `public/` copy)
- No UI framework, no client-side JavaScript
