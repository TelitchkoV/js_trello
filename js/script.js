const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");

let nameCounter = 1;

btnCreateList.addEventListener("click", function () {
    let list = document.createElement("div");
    let listName = document.getElementById("list-name").value;

    // Проверка номера списка
    if (listName == "") listName = "Новый список " + nameCounter++;

    // Добавить стиль
    list.classList = "list";

    let newH2 = document.createElement("h2");
    newH2.textContent = listName;
    list.append(newH2);


    desk.append(list);
});