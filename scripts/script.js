// JavaScript Document
var deButton = document.querySelector("nav:nth-of-type(1) button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  var deHeader = document.querySelector("header");
  deHeader.classList.toggle("toonMenu");
}