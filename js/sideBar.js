// ===== САЙДБАР =====
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.burger-icon');
const close = document.querySelector('.sidebar__close-icon');
const links = document.querySelectorAll('.sidebar__link');
const buttons = document.querySelectorAll('.sidebar__button');
const socialLinks = document.querySelectorAll('.sidebar__social-link');

function closeSidebar() {
    sideBar.classList.remove("sidebar--open-sidebar");
    sideBar.classList.add("sidebar--close-sidebar");
}

function openSidebar() {
    sideBar.classList.remove("sidebar--close-sidebar");
    sideBar.classList.add("sidebar--open-sidebar");
}

if (menu && sideBar) {
    menu.addEventListener("click", function () {
        openSidebar();
    });
}
if (close && sideBar) {
    close.addEventListener("click", function () {
        closeSidebar();
    });
}
links.forEach(link => {
    link.addEventListener("click", function () {
        closeSidebar();
    });
});
buttons.forEach(button => {
    button.addEventListener("click", function () {
        closeSidebar();
    })
})
socialLinks.forEach(socialLink => {
    socialLink.addEventListener("click", function () {
        closeSidebar();
    })
})
document.addEventListener("click", function (e) {
    if (!sideBar.classList.contains("sidebar--open-sidebar")) return;
    if (!sideBar.contains(e.target) && !menu.contains(e.target)) {
        closeSidebar();
    }
});
