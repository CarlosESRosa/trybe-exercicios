/*
far fa-frown fa-3x

far fa-meh fa-3x

far fa-grin-beam fa-3x
*/

const myRange = document.querySelector("#myRange");
let myEmote = document.querySelector("#myEmote");

myRange.addEventListener("mousemove", (event) => {
  let valueTaget = event.target.value;
  if (valueTaget < 34) {
    myEmote.className = "far fa-frown fa-3x";
  } else if (valueTaget < 64) {
    myEmote.className = "far fa-meh fa-3x";
  } else {
    myEmote.className = "far fa-grin-beam fa-3x";
  }

  console.log(valueTaget);
});
