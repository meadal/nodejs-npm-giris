window.addEventListener("load", function() {
    const switchButton = document.querySelector("#switch-theme");
    const switchButtonLabel = document.querySelector("#switch-theme-label");
    const navbarDOM = document.querySelector("header > .navbar");
    const darkMode = loadFromDarkState();
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = darkMode || colorScheme.matches;

    function switchToDarkMode() {
        switchButtonLabel.textContent = "Light";
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        switchButton.checked = true;
        navbarDOM.classList.remove("navbar-light");
        navbarDOM.classList.add("navbar-dark");
    }

    function switchToLightMode() {
        switchButtonLabel.textContent = "Dark";
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        switchButton.checked = false;
        navbarDOM.classList.remove("navbar-dark");
        navbarDOM.classList.add("navbar-light");
    }

    function saveToDarkState(dark) {
        localStorage.setItem("dark-mode", dark);
    }

    function loadFromDarkState() {
        return localStorage.getItem("dark-mode") === "true" ? true : false;
    }

    if(isDark) switchToDarkMode();
    else switchToLightMode();

    switchButton.addEventListener("change", (e) => {
        const switched = e.target.checked;

        if(switched) switchToDarkMode();
        else switchToLightMode();

        saveToDarkState(switched);
    });
});