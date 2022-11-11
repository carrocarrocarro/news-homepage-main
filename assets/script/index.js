const navIcon = document.querySelector("#site-header--nav-icon");
const body = document.querySelector("body");

navIcon.addEventListener("click", () => {
    body.classList.toggle("toggle-menu")
});
