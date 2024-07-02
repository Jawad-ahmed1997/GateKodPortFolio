import getSiblings from "./getSiblings";
import animateElement from "./animateElement";
import delay from "./delay";

export const appData = {
  lightLogo: "/img/logo-light.png",
  darkLogo: "/img/logo-dark.png",
};

const initFullNavbarMenu = (setIsOpen) => {
  function noScroll() {
    window.scrollTo(0, 0);
  }
  var open = false,
    navDark = document.querySelector(".topnav.dark"),
    menuIcon = document.querySelector(".topnav .menu-icon");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      setIsOpen(open);
      document.querySelector(".hamenu").classList.toggle("open");
      if (open) {
        animateElement(document.querySelector(".hamenu"), "0px");
        document
          .querySelector(".topnav .menu-icon .text ")
          .classList.add("open");
        if (navDark) {
          navDark.classList.add("navlit");
        }
        window.addEventListener("scroll", noScroll);
      } else {
        delay(300, animateElement(document.querySelector(".hamenu"), "-100%"));
        document
          .querySelector(".topnav .menu-icon .text")
          .classList.remove("open");
        if (navDark) {
          navDark.classList.remove("navlit");
        }
        window.removeEventListener("scroll", noScroll);
      }
    });

    document.querySelectorAll(".main-menu a").forEach((item) => {
      item.addEventListener("click", () => {
        open = false;
        setIsOpen(open);
        delay(300, animateElement(document.querySelector(".hamenu"), "-100%"));
        document
          .querySelector(".topnav .menu-icon .text")
          .classList.remove("open");
        if (navDark) {
          navDark.classList.remove("navlit");
        }
        window.removeEventListener("scroll", noScroll);
      });
    });
  }

  document
    .querySelectorAll(".hamenu .menu-links .main-menu > li")
    .forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.opacity = "1";
        getSiblings(this).forEach((item) => {
          item.style.opacity = ".5";
        });
      });
      item.addEventListener("mouseleave", function () {
        document
          .querySelectorAll(".hamenu .menu-links .main-menu > li")
          .forEach((item2) => {
            item2.style.opacity = "1";
          });
      });
    });

  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach((item) => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        getSiblings(this.parentNode.parentNode).forEach((item) => {
          item.childNodes[1]
            ? item.childNodes[1].classList.remove("sub-open")
            : "";
        });
        this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
      });
    });
  }

  if (
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length
  ) {
    document
      .querySelectorAll(".main-menu .sub-menu li .sub-link.back")
      .forEach((item) => {
        item.addEventListener("click", function () {
          document.querySelector(".main-menu").classList.remove("gosub");
          document.querySelector(".main-menu").classList.remove("sub-open");
        });
      });
  }
};

export default initFullNavbarMenu;