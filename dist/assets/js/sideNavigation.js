const navToggle = document.querySelector(".nav__toggle");
navClose = document.querySelector(".nav__close");
sideNav = document.querySelector(".side__nav");

function navShow() {
  sideNav.classList.add("left-0");
  sideNav.classList.remove("-left-full");
}

function navHidden() {
  sideNav.classList.remove("left-0");
  sideNav.classList.add("-left-full");
}

if (navToggle) {
  navToggle.addEventListener("click", navShow);
}

if (navClose) {
  navClose.addEventListener("click", navHidden);
}
