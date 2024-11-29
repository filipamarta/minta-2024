import "./style.css";
import { animate, inView } from "motion";

let notMobile = window.matchMedia("(min-width: 768px)");

const menuHeader = document.querySelector("header");
const menuNav = document.querySelector("header nav");
const menuNavLogo = document.querySelector("header nav .logo");
const menuLinkElements = document.querySelector("header nav ul");
const menuButton = document.querySelector("button.hamburger");
const menuIconClose = document.querySelector(".menu-close");
const menuIconOpen = document.querySelector(".menu-open");

animate(
  "header",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 1, delay: 0 }
);

animate("section.content p, section.content img, section.content iframe", {
  opacity: 0,
});

inView("section.content", (info) => {
  animate(
    info.target.querySelectorAll("p, img, iframe"),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});

/* TOGGLE MENU */
const toggleMenu = () => {
  if (menuIconClose.style.display === "none") {
    menuIconOpen.style.display = "none";
    menuIconClose.style.display = "block";
    menuLinkElements.style.display = "block";
    menuHeader.classList.add("show");
  } else {
    menuNavLogo.style.display = "block";
    menuIconOpen.style.display = "block";
    menuIconClose.style.display = "none";
    menuLinkElements.style.display = "none";
    menuHeader.classList.remove("show");
  }
};

if (notMobile.matches) {
  menuButton.remove();
} else {
  menuNav.appendChild(menuButton);
  menuIconClose.style.display = "none";
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menuLinkElements.style.display = "flex";
    menuButton.style.display = "none";
  } else {
    menuButton.style.display = "block";
    menuIconOpen.style.display = "block";
    menuLinkElements.style.display = "none";
    menuIconClose.style.display = "none";
  }
});

menuButton.addEventListener(
  "click",
  () => {
    toggleMenu();
  },
  true
);
