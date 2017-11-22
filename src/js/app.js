import '../css/main.scss';

const dropdownMenu = document.getElementById('dropdownMenu');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  const classList = Array.from(dropdownMenu.classList);
  const classToToggle = 'nav__dropdown--show';

  dropdownMenu.classList = classList.includes(classToToggle) ?
    classList.filter(currentClass => currentClass !== classToToggle).join(' ') :
    classList.concat([classToToggle]).join(' ')
})
