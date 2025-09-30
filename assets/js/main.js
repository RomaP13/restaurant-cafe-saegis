// Mobile menu

document.addEventListener("DOMContentLoaded", () => {
  let mobileMenu = document.querySelector(".main-menu");
  let mobileMenuButton = document.querySelector(".main-header__mobile-menu")

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("visually");
    });
  }

  // Opening the second level menu

  let mainMenuItem = document.querySelectorAll(".main-menu__item");
  let subMenu = document.querySelectorAll(".sub-menu");
  console.log(mainMenuItem.length)

  for (let i = 0; i < mainMenuItem.length; i++) {
    if (mainMenuItem[i].children.length > 1) {
      console.log("1")
      mainMenuItem[i].addEventListener("click", () => {
        mainMenuItem[i].classList.toggle("active");
        console.log("2")
        if (mainMenuItem[i].classList.contains("active") == true) {
          console.log("3")
          document.querySelector(".active > .sub-menu").classList.toggle("subMenuVisually");
        }
        else {
          for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.remove("subMenuVisually");
          }
        }
      });
    }
  }

  // Opening the right bar
  let rightBar = document.querySelector(".right-bar");
  let rightBarIconOpen = document.querySelector(".main-header__right-bar-button");
  let rightBarIconClose = document.querySelector(".right-bar__close");

  rightBarIconOpen.addEventListener("click", () => {
    rightBar.classList.add("open-right-bar");
  });

  rightBarIconClose.addEventListener("click", () => {
    rightBar.classList.remove("open-right-bar");
  });

  // Preloader

  let preloader = document.querySelector(".preloader");

  function preloaderHidden() {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = 0;
  };

  setTimeout(preloaderHidden, 3000);
});
