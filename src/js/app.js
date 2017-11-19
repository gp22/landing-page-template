import '../css/main.scss';

const dropdown = document.getElementById('dropdown');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  const classList = Array.from(dropdown.classList);

  if (classList.includes('nav__dropdown--show')) {
    dropdown.classList = classList.filter(className => className !== 'nav__dropdown--show');
  } else {
    dropdown.className = dropdown.className + ' nav__dropdown--show';
  }
})
