const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav--links");

menu.addEventListener("click", (event) => {
  menu.classList.toggle("active");
  nav.classList.toggle("toggle");
});
