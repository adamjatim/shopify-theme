// hamburger
const hamburger = document.querySelector('.hamburger');
const navbarMobile = document.querySelector('.navbar-mobile');

const hamburgerCancel = document.querySelector('.hamburger-cancel');

// minicart
const cart = document.getElementById('cart');
const minicart = document.querySelector('.minicart');
const minicartCancel = document.querySelector('.cart-cancel');

hamburger.addEventListener('click', function () {
    navbarMobile.classList.toggle('is-active');
});

hamburgerCancel.addEventListener('click', function () {
    navbarMobile.classList.remove('is-active');
});

cart.addEventListener('click', function () {
    minicart.classList.toggle('is-active');
});

minicartCancel.addEventListener('click', function () {
    minicart.classList.remove('is-active');    
});

var variantLabels = document.querySelectorAll('.product-variant');
for (var i = 0; i < variantLabels.length; i++) {
    variantLabels[i].addEventListener('click', function() {
        // Get the associated radio button and set its checked property to true
        var radioBtn = this.previousElementSibling;
        radioBtn.checked = true;
        variantLabels.classList.toggle('is-active');
    });
}