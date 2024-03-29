const overlayShiyun = document.querySelector('.overlay-shiyun');
const overlayWenling = document.querySelector('.overlay-wenling');
const overlayYujun = document.querySelector('.overlay-yujun');
const overlayJeremias = document.querySelector('.overlay-jeremias');
const popupShiyun = document.querySelector('.popup-shiyun');
const popupWenling = document.querySelector('.popup-wenling');
const popupYujun = document.querySelector('.popup-yujun');
const popupJeremias = document.querySelector('.popup-jeremias');
const cover = document.querySelector('.cover');
const close = document.querySelectorAll('.close');

var activePerson;  //requires bugfixing for this
var activeUrl;
var popupOpen = false;

overlayShiyun.addEventListener('click', () => {
    storeActivePerson(popupShiyun);
    storeActiveUrl('about_us.html#HO_Shi_Yun');
    openPopup();  
});
overlayWenling.addEventListener('click', () => {
    storeActivePerson(popupWenling);
    storeActiveUrl('about_us.html#LYU_Wenling');
    openPopup();
});
overlayYujun.addEventListener('click', () => {
    storeActivePerson(popupYujun);
    storeActiveUrl('about_us.html#HOU_Yujun');
    openPopup();
});
overlayJeremias.addEventListener('click', () => {
    storeActivePerson(popupJeremias);
    storeActiveUrl('about_us.html#Jeremias_LIEW');
    openPopup();
});

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', closePopup);
}

cover.addEventListener('click', closePopup);

function storeActivePerson(person) {
    activePerson = person;
}

function storeActiveUrl(url) {
    activeUrl = url;
}

function openPopup() {
    if (popupOpen == false) {
        popupOpen = true;
        cover.classList.toggle('fade');
        activePerson.classList.toggle('fade');
    }  
}
function closePopup() {
    if (popupOpen == true) {
        popupOpen = false;
        cover.classList.toggle('fade');
        activePerson.classList.toggle('fade');
    }  
}

 function visitPage(){
     window.location=activeUrl;
}

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
var darkMode = document.querySelectorAll('html, body, h1, .hr, .navbar, .dropdown-content, .switch-text, .overlay-text, .popup-shiyun, .popup-wenling, .popup-yujun, .popup-jeremias, p');

var darkToggle = document.querySelector("label input");
darkToggle.addEventListener("click", myFunction);

function myFunction() {
    for (i = 0; i < darkMode.length; i++) {
        darkMode[i].classList.toggle("dark-mode");
    }
}