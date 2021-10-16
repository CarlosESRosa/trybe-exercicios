var array = [2, 4, 6, 7, 10, 0, -3];

console.log(pickIndiceMenor(array));

function pickIndiceMenor(array) {
  var menor = array[0];
  var pickIndice = 0;
  for (var i = 1; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
      pickIndice = i;
    }
  }
  return pickIndice;
}
