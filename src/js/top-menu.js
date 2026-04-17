const topMenu = document.getElementById("ct-top-menu");
const menuIcon = document.getElementById("ct-top-menu-icon");

// Bắt sự kiện click trên toàn bộ trang web
document.addEventListener("click", (e) => {
  //  Khách click vào cái Nút Icon (3 gạch)
  if (menuIcon.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-topmenu-expanded");
  }
  //  Khách click ra ngoài
  else {
    // Điều kiện: Menu ĐANG MỞ và Khách KHÔNG click vào chính cái Menu
    if (
      topMenu.classList.contains("ct-topmenu-expanded") &&
      !topMenu.contains(e.target)
    ) {
      topMenu.classList.add("hidden");
      topMenu.classList.remove("ct-topmenu-expanded");
    }
  }
});
