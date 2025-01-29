const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for stored theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌞";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});
