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

// Form Custom //
var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    event.target.setCustomValidity("Please include an email with @");
  } else {
    event.target.setCustomValidity("");
  }
});

input = document.getElementById("name");

input.addEventListener('input', function(e) {
    if(input.validity.valueMissing){
        e.target.setCustomValidity("Please tell me your name"); 
    } else {
        e.target.setCustomValidity(""); 
    } 
}, false);
// Form Custom //

//Callout//
$("#link").click(function() {
  $('html, body').animate({
    scrollTop: $("#target").offset().top
  }, 1000);
  $('.callout').hide();
});

//Callout//

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