var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__menu");
var nav = document.querySelector(".main-nav");
toggle.addEventListener("click",function(evt){
    evt.preventDefault();
    menu.classList.toggle("main-nav__menu--closed");
    nav.classList.toggle("main-nav--closed");
});
