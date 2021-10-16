var array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

console.log(pickMaiorName(array));

function pickMaiorName(array) {
  var maior = array[0].length;
  var pickIndice = 0;
  for (var i = 1; i < array.length; i++) {
    if (maior < array[i].length) {
      maior = array[i].length;
      pickIndice = i;
    }
  }
  return array[pickIndice];
}
