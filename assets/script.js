// hamburger
const hamburger = document.querySelector('.hamburger');
const navbarMobile = document.querySelector('.navbar-mobile');

const hamburgerCancel = document.querySelector('.hamburger-cancel');

// minicart
const cart = document.getElementById('cart');
const minicart = document.querySelector('.minicart');

hamburger.addEventListener('click', function () {
    navbarMobile.classList.toggle('is-active');
});

cart.addEventListener('click', function () {
    minicart.classList.toggle('is-active');
});

hamburgerCancel.addEventListener('click', function () {
    navbarMobile.classList.remove('is-active');
    minicart.classList.remove('is-active');
});