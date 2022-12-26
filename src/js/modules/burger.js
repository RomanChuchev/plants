/*Burger Menu*/
const lockPadding = document.querySelectorAll(".lock-padding");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");

document
  .querySelector(".burger-wrapper")
  .addEventListener("click", function () {
    burger.classList.toggle("open");
    menu.classList.toggle("open");

    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        burger.classList.remove("open");
        menu.classList.remove("open");
        bodyUnLock();
      }
    });

    if (burger.classList.contains("open")) {
      bodyLock();
    } else {
      bodyUnLock();
    }
  });

document.querySelector(".menu__blur").addEventListener("click", function () {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
  if (burger.classList.contains("open")) {
    bodyLock();
  } else {
    bodyUnLock();
  }
});

document.querySelectorAll(".menu__link").forEach((el) => {
  el.addEventListener("click", function () {
    burger.classList.remove("open");
    menu.classList.remove("open");
    if (burger.classList.contains("open")) {
      bodyLock();
    } else {
      bodyUnLock();
    }
  });
});

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector("body").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, 500);
}
