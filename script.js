const button = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
button.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
