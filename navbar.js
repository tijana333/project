const hamburger-menu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');


hamburger-menu.addEventListener('click', () => {
  navList.classList.toggle('active'); 
  hamburger-menu.classList.toggle('active'); 
});
