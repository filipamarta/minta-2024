import "./style.css";
import { animate } from "motion";

const headerWithoutShow = document.querySelector("header:not(.show)");
if (headerWithoutShow) {
  animate(
    headerWithoutShow,
    {
      y: [-100, 0],
      opacity: [0, 1],
    },
    { duration: 1, delay: 0 }
  );
}

// Constants
const MOBILE_BREAKPOINT = 768;

/* let notMobile = window.matchMedia("(min-width: 768px)"); */

// My DOM Elements
const menuHeader = document.querySelector("header");
const menuNav = document.querySelector("header nav");
const menuNavLogo = document.querySelector("header nav .logo");
const menuLinkElements = document.querySelector("header nav ul");
const menuButton = document.querySelector("button.hamburger");
const menuIconClose = document.querySelector(".menu-close");
const menuIconOpen = document.querySelector(".menu-open");

// Functions
const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

const updateMenuDisplay = () => {
  if (isMobile()) {
    if (!menuNav.contains(menuButton)) {
      menuNav.appendChild(menuButton);
    }
    // Handle menu visibility based on 'show' class
    const isMenuOpen = menuHeader.classList.contains("show");
    menuLinkElements.style.display = isMenuOpen ? "block" : "none";
    menuButton.style.display = "block";
    menuIconOpen.style.display = isMenuOpen ? "none" : "block";
    menuIconClose.style.display = isMenuOpen ? "block" : "none";
  } else {
    menuLinkElements.style.display = "flex";
    menuButton.style.display = "none";
    menuHeader.classList.remove("show"); // Close menu on desktop
  }
};

const toggleMenu = () => {
  const isMenuOpen = menuHeader.classList.toggle("show");
  menuLinkElements.style.display = isMenuOpen ? "block" : "none";
  menuIconOpen.style.display = isMenuOpen ? "none" : "block";
  menuIconClose.style.display = isMenuOpen ? "block" : "none";
};

// Initial Setup
updateMenuDisplay();

// Event Listener
menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", updateMenuDisplay);
