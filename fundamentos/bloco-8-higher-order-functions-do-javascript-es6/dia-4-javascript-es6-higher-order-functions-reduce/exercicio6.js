const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
// tive que consultar o course pra conseguir esse
function studentAverage() {
  const nameAndAverage = students.map((element, index) => ({
    name: element,
    average:
      grades[index].reduce((acc, element) => acc + element, 0) /
      grades[index].length,
  }));
  return nameAndAverage;
}
console.log(studentAverage());

/*
const media = grades.map((element) => {
  let aux = 0;
  element.forEach((element) => (aux += element));
  return aux / element.length;
});
// console.log(media);

const createObj = students.reduce((acc, element) => {
  return acc + { nome: element, nota: 10 };
}, {});
console.log('fim', createObj);

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
*/
