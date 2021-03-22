const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});
