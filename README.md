# Master Thesis — Research Hub

A simple static website for your master thesis: diary, annotations, citations, glossary, timeline, and links. Suited to **theoretical work** where definitions and structure matter.

## What’s included

| Section | Purpose |
|--------|--------|
| **Diary** | Log what you did each day (writing, reading, meetings). |
| **Annotations** | Quote + your comment on papers or books. |
| **Citations** | Important papers with full ref + short “why it matters”. |
| **Glossary** | Central terms and definitions (very useful for theory). |
| **Research questions** | Your main questions — keeps focus visible. |
| **Timeline** | Milestones and deadlines. |
| **Reading list** | To read / reading / read with status. |
| **Ideas & open questions** | Scratchpad for future directions. |
| **Links & resources** | Git repo, paper versions, presentations. |

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. To build for deployment:

```bash
npm run build
```

Output is in `dist/` (static files; host anywhere).

## How to edit content

- Edit **`index.html`**: change the text inside each `<section>`. Add more diary entries, citations, glossary terms, etc. by copying the existing blocks.
- Optional: move long content into separate HTML fragments or a simple JSON/JS file and load them with a small script if you prefer not to keep everything in one file.

## More ideas that may come in handy (theoretical focus)

1. **Methodology note** — One short paragraph: “I approach X by …” (conceptual analysis, formalisation, comparison of frameworks). Helps you and your examiner.
2. **Literature map** — A small diagram or list: “Paper A extends B; my work sits between B and C.” Clarifies positioning.
3. **Key propositions / theorems** — If you have formal results, a subsection listing “Proposition 1: …”, “Theorem 2: …” with one-line statements. Quick reference for writing and defence.
4. **Supervisor meeting notes** — Section with date + 3–5 bullet points (feedback, decisions, action items). No need for long prose.
5. **Objections & replies** — Anticipated “But what about X?” with your one-paragraph reply. Great for preparing the defence.
6. **Word count / progress** — Simple line: “Current: ~12k words. Target: 15k.” Update when you check.
7. **Export / print view** — Use browser Print (Ctrl/Cmd+P) with “Background graphics” on; the layout is print-friendly. You can add a `@media print` stylesheet later to hide nav and tidy margins.
8. **Version history of the thesis** — In Links, keep dated PDFs (e.g. “v0.1 – 2025-02-15”, “v0.2 – 2025-03-01”) so you always have a snapshot.

## Tech

- **Vite** — dev server and static build.
- **Vanilla HTML/CSS/JS** — no framework; easy to adapt and version-control.
- **Fonts** — Crimson Pro (serif), DM Sans (UI); loaded from Google Fonts.

You can change title, colours, and sections in `index.html` and `styles/main.css` to match your topic.
