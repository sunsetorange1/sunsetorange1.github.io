document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const currentTheme = localStorage.getItem('theme') || 'light'; // Default to light

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeToggleButton) {
            themeToggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }

    applyTheme(currentTheme); // Apply saved theme on load

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});
