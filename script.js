const menuToggle = document.querySelector(".menu-toggle input");
const liToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const navLi = document.querySelector("nav ul li");

liToggle.addEventListener("click", function () {
  navLi.classList.toggle("slide-li");
});
