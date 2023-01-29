const hamburger = document.querySelector('.hamburger');
const navbarMobile = document.querySelector('.navbar-mobile');

hamburger.addEventListener('click', function () {
    navbarMobile.classList.toggle('is-active');
});

const hamburgerCancel = document.querySelector('.hamburger-cancel');
const activeNavbarMobile = document.querySelector('.navbar-mobile.is-active')

hamburgerCancel.addEventListener('click', function () {
    activeNavbarMobile.classList.remove('is-active');
});