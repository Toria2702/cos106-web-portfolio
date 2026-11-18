// ===============================================================
// COS 106: Introduction to Web Technologies - Main Script
// Student: Victoria Okon | Matric: 2025/C/SENG/0801 | Student ID: 301879012
// Handles: Mobile navigation toggle and UI interactions
// ===============================================================

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    // Toggle mobile menu on hamburger button click
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking anywhere outside the navbar
    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("open");
      }
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }
});
