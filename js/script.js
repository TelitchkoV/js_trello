const btnCreateList = document.getElementById("btn-create-list");
const btnClean = document.getElementById("btn-clean");
const desk = document.getElementById("desk");

let nameCounter = 1;
let listCounter = 0;

let IsBtnClean = false;



// Добавить карточку
btnCreateList.addEventListener("click", function () {
  // Доступность кнопки Удалить все карточки
  if (!IsBtnClean)
  {
    btnClean.classList.remove("false");
    btnClean.classList.add("true");

    IsBtnClean = true;
  }

  listCounter++;

  let list = document.createElement("div");
  let listName = document.getElementById("list-name").value;

  // Проверка номера списка
  if (listName == "") listName = "Новый список " + nameCounter++;

  // Добавить стиль
  list.classList = "list";

  // Создать название карточки
  let newH2__list = document.createElement("h2");
  newH2__list.classList = "list__name";
  newH2__list.textContent = listName;

  // Создать Иконка редактирования
  let newImg__list = document.createElement("img");
  newImg__list.setAttribute("src", "img/edit-solid.svg");
  newImg__list.setAttribute("alt", "Редактировать");
  newImg__list.classList = "list__name--icon";

  // Название -> Карточка
  list.append(newH2__list);
  // Иконка -> после Название
  newH2__list.after(newImg__list);

  // Карточка -> Доска
  desk.append(list);
});

// Удалить все карточки
btnClean.addEventListener("click", function() {


  // Доступность кнопки
  if (IsBtnClean) {
    btnClean.classList.remove("true");
    btnClean.classList.add("false");
    IsBtnClean = false;
    nameCounter = 1;
    listCounter = 0;

    var toDel = document.getElementsByClassName("list");
    while (toDel.length > 0) toDel[0].remove();
  }
});
