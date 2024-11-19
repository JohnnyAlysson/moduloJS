
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;


const savedTheme = localStorage.getItem('theme') || 'light';
body.className = `${savedTheme}-mode`;


themeToggleBtn.addEventListener('click', () => {
    const isLightMode = body.className.includes('light');
    const newTheme = isLightMode ? 'dark' : 'light';
    body.className = `${newTheme}-mode`;
    localStorage.setItem('theme', newTheme);
});


function updateThemeToggle() {
    const isLightMode = body.className.includes('light');
    themeToggleBtn.innerHTML = isLightMode ? '🌙' : '🌞';
}


updateThemeToggle();
themeToggleBtn.addEventListener('click', updateThemeToggle);