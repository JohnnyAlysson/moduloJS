document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
  }

  darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
  });

  const projectButtons = document.querySelectorAll('.project-button');
  projectButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseleave', () => {
          button.style.transform = 'scale(1)';
      });
  });
});