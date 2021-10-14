const n = 10;

criaTriangulo(n);
function criaTriangulo(num) {
  var linhaAsteriscos = "*";

  for (let i = 1; i <= num; i++) {
    console.log(linhaAsteriscos);
    linhaAsteriscos += "*";
  }
}
