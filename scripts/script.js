const button = document.querySelector(".btn");
const overLay = document.querySelector(".mobile-overlay");
const mobileMenu = document.querySelector(".mobile-menu");

button.addEventListener('click', () => {
  button.classList.toggle("active");
  overLay.classList.toggle("show");
  mobileMenu.classList.toggle("open");
});

overLay.addEventListener("click", () => {
  button.classList.remove("active");
  overLay.classList.remove("show");
  mobileMenu.classList.remove("open");
})