Thesis PDFs and drafts
=====================

Put PDF files in this folder (for example thesis-v0.1.pdf).

Then add a link in the root `index.html` under the Documents section, for example:

  <ul class="documents-list">
    <li class="document-item">
      <a class="document-link" href="thesis/thesis-v0.1.pdf" target="_blank" rel="noopener noreferrer">
        <span class="document-label">Thesis draft v0.1</span>
        <span class="document-meta">2026-05-14</span>
      </a>
    </li>
  </ul>

The site uses Vite's public/ directory: files here are copied into `dist/` at the site root
(respecting base in vite.config.js, e.g. /master-thesis-web/thesis/...).
