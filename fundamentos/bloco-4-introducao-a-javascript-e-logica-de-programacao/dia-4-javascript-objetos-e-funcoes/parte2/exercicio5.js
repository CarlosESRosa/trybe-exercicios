var array = [2, 3, 2, 5, 8, 2, 3];

console.log(MaisRepete(array));

function MaisRepete(array) {
  var vezesRepete = 0;
  var maisRepete = 0;
  var pickLocation = 0;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      //vezesRepete recebe quantas vezes cada numero se repete
      if (array[i] === array[j]) {
        vezesRepete++;
        // console.log("vezesRepete aqui", vezesRepete);
      }
      //esse if vai pegar o valor que mais se repetir
      if (maisRepete < vezesRepete) {
        maisRepete = vezesRepete;
        pickLocation = i;
      }
    }
    // zera o contador pra usar ele no for[j] novamente
    // console.log("vou zerar o vezesRepete");
    vezesRepete = 0;
  }
  return array[pickLocation];
}
