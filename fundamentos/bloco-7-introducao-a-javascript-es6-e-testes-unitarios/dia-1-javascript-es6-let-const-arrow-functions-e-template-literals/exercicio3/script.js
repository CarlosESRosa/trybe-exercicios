const myButton = document.querySelector('#myButton');
const myP = document.querySelector('#myP');
let clickCount = 0;
myButton.addEventListener('click', () => {
  clickCount++;
  console.log(clickCount);
  myP.innerText = `Quantidade de clicks: ${clickCount}`;
});
