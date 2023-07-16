const navLinks = document.querySelectorAll(".nav-links li");
const ham = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile-links li");

ham.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  ham.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  if (ham.classList.contains("active-btn")) {
    icon.src = "icon-close-menu.svg";
  } else {
    icon.src = "icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub-menu");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile-sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
