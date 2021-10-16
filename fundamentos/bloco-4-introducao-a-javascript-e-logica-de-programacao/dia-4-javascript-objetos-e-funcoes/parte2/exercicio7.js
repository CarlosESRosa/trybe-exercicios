const stringWord = "joaofernando"; // 5
const stringEnding = "fernando"; // 2

console.log(testaStringEnd(stringWord, stringEnding));

function testaStringEnd(stringWord, stringEnding) {
  // corta a string principal, corte do tamanho da stringEnding
  var cutString = stringWord.substring(stringWord.length - stringEnding.length); // 5-2 daria 3 então corta a partir da ultima posicao da string - stringEnding

  if (cutString === stringEnding) {
    return true;
  } else {
    return false;
  }
}
