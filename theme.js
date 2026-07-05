// 기본 다크모드와 라이트모드 전환 버튼을 관리한다.
(function () {
    var storageKey = "ui-base-theme";
    var root = document.documentElement;

    function applyTheme(theme) {
        var isLight = theme === "light";
        root.classList.toggle("light-mode", isLight);
        root.classList.toggle("dark-mode", !isLight);
        root.dataset.theme = isLight ? "light" : "dark";
    }

    function savedTheme() {
        try {
            return localStorage.getItem(storageKey);
        } catch (_) {
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(storageKey, theme);
        } catch (_) {
            // 저장소 접근이 막힌 환경에서는 현재 화면에만 적용한다.
        }
    }

    applyTheme(savedTheme() === "light" ? "light" : "dark");

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";
        button.setAttribute("aria-label", "테마 전환");

        function renderButton() {
            var isLight = root.classList.contains("light-mode");
            button.textContent = isLight ? "☾" : "☀";
            button.title = isLight ? "다크모드" : "라이트모드";
        }

        button.addEventListener("click", function () {
            var next = root.classList.contains("light-mode") ? "dark" : "light";
            applyTheme(next);
            saveTheme(next);
            renderButton();
        });

        renderButton();
        document.body.appendChild(button);
    });
})();
