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
