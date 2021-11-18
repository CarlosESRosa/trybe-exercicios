function retornaNota(gabarito, respostas, callback) {
  return callback(gabarito, respostas);
}

function checaNota(gabarito, respostas) {
  let counter = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostas[i]) {
      counter += 1;
    } else if (respostas[i] === 'N.A') {
    } else {
      counter -= 0.5;
    }
  }
  return counter;
}
console.log(
  retornaNota(
    ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'],
    ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'],
    checaNota
  )
);
