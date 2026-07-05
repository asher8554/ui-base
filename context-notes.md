# Context Notes

## 2026-07-05

- User asked to build UI gallery pages in `asher8554/ui-base`.
- Local folder `E:\Github\ui-base` was not a Git repository. It now tracks `https://github.com/asher8554/ui-base.git` on `main`.
- Remote repository initially contained only `README.md`.
- Project uses static implementation by default. No framework needed for this gallery.
- Source index links include 16 page/download targets: `components.php`, `layouts.php`, `resources.php`, `resources.zip`, and 12 style pages.
- Static output uses `.html` pages for GitHub Pages compatibility.
- `resources.zip` was downloaded into the repo because it is small and prevents the file-download card from becoming an external dependency.
- Pages were converted for static hosting by replacing `.php` links with `.html` links.
- HTML files keep `<!DOCTYPE html>` first, with the Korean role comment immediately after it.
- `components.html` had a broken Alpine expression in the source markup, `x-text="\`섹션 ${i}"`. It was changed to `x-text="'섹션 ' + i"`. Unsupported `x-collapse` was removed because the Alpine Collapse plugin is not loaded.
- Browser verification used Playwright with system Edge because bundled Playwright Chromium was missing.
- Verified all 17 local `.html` pages return HTTP 200 and contain no `.php` links.
- Verified component interactions with waits after modal transition: modal, toast, dropdown, tab, and sidebar all work.

## 2026-07-05 GitHub Pages

- GitHub Pages was not enabled at first. `gh api repos/asher8554/ui-base/pages` returned HTTP 404.
- Enabled GitHub Pages with `main` branch and `/` path.
- Published URL: `https://asher8554.github.io/ui-base/`.
- Live verification initially returned 404 while Pages propagated, then returned HTTP 200 with title `Cursor AI를 위한 UI 디자인 갤러리 / 파일 다운로드`.
