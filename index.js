function toggleMenu() {
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.querySelector(".menu");
    var overlay = document.querySelector(".overlay");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
}