changeTextP();
function changeTextP() {
  document.getElementsByTagName("p")[0].innerText =
    "Trabalhando como Engenheiro de Software";
}

changeColorBox();
function changeColorBox() {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    "rgb(76,164,109)";
}

changeColorCenterBox();
function changeColorCenterBox() {
  document.getElementsByClassName("center-content")[0].style.backgroundColor =
    "white";
}

changeH1();
function changeH1() {
  document.getElementsByTagName("h1")[0].innerText =
    "Exercício 5.1 - JavaScript";
}

toCapital();
function toCapital() {
  //pega o tamanho do documento
  var length = document.getElementsByTagName("p").length;

  for (var i = 0; i < length; i++) {
    //acessa o p na posicao i
    var x = (document.getElementsByTagName("p")[i].style.textTransform =
      "uppercase");
  }
}
