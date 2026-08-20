# UI Base Plan

## Goal

Build a static GitHub Pages friendly UI gallery in this repository.

## Scope

- Build static gallery pages for component, layout, resource, and visual-style examples.
- Use `.html` routes instead of `.php` so the site works as static hosting.
- Keep the recognizable structure, Korean copy, component examples, layout examples, resource links, and design-style demo pages.
- Keep the implementation dependency-light: plain HTML, CSS, and JavaScript.

## Pages

- `index.html`
- `components.html`
- `layouts.html`
- `resources.html`
- style pages: `glassmorphism.html`, `neumorphism.html`, `skeuomorphism.html`, `mono.html`, `flat.html`, `brutalism.html`, `kitsch.html`, `maximalism.html`, `retrofuturism.html`, `biomorphic.html`, `memphis.html`, `artdeco.html`, `minimalism.html`

## Verification

- Check every local link.
- Run a local static server.
- Smoke test desktop and mobile in a browser.
- Verify key interactions: carousel, modal, accordion, dialog, toast, dropdown, sidebar, tabs, rating, file upload.

## 2026-08-21 Browser QA

- Verify: every published route returns HTTP 200 and is reachable from the index.
- Verify: component interactions work in desktop and mobile viewports.
- Verify: no console errors are caused by the page itself.
- Report: reproducible defects with browser evidence. Do not change product behavior during this QA pass.
