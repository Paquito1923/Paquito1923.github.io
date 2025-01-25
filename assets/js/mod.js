const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const modeSun = document.querySelector('.mode-sun');
const modeMoon = document.querySelector('.mode-moon');

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  modeSun.style.display = body.classList.contains('dark-mode') ? 'none' : 'block';
  modeMoon.style.display = body.classList.contains('dark-mode') ? 'block' : 'none';
});