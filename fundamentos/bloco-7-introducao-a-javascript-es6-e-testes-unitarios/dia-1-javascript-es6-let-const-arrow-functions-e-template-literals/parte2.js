/*function returnFatorial(num) {
  let soma = num;
  for (let i = num - 1; i > 0; i -= 1) {
    soma *= i;
  }
  console.log(soma);
  // return 'fatorial';
}
returnFatorial(4);
*/

let longestWord = (string) => {
  let cutString = string.split(' ');
  let maior = cutString[0];
  for (let i = 1; i < cutString.length; i += 1) {
    if (maior.length < cutString.length) {
      maior = cutString[i];
    }
  }
  return maior;
};
console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);
