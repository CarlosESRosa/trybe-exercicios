const n = 6;

console.log(somaValoresArray(n));

function somaValores(num) {
  var soma = 0;

  for (var i = 0; i <= num; i++) {
    soma += i;
  }
  return soma;
}
