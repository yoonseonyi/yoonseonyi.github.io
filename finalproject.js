// Sticky Nav //
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
    navbar.classList.add("sticky")
  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove("sticky");
  }
}
// Sticky Nav //


// Typewriting effect //
var text = "Hi. My name is Alexa :)";
var index = 0;
var count = 1;

var typeWriter = setInterval(function() {
  document.querySelector("h1").textContent += text[index];

  index += 1;

  if (index > text.length -1) {
    clearInterval(typeWriter);
  }

}, 250);
// Typewriting effect //


// Hamburger Menu //
function Hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar"
  }
}
// Hamburger Menu //