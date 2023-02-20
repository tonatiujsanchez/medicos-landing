
const menu = document.querySelector('#menu-container')

const btnMenu = document.querySelector('#btn-menu')
const btnClosedMenu = document.querySelector('#btn-closed-menu')


btnMenu.addEventListener('click', ()=> menu.classList.toggle('show-menu') )
btnClosedMenu.addEventListener('click', ()=> menu.classList.remove('show-menu'))
