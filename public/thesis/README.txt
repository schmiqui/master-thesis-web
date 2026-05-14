Thesis PDFs and drafts
=====================

Put PDF files in this folder (for example thesis-v0.1.pdf).

Then add a row to the `documents` array in content/site-content.js, for example:

  {
    label: 'Thesis draft v0.1',
    date: '2026-05-14',
    path: 'thesis/thesis-v0.1.pdf',
    note: '',  // optional
  }

The site uses Vite's public/ directory: files here are served from the site root
(respecting base in vite.config.js, e.g. /master-thesis-web/thesis/...).
