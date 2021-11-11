function returnFatorial(num) {
  let soma = num;
  for (let i = num - 1; i > 0; i -= 1) {
    soma *= i;
  }
  console.log(soma);
  // return 'fatorial';
}
returnFatorial(4);
