document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");

    menuBtn.addEventListener("click", function() {
        toggleMenu(menuBtn, menu, overlay);
    });

    overlay.addEventListener("click", function() {
        hideMenu(menuBtn, menu, overlay);
    });
});

function toggleMenu(menuBtn, menu, overlay) {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
}

function hideMenu(menuBtn, menu, overlay) {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
    overlay.classList.remove("open");
}