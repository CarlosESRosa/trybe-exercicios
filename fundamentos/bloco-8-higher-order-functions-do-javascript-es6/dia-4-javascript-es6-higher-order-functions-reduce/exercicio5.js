const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// lógica que aprendi com o professor Atanes, estava tendo dificuldades nesse exercício
function containsA() {
  return names.reduce(
    (accLetraA, nome) =>
      (accLetraA += nome
        .split('')
        .reduce(
          (acc, letra) => (acc += letra === 'a' || letra === 'A' ? 1 : 0),
          0
        )),
    0
  );
}
console.log(containsA());
