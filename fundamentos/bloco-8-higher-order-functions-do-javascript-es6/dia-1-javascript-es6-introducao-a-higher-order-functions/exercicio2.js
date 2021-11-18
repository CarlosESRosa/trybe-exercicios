function resultadoSort(num, callback) {
  const randomNum = Math.floor(Math.random() * 5);
  console.log(randomNum);
  console.log(num);
  return callback(num, randomNum);
}

function checaNum(num1, num2) {
  if (num1 === num2) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(resultadoSort(2, checaNum));
