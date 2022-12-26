const tariffs = document.querySelectorAll(".tariffs__price");

tariffs.forEach((tariff) => {
  tariff.querySelector(".tariffs__head").addEventListener("click", () => {
    tariff.classList.toggle("open");
    tariffs.forEach((el) => el !== tariff && el.classList.remove("open"));
  });
});
