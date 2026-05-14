/**
 * Edit this file to update the progress log, literature list, PDF links, and contact URLs.
 * PDF files live in public/thesis/ — use paths relative to public/ (e.g. thesis/my-draft.pdf).
 */

export const meta = {
  /** Shown in the footer; update when you publish changes. */
  lastUpdated: '2026-05-14',
  /** Your name as shown on the hero. */
  authorName: 'Your Name',
}

export const links = {
  /** Full URL to the thesis / code repository. */
  github: 'https://github.com/username/master-thesis-web',
  /** mailto: link */
  email: 'mailto:you@university.example',
  /** Optional */
  orcid: '',
  institution: 'Faculty of …, University of …',
}

/**
 * Changelog-style weekly log: week label, optional date range, short title, bullets.
 */
export const weeklyLog = [
  {
    weekLabel: '2026-W19',
    dateRange: '5–11 May 2026',
    title: 'Project site refresh',
    bullets: [
      'Restructured the thesis hub into a single-page layout: aim, progress, literature, PDFs, contact.',
      'Moved repeatable lists into this file for easier maintenance.',
    ],
  },
  {
    weekLabel: '2025-W08',
    dateRange: '17–23 Feb 2025',
    title: 'First public hub',
    bullets: ['Set up the Vite static site and initial diary entry.'],
  },
]

/**
 * Bibliography-style entries: citation HTML string (links inside HTML are fine), optional role line.
 */
export const literature = [
  {
    citation:
      'Sachs, H. (1967). <cite>Über selbstkomplementäre Graphen</cite>. <em>Publikationen des Instituts für Mathematik</em>, Serie A, Heft 14. (Classic context for cage / Hamiltonicity questions.)',
    role: 'Historical motivation for Hamiltonicity questions on sparse regular graphs.',
  },
  {
    citation:
      'Exoo, G., & Jajcay, R. (2008). <cite>Dynamic cage survey</cite>. <em>The Electronic Journal of Combinatorics</em>, DS16. <a href="https://www.combinatorics.org/ojs/index.php/eljc/article/view/DS16" rel="noopener noreferrer">Dynamic survey</a>',
    role: 'Reference hub for cages and record graphs; useful for (k,g) parameters and known constructions.',
  },
  {
    citation:
      'Author, A., & Author, B. (Year). <cite>Title of a paper you rely on</cite>. <em>Journal</em>, volume(issue), pages. <a href="#">DOI or URL</a>',
    role: 'Replace with your core references (definitions, constructions, or algorithms you extend).',
  },
]

/**
 * PDFs under public/. `path` is relative to public/ (no leading slash).
 * Example when you add a file:
 * { label: 'Thesis draft v0.1', date: '2026-05-01', path: 'thesis/thesis-v0.1.pdf' },
 */
export const documents = []
