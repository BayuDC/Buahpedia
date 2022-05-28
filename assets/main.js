const btnMenu = document.getElementById('btn-menu');
const header = document.getElementById('header');

btnMenu.addEventListener('click', () => header.classList.toggle('active'));
