// script for scroll effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "80px";
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// for toggling dark mode
var darkMode = document.querySelectorAll('html, .navbar, .dropdown-content, .switch-text, .overlay-text');

var darkToggle = document.querySelector("label input");
darkToggle.addEventListener("click", myFunction);

function myFunction() {
    for (i = 0; i < darkMode.length; i++) {
        darkMode[i].classList.toggle("dark-mode");
    }
}