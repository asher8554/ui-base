# Context Notes

## 2026-08-23 글래스모피즘 + Pretendard + 최적화

- `theme.css`의 html 폰트 규칙에 !important가 필요하다. Tailwind CDN이 런타임에 style을 theme.css보다 뒤에 삽입해 같은 선택자 규칙이 역전되기 때문.
- 카드 서피스에 backdrop-filter를 걸면 stacking context + fixed containing block이 생겨 데모 안의 모달·드로어가 카드 기준으로 배치된다. 공용 서피스에는 반투명 배경만 적용하고 블러는 body 직속 헤더에만 건다.
- 테마 토글 버튼이 z-9999라서 드로어 백드롭은 z-[10000], 드로어 본체는 z-[10001]을 쓴다.
- PowerShell `-replace` + `Set-Content`는 UTF-8 파일을 ANSI로 써서 한글이 깨진다. HTML 편집은 Edit 툴만 사용할 것. (components.html 한 번 깨졌다가 git checkout으로 복구함)
- 검증 스크립트: `C:\Users\asher\AppData\Local\Temp\opencode\uibase-verify\verify.js` (playwright-core + msedge channel, 로컬 서버 4173 필요). 15개 항목 전부 통과.
- 2026-08-23 기준 변경분은 커밋/푸시 전이다. 사용자 확인 후 push하면 GitHub Pages에 반영된다.

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
- Live verification initially returned 404 while Pages propagated, then returned HTTP 200 with title `AI를 위한 UI 디자인 갤러리 / 파일 다운로드`.

## 2026-07-05 Theme

- Replaced public-facing tool-specific wording with generic AI wording.
- Added `theme.css` and `theme.js`.
- Theme default is dark. The floating theme button can switch to light mode and stores the choice in `localStorage`.
- Dark-mode readability was audited across all 17 pages. Low-contrast custom styles were corrected in `theme.css` without changing page markup.

## 2026-08-21 Browser QA

- User requested a fresh end-to-end inspection of the published GitHub Pages site after recent toast and hamburger-menu changes.
- QA scope is published routes, component interactions, responsive layout, and browser console health. This pass is report-only until the user requests fixes.
- Verified all 17 published routes and the main component state changes with browser automation. Findings are stored in `.gstack/qa-reports/qa-report-asher8554-github-io-2026-08-21.md`.
