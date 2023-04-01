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
  });
}


// // hold product-page after add to cart
// document.getElementById("add-product-form").addEventListener("submit", function(event) {
//   // Prevent the default form submission action
//   event.preventDefault();
  
//   // Get the form data
//   var formData = new FormData(event.target);
  
//   // Do something with the form data, such as submit it using AJAX
//   fetch(event.target.action, {
//     method: event.target.method,
//     body: formData
//   }).then(function() {
//     console.log("Form submitted successfully!");
//   });
// });
