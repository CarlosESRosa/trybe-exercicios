const n = 5;

criaTrianguloInverso(n);
function criaTrianguloInverso(num) {
  var countSpace = "";
  var asteriscos = "";

  // faz o countSpace valer o valor maximo de spaços
  for (var i = 0; i < n - 1; i++) {
    countSpace += " ";
  }

  //faz o countSpace diminuir de 1 em 1 e o asteriscos aumentar de 1 em 1
  for (let i = countSpace.length; i >= 0; i--) {
    countSpace = countSpace.replace(countSpace[i], "");
    asteriscos += "*";
    console.log(countSpace + asteriscos);
  }
}
