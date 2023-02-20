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

var radios = document.getElementsByName('id');
  var selectedValue = null;

  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
      selectedValue = this.value;
      console.log('Selected variant ID: ' + selectedValue);
    });
  }

  var variantRadio = document.querySelectorAll('.product-variant');
  variantRadio.forEach(function(el) {
    el.style.display = '';
  });