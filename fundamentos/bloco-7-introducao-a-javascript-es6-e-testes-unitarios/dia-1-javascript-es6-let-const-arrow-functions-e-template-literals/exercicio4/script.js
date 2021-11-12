let arrayGlobal = ['html', 'css', 'js', 'comunicacao', 'git gitHub'];

function searchX(string) {
  let stringQualquer = 'Tryber x aqui!';
  let cutString = stringQualquer.split('x');
  let newString = `${cutString[0]}${string}${cutString[1]}`;
  return newString;
}
//console.log(searchX('bebeto'));

function concatString(string) {
  let stringConcatenada = `${string} Minhas cinco principais habilidades são: ${arrayGlobal.sort()}`;
  return stringConcatenada;
}
console.log(concatString(searchX('bebeto')));
