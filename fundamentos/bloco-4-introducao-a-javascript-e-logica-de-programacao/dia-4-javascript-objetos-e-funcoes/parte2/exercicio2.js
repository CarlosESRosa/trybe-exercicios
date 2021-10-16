var array = [2, 3, 6, 7, 10, 1];

console.log(pickIndiceMaior(array));

function pickIndiceMaior(array) {
  var maior = array[0];
  var pickIndice = 0;
  for (var i = 1; i < array.length; i++) {
    if (maior < array[i]) {
      maior = array[i];
      pickIndice = i;
    }
  }
  return pickIndice;
}
