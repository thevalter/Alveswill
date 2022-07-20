const openMenu = document.querySelector('.sideMenu #open');
const closeMenu = document.querySelector('.sideMenu #close');

openMenu.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
});

function toogleDarkMode(){
  document.body.classList.toggle('dark');
};

function loadTheme() {
  const darkMode = localStorage.getItem('dark');
  if(darkMode){
    toogleDarkMode();
  };
};

loadTheme();

document.querySelector('#change-theme').addEventListener('change', () => {
  toogleDarkMode();

  localStorage.removeItem('dark');

  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark', 1);
  }
});