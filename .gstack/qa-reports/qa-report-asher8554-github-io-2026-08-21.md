# Published-site browser QA report

- Date. 2026-08-21 KST.
- Target. https://asher8554.github.io/ui-base/.
- Scope. All 17 published HTML routes, component interactions, desktop and 375px mobile layouts.
- Health score. 90/100.

## Reproduced findings

### ISSUE-001. External placeholder images are broken.

- Severity. Medium.
- Category. Visual, content, console.
- Reproduction. Open `components.html` or `layouts.html` in a browser.
- Expected. Card and layout example images render.
- Actual. The browser requests `via.placeholder.com`; the request closes and broken-image alt text is shown. `components.html` logs one error and `layouts.html` logs three.
- Evidence. `screenshots/issue-001-components-broken-image.png` and `screenshots/issue-001-layouts-broken-images.png`.

### ISSUE-002. The mobile hamburger drawer does not prevent background interaction.

- Severity. Medium.
- Category. UX, functional.
- Reproduction. At 375px wide, open the hamburger menu and press the visible theme-toggle button in the remaining right-side strip.
- Expected. An open navigation drawer prevents actions behind it until it closes.
- Actual. The theme changes while the drawer remains open.
- Evidence. `screenshots/issue-002-drawer-open.png` and `screenshots/issue-002-background-theme-toggle.png`.

### ISSUE-003. Production pages log the Tailwind CDN warning.

- Severity. Low.
- Category. Performance, operations.
- Reproduction. Open any published page and inspect the browser console.
- Actual. Each page warns that `cdn.tailwindcss.com` is not intended for production use.

### ISSUE-004. Symbol-only controls have insufficient accessible names.

- Severity. Low.
- Category. Accessibility.
- Reproduction. Inspect the component gallery accessibility tree.
- Actual. Carousel controls are named `←` and `→`; the sidebar close control is named `×`. The action is not announced descriptively.

## Verified behavior

- Index navigation exposes all 17 published routes.
- All 17 routes opened successfully with expected titles.
- Components verified. Carousel, modal open/close, accordion, tooltip, dropdown, sidebar open/close, tabs, toast, and hamburger drawer open/close.
- Mobile hamburger drawer renders at 375px and its close button is reachable.

## Console health

- `components.html`. One failed placeholder-image request.
- `layouts.html`. Three failed placeholder-image requests.
- Other visited pages. No page errors observed.
- All visited pages. One Tailwind CDN production warning.

## Top priorities

1. Broken external placeholder images.
2. Background interaction while the mobile drawer is open.
3. Non-descriptive icon control names.

No test framework was detected. This QA pass used real-browser interaction only.
