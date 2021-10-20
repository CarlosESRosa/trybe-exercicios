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
