// Theme management
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.className = `${savedTheme}-mode`;

// Theme toggle handler
themeToggleBtn.addEventListener('click', () => {
    const isLightMode = body.className.includes('light');
    const newTheme = isLightMode ? 'dark' : 'light';
    body.className = `${newTheme}-mode`;
    localStorage.setItem('theme', newTheme);
});

// Update theme toggle button appearance
function updateThemeToggle() {
    const isLightMode = body.className.includes('light');
    themeToggleBtn.innerHTML = isLightMode ? '🌙' : '🌞';
}

// Initial update and listen for changes
updateThemeToggle();
themeToggleBtn.addEventListener('click', updateThemeToggle);