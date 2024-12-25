const mainMenu = document.querySelector('.header-right');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItem = document.querySelector('.menuItem');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}