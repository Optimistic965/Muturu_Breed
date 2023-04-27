$(document).ready(function(){
    $('#team_page #tab_cont').tabs()
})

const hamburger = document.querySelector('.burger_cont')
const navMenu = document.querySelector('.nav__item__cont')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.nav__item').forEach(element => element.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))