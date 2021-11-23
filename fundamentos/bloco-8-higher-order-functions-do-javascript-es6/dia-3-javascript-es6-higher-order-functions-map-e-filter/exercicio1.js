const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
let arrayString;
arrayString = books.map((element) => {
  return `${element.name} - ${element.genre} - ${element.author.name}`;
});
// console.log(arrayString);

let arrayObj;
arrayObj = books.map((element) => {
  let obj = {
    author: element.author.name,
    age: element.releaseYear - element.author.birthYear,
  };
  return obj;
});
// console.log(arrayObj);

const arrayObjFilter = books.filter(
  (element) =>
    element.genre === 'Ficção Científica' || element.genre === 'Fantasia'
);
// console.log(arrayObjFilter);

const arrayFilterYear = books.filter(
  (element) => 2021 - element.releaseYear >= 60
);
const arrayFilterYearSort = arrayFilterYear.sort(
  (a, b) => a.releaseYear - b.releaseYear
);
// console.log(arrayFilterYearSort);
// console.log(arrayObjFilter);
const arrayOnlyName = arrayObjFilter.map((element) => element.author.name);
const arrayOnlyNameSort = arrayOnlyName.sort();
console.log(arrayOnlyNameSort);
