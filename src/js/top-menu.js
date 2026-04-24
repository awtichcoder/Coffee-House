document.addEventListener("DOMContentLoaded", () => {
  const topMenu = document.getElementById("ct-top-menu");
  const menuIcon = document.getElementById("ct-top-menu-icon");

  // Bắt sự kiện click trên toàn bộ trang web
  document.addEventListener("click", (e) => {
    // 1. Khách click vào cái Nút Icon (3 gạch)
    if (menuIcon.contains(e.target)) {
      topMenu.classList.toggle("opacity-0");
      topMenu.classList.toggle("invisible");
      topMenu.classList.toggle("-translate-y-5");
    }
    // 2. Khách click ra ngoài
    else {
      // Điều kiện: Menu ĐANG MỞ (nghĩa là nó không bị tàng hình)
      // và Khách KHÔNG click vào chính nội dung của cái Menu
      if (
        !topMenu.classList.contains("invisible") &&
        !topMenu.contains(e.target)
      ) {
        // Đóng menu lại: Add lại 3 class ẩn
        topMenu.classList.add("opacity-0", "invisible", "-translate-y-5");
      }
    }
  });
});
