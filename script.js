// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) document.body.classList.add("dark-mode");
});

// Toggle theme
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle-theme");
    if (!button) return;

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save user preference
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Optional: update icon/text
        button.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});

console.log('run')