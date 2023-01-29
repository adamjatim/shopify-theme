const hamburger = document.querySelector('.hamburger');
const navbarMobile = document.querySelector('.navbar-mobile');

hamburger.addEventListener('click', function () {
    navbarMobile.classList.toggle('is-active');
})