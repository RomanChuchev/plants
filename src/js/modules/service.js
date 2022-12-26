const cardsGardens = document.querySelectorAll(".card__gardens");
const cardsPlanting = document.querySelectorAll(".card__planting");
const cardsLawn = document.querySelectorAll(".card__lawn");

const btns = document.querySelectorAll(".service__btn");
const cards = document.querySelectorAll(".card");

let count = 0;
const buttons = [];

document.querySelectorAll(".service__btn").forEach((el) => {
  el.addEventListener("click", () => {
    if (buttons.includes(el.id)) {
      let index = buttons.indexOf(el.id);
      if (index !== -1) {
        buttons.splice(index, 1);
      }
      el.classList.remove("active");
    } else if (buttons.length < 2) {
      buttons.push(el.id);
      el.classList.add("active");
    }
    if (buttons.length > 0 && buttons.length <= 2) {
      cards.forEach((card) => card.classList.add("blur"));
      console.log(buttons);

      btns.forEach((btn) => {
        if (!buttons.includes(btn.id) && buttons.length === 2) {
          btn.classList.add("blocking");
        } else {
          btn.classList.remove("blocking");
        }
      });

      if (buttons.includes("lawn")) {
        cardsLawn.forEach((card) => card.classList.remove("blur"));
      }
      if (buttons.includes("planting")) {
        cardsPlanting.forEach((card) => card.classList.remove("blur"));
      }
      if (buttons.includes("gargens")) {
        cardsGardens.forEach((card) => card.classList.remove("blur"));
      }
    }
    if (buttons.length === 0) {
      cards.forEach((card) => card.classList.remove("blur"));
      el.classList.remove("active");
    }
  });
});
