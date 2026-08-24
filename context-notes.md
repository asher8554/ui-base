# Context Notes

## 2026-08-25 CSO 감사 및 조치

- `/cso` 일상 모드 감사 실행. CRITICAL 0, HIGH 1, MEDIUM 2. 보고서: `.gstack/security-reports/2026-08-25-cso-daily.json` (gitignore로 커밋 안 됨).
- 핵심 결론: 정적 사이트라 공격면 좁음. 리스크는 전부 서드파티 CDN 스크립트 신뢰에서 발생.
- 조치(사용자 승인): Alpine 3.16.2 → `assets/vendor/alpinejs-3.16.2.min.js` 로컬 벤더링(components.html). Tailwind → `cdn.tailwindcss.com/3.4.16` 버전 고정(18개 페이지, node 스크립트로 UTF-8 안전 치환). `.gitignore`에 `.gstack/security-reports/` 추가.
- 잔존 위험(수용): Tailwind Play CDN은 SRI 불가(동적 컴파일러). Pretendard/Google Fonts @import는 CSS라 코드 실행 불가, 완화 대상 아님.
- 검증: verify.js 14/15 통과. FAIL 1건은 스크립트 임계값 오타(glass>=17 → index가 5카드 허브+styles.html 구조로 바뀌어 유리 요소 11개). 제품 결함 아님. 드로어/캐러셀/콘솔 클린 전부 통과 = 벤더링 Alpine 정상.
- 교훈 재확인: PowerShell Set-Content는 UTF-8 파괴 → 대량 치환은 node fs 스크립트 사용.

## 2026-08-24 styles.html 추가 (디자인 스타일 갤러리)

- 사용자 제시 스크린샷과 동일하게 `styles.html` 신설: 다크 네이비 배경 + 그라디언트 원 도트 + 제목/설명/`자세히 보기 →` 카드 13장, 스크린샷과 같은 순서(glassmorphism → minimalism).
- index.html에서 13개 스타일 카드와 미커밋이던 tile-preview CSS를 제거하고, 카테고리 카드 5번째 `디자인 스타일 갤러리` → styles.html로 연결. index는 5카드 허브로 정리됨.
- styles.html은 자체 light-mode 오버라이드(.style-card 흰 카드 등)를 가지며 theme.css/theme.js 토글과 호환. 이전 타일 미커밋 작업은 이 구조로 대체된 것(삭제 결정은 사용자 요청 기준).
- 검증: `verify-styles.js` 19항목 전부 통과(13카드/링크 200/라이트모드/모바일 1열/인덱스 연결 내비게이션). 스크린샷: `uibase-verify\shots3\`.
- 커밋/푸시 전 상태. styles.html은 신규 untracked 파일.
- 2026-08-24 푸시 완료: `3cfec7b 전 하위페이지 QA 결함 수정`, `06e892c 디자인 스타일 갤러리 styles.html 추가 후 index에서 연결` → origin/main. 라이브 확인: styles.html 200, index styles 링크 있음, tile 잔여 없음, maximalism gold 수정 반영. 단일 브랜치·단일 워크트리라 별도 머지/prune 대상 없음.

## 2026-08-24 전 하위페이지 재검증 및 수정

- Tailwind 기본 팔레트에 `gold`가 없다. maximalism.html의 `text-gold`/`from-gold`는 전부 무시되어 어두운 카드 위 검은 글자가 됐다. 페이지 `<style>`에 `.text-gold`(#e7c66b)와 `.gold-divider`를 직접 정의해 해결. 같은 실수 패턴은 grep으로 `text-<색상명>` 전수 확인하면 잡힌다.
- glassmorphism.html 장식 blob은 DOM 뒤쪽 + `position:fixed`라 콘텐츠 위에 깔린다. `pointer-events:none`이 없으면 하단 좌측 버튼/네비 클릭을 가로챈다. `animate-blob`도 Tailwind 기본 유틸리티가 아니어서 keyframes를 직접 정의했다.
- layouts.html: (1) 우하단 뒤로가기 버튼이 theme-toggle(z-9999, right 1rem bottom 1rem)과 겹쳐 좌하단으로 이동. (2) Navbar 설명 배너가 `fixed z-50` + 네비가 `fixed mt-14`라 모바일에서 배너 줄바꿈 시 네비를 덮었다 → 배너 static, 네비 `sticky top-0`, 래퍼 `pt-40`→`pt-6`. (3) Features/About/Testimonials/Pricing/Footer가 주석 플레이스홀더만 있고 1개 항목뿐이었다 → 각각 3/3/3/3/4열로 완성. (4) 문의 폼 label `for` 연결 + `onsubmit="return false"`로 새로고침 방지.
- components.html: 검색 제안 항목에 클릭 핸들러가 없어 선택이 안 됐다 → `suggestOpen` 상태 추가, `@click`으로 값 채우고 닫기, `@input`으로 재오픈. 파일업로드는 취소 시 빈 FileList가 truthy라 "0개의 파일이 선택됨"이 표시됐다 → `files.length ? files : null`.
- resources.html: `target="_blank"` 8곳 모두 `rel="noopener noreferrer"` 누락 → 추가.
- retrofuturism.html: `.grid-bg` fixed 레이어에 `pointer-events-none` 추가.
- 검증: `uibase-verify\verify-fixes.js` (playwright-core + msedge, 로컬 4173). 39항목 중 38 PASS, 1 FAIL은 스크립트 기대값 오타(링크 9→실제 8, missing=0). 17개 라우트 콘솔 에러 0. 스크린샷: `uibase-verify\shots2\`.
- 2026-08-24 기준 수정분 6파일 + 기존 index.html 타일 작업 모두 커밋/푸시 전. push하면 GitHub Pages에 반영된다.

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
