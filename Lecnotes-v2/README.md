# MIT 6.5620 — Foundations of Cryptography

A book-style lecture-notes website for MIT 6.5620 / 6.875 / 18.425, following
the Fall 2026 lecture sequence at [mit6875.github.io](https://mit6875.github.io/).

The current version is an index only. Each lecture is marked “Notes
forthcoming” so complete notes can be added later without replacing placeholder
content.

## Local development

Prerequisites: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

## Project structure

- `app/page.tsx` — course data and page markup
- `app/globals.css` — visual design and responsive styles
- `app/layout.tsx` — page metadata and root layout
- `worker/index.ts` — Cloudflare Worker entry point
- `.openai/hosting.json` — OpenAI Sites deployment metadata

## Adding lecture notes

The lecture sequence is stored in the `modules` array in `app/page.tsx`.
Replace a lecture’s forthcoming state with its note content or link once the
final material is ready.

## GitHub

This directory is ready to commit. Generated dependencies and build output are
excluded by `.gitignore`.
