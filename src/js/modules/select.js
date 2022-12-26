//Select
let selected = false;
let contactsImg = document.querySelector(".contacts__img");

document.querySelectorAll(".select").forEach((select) => {
  //Выбриаем все выпадающие списки на странице

  let selectCurrent = select.querySelector(".select__current"),
    selectList = select.querySelector(".select__list"),
    selectInput = select.querySelector(".select__input"),
    selectItem = select.querySelectorAll(".select__item");

  //по клику добавляем/удалям класс
  selectCurrent.addEventListener("click", () => {
    selectList.classList.toggle("select__list_show");
    selectCurrent.classList.toggle("select__current_show");
    selected = true;
  });

  //обходим элементы списка
  selectItem.forEach((item) => {
    //обрабатываем событие клик по элементу
    item.addEventListener("click", () => {
      //получаем значение из data-атрибута
      let itemValue = item.getAttribute("data-value");

      //получаем содержание элемента (текст)
      let itemText = item.textContent;

      //присваиваем инпуту ранее полученное значение из data-атрибута
      selectInput.value = itemValue;

      //присваиваем текущее значение (текст)
      selectCurrent.textContent = itemText;

      // Убираем изображение
      if (window.innerWidth < 767) {
        contactsImg.classList.add("hidden");
      } else {
        contactsImg.classList.remove("hidden");
      }

      // Меняем класс, если элемент выбран
      if (selectCurrent.textContent !== "City") {
        selectCurrent.classList.add("select__current_selected");
      }

      //скрываем выпадающий список
      selectListHide();
      openCard(itemValue);
    });
  });

  // функция закрытия выпадающего списка
  let selectListHide = () => {
    selectList.classList.remove("select__list_show");
    selectCurrent.classList.remove("select__current_show");
  };
  //Закрываем выпадающий сисок, если клик был вне области
  document.addEventListener("mouseup", (e) => {
    if (!select.contains(e.target)) selectListHide();
  });
});

// Открытие карточки
function openCard(value) {
  const cards = document.querySelectorAll(".card-select");
  cards.forEach((card) => {
    if (card.getAttribute("data-value") === value) {
      card.classList.add("open");
    } else {
      card.classList.remove("open");
    }
  });
}

window.addEventListener("resize", function () {
  // Убираем изображение
  if (window.innerWidth < 767 && selected) {
    contactsImg.classList.add("hidden");
  } else {
    contactsImg.classList.remove("hidden");
  }
});
