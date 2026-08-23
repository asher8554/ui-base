# ui-base

UI 컴포넌트와 레이아웃 예제를 GitHub Pages에서 열 수 있도록 정적 HTML로 구성한 저장소입니다.

배포된 GitHub Pages 주소는 `https://asher8554.github.io/ui-base/`입니다.

## Local Preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:4173/index.html`을 엽니다.

## Pages

- `index.html`
- `components.html`
- `layouts.html`
- `resources.html`
- `styles.html`
- `glassmorphism.html`
- `neumorphism.html`
- `skeuomorphism.html`
- `mono.html`
- `flat.html`
- `brutalism.html`
- `kitsch.html`
- `maximalism.html`
- `retrofuturism.html`
- `biomorphic.html`
- `memphis.html`
- `artdeco.html`
- `minimalism.html`

`resources.zip`도 로컬에 포함되어 다운로드 링크가 끊기지 않습니다.

## 작업 기록

### 2026-08-24 디자인 스타일 갤러리 페이지 추가

- 13가지 디자인 스타일 예시를 모아 보여주는 `styles.html`을 추가했다. 다크 배경에 그라디언트 원, 제목, 설명, `자세히 보기 →` 카드 그리드 구성.
- `index.html`의 13개 스타일 카드를 `styles.html` 한 장으로 이관하고, 카테고리 카드 5번째로 `디자인 스타일 갤러리`를 연결했다.
- 같은 세션에서 전 하위페이지 QA로 maximalism 골드 텍스트, glassmorphism blob 클릭 차단, layouts 버튼 겹침·빈 카드, components 검색 제안·파일 업로드, resources rel=noopener를 수정했다.

### 2026-08-23 글래스모피즘 + Pretendard 전환 및 최적화

- `theme.css`에서 Pretendard Variable 폰트를 html 레벨에 적용했다. 스타일 데모 페이지의 고유 폰트(아르데코 등)는 그대로 유지된다.
- `index.html`을 글래스모피즘으로 리디자인했다. 반투명 유리 카드, 배경 블롭, 다크/라이트 모드 대응.
- `theme.css`의 공용 흰 서피스를 반투명 글래스 톤으로 바꿨다. 카드에 backdrop-filter를 걸면 fixed 오버레이가 깨지므로 블러는 body 직속 헤더에만 적용한다.
- QA ISSUE-001을 수정했다. `components.html` 1곳, `layouts.html` 3곳의 깨진 via.placeholder.com 이미지를 로컬 CSS 그라디언트로 교체해 외부 요청이 없어졌다.
- QA ISSUE-002를 수정했다. 햄버거 드로어 뒤에 클릭 차단 백드롭을 추가하고, 테마 토글(z-9999)보다 위로 드로어(z-10001)와 백드롭(z-10000)을 올렸다. 모달·다이얼로그도 z-10000으로 통일했다.
- QA ISSUE-004를 수정했다. 캐러셀 이전/다음 버튼에 aria-label을 추가했다.
- `.playwright-cli/` 임시 산출물을 삭제하고 `.gitignore`를 추가했다.
- Playwright + 시스템 Edge로 15개 항목을 검증해 모두 통과했다.

### 2026-07-05

- `asher8554/ui-base` 원격 저장소를 로컬 `E:\Github\ui-base`에 연결했습니다.
- 원격 저장소 초기 상태는 `README.md`만 있는 최소 상태였습니다.
- 프로젝트 재개 규칙을 보존하려고 `AGENTS.md`를 추가했습니다.
- PHP 기반 경로를 GitHub Pages에서 동작하는 `.html` 링크로 바꿨습니다.
- `index.html`, `components.html`, `layouts.html`, `resources.html`과 디자인 스타일 페이지 13개를 추가했습니다.
- `resources.zip`을 저장소에 포함해 파일 다운로드 버튼이 로컬에서도 동작하게 했습니다.
- `components.html`의 Alpine 표현식 오류를 고쳤습니다. 깨진 ``x-text="`섹션 ${i}"``를 `x-text="'섹션 ' + i"`로 바꿨습니다.
- Alpine Collapse 플러그인이 없는데 쓰이던 `x-collapse` 속성을 제거했습니다.
- 모든 HTML 파일은 `<!DOCTYPE html>`을 첫 줄로 유지하고, 그 다음 줄에 한국어 역할 주석을 넣었습니다.
- 작업 인수인계를 위해 `plan.md`, `checklist.md`, `context-notes.md`를 추가했습니다.
- GitHub Pages를 `main` 브랜치의 루트 경로로 활성화했습니다.
- 배포 주소는 `https://asher8554.github.io/ui-base/`입니다.
- `theme.css`, `theme.js`를 추가해 기본 다크모드를 적용했습니다.
- 테마 전환 버튼을 추가해 필요하면 라이트모드로 바꿀 수 있게 했습니다.

## 검증 기록

- `python -m http.server 4173 --bind 127.0.0.1`로 로컬 서버를 띄워 확인했습니다.
- Playwright는 번들 Chromium이 없어 시스템 Edge로 검증했습니다.
- 17개 HTML 페이지가 모두 HTTP 200으로 열리는 것을 확인했습니다.
- 내부 링크에 남은 `.php` 경로가 없는 것을 확인했습니다.
- 끊긴 로컬 링크가 없는 것을 확인했습니다.
- `components.html`에서 모달, 토스트, 드롭다운, 탭, 사이드바 상호작용을 확인했습니다.
- 데스크톱 index 화면과 모바일 components 화면을 캡처해 주요 레이아웃을 비교했습니다.
- GitHub Pages 주소가 HTTP 200으로 열리고, 페이지 제목이 `AI를 위한 UI 디자인 갤러리 / 파일 다운로드`로 표시되는 것을 확인했습니다.
- 기본 테마가 다크모드로 시작하고, 테마 버튼으로 라이트모드 전환이 되는 것을 확인했습니다.

## 커밋 기록

- `c8a8e1b Add project agent instructions`
- `cc9f3c1 Build UI gallery pages`
