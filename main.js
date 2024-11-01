/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav_menu ul li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(i => i.removeAttribute("id")); // Bỏ `id="active"` khỏi tất cả các mục
            item.setAttribute("id", "active"); // Thêm `id="active"` vào mục được chọn
        });
    });
});