function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const monthDaysList = document.querySelector("#days"); //pegando a ul do html

  for (let index = 0; index < dezDaysList.length; index++) {
    const daysOfMonth = dezDaysList[index];
    const dayMonthListItem = document.createElement("li"); //criando as li

    //atribuindo classes
    dayMonthListItem.className = "day";
    if (daysOfMonth == 25) {
      dayMonthListItem.className = "day friday holiday";
    }
    if (daysOfMonth == 24 || daysOfMonth == 31) {
      dayMonthListItem.className = "day holiday";
    }
    if (daysOfMonth == 4 || daysOfMonth == 11 || daysOfMonth == 18) {
      dayMonthListItem.className = "day friday";
    }

    dayMonthListItem.innerHTML = daysOfMonth; // passando o valor de daysOfMonth para a li

    monthDaysList.appendChild(dayMonthListItem);
  }
}
createDaysOfMonth();

const feriados = "Feriados";
function holidays(string) {
  var feriados = document.createElement("button");
  feriados.innerText = string;
  feriados.id = "btn-holiday";

  const divButton = document.querySelector(".buttons-container");
  divButton.appendChild(feriados);
}
holidays(feriados);

function clickFeriados() {
  let btn = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll(".holiday");
  let selected = false;

  btn.addEventListener("click", function () {
    for (let i = 0; i < holidays.length; i++) {
      let color = selected ? "rgb(238,238,238)" : "lightblue"; //Operador ternario, faz o mesmo papel de if else
      holidays[i].style.backgroundColor = color;
    }
    selected = ~selected; //selected muda de false pra true e de true pra false
  });
}
clickFeriados();
