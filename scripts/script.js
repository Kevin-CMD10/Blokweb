// JavaScript Document
var deButton = document.querySelector(".home nav:nth-of-type(1) button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  var deHeader = document.querySelector("header");
  deHeader.classList.toggle("toonMenu");
}


// var hamburger = document.querySelector(".bestellingen nav:nth-of-type(1) button");

// hamburger.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   var deHamburger = document.querySelector("header");
//   deHamburger.classList.toggle("toonMenu");
// }
