const headerBurger = document.querySelector('.header-burger');
const headerBottom = document.querySelector('.header-bottom-block');
const menuBottom = document.querySelector('.header-bottom-menu');
const burgerClose = document.querySelector('.burger-close');
const menuItem = document.querySelectorAll('.menu-item');
const body = document.querySelector('body');
const locationBottom = document.querySelector('.location-block.menu-bottom');
const messengersBottom = document.querySelector('.header-messengers.menu-bottom');
const phoneBottom = document.querySelector('.phone-number-block.menu-bottom');
const calculationBottom = document.querySelector('.header-calculation.menu-bottom');


headerBurger.addEventListener('click', () => {
    headerBottom.classList.toggle('active');
    menuBottom.classList.toggle('active');
    burgerClose.classList.toggle('active');
    body.classList.toggle('lock');
    locationBottom.classList.toggle('active');
    messengersBottom.classList.toggle('active');
    phoneBottom.classList.toggle('active');
   calculationBottom.classList.toggle('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('burger');
    }
   
});

burgerClose.addEventListener('click', () => {
    headerBottom.classList.toggle('active');
    menuBottom.classList.toggle('active');
    burgerClose.classList.toggle('active');
    body.classList.toggle('lock');
    locationBottom.classList.toggle('active');
    messengersBottom.classList.toggle('active');
    phoneBottom.classList.toggle('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('burger');
    }
   
});