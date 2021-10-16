const n = 3;

criaLinha(n);
function criaLinha(num) {
  var linhaAsteriscos = "";

  for (let i = 0; i < num; i++) {
    linhaAsteriscos += "*";
  }
  for (let i = 0; i < num; i++) {
    console.log(linhaAsteriscos);
  }
}
