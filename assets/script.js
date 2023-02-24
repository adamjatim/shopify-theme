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


function updateParentObject(radio) {
  var parentObject = document.getElementsByClassName('.product-variant');
  if (radio.value === 'option1') {
    // Code to update the parent object when option 1 is selected
    parentObject.style.backgroundColor = 'red';
  } else if (radio.value === 'option2') {
    // Code to update the parent object when option 2 is selected
    parentObject.style.backgroundColor = 'green';
  } else if (radio.value === 'option3') {
    // Code to update the parent object when option 3 is selected
    parentObject.style.backgroundColor = 'blue';
  }
}

// hold product-page after add to cart
document.getElementById("add-product-form").addEventListener("submit", function(event) {
  // Prevent the default form submission action
  event.preventDefault();
  
  // Get the form data
  var formData = new FormData(event.target);
  
  // Do something with the form data, such as submit it using AJAX
  fetch(event.target.action, {
    method: event.target.method,
    body: formData
  }).then(function(response) {
    console.log("Form submitted successfully!");
  });
});

// // handle plus and minus button in quantity product
// // Get all of the plus and minus buttons
// const plusButtons = document.querySelectorAll('.plus-btn');
// const minusButtons = document.querySelectorAll('.minus-btn');

// // Loop through the plus buttons and add event listeners
// plusButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the quantity input field for this button
//     const input = button.parentElement.querySelector('.product-quantity-value');
    
//     // Increase the quantity by one
//     input.stepUp();
//   });
// });

// // Loop through the minus buttons and add event listeners
// minusButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the quantity input field for this button
//     const input = button.parentElement.querySelector('.product-quantity-value');
    
//     // Decrease the quantity by one
//     input.stepDown();
//   });
// });


// Add event listener for plus button
$('.plus-btn').on('click', function() {
  // Get the input field associated with this plus button
  var inputField = $(this).prev('input[type="number"]');
  
  // Increase the value by one
  inputField.val(parseInt(inputField.val()) + 1);
});

// Add event listener for minus button
$('.minus-btn').on('click', function() {
  // Get the input field associated with this minus button
  var inputField = $(this).next('input[type="number"]');
  
  // Decrease the value by one, but not below 1
  if (parseInt(inputField.val()) > 1) {
    inputField.val(parseInt(inputField.val()) - 1);
  }
});