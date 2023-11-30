function openNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("hidden");
  menu.classList.add("flex");
}

function closeNav() {
  menu = document.querySelector("#menu");
  menu.classList.remove("flex");
  menu.classList.add("hidden");
}
