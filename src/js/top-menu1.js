document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("ct-top-menu-icon");
  const menu = document.getElementById("ct-top-menu");

  if (menuIcon && menu) {
    menuIcon.addEventListener("click", () => {
      menu.classList.toggle("opacity-0");
      menu.classList.toggle("invisible");
      menu.classList.toggle("-translate-y-[-20px]");
    });
  }
});
