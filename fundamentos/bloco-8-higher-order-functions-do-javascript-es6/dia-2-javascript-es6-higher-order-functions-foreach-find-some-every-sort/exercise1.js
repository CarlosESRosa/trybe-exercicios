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
const authorBornIn1947 = books.find(
  (element) => element.author.birthYear === 1947
);
// console.log(authorBornIn1947.author.name);

let menorBook = '';
books.forEach((element) => {
  if (menorBook.length < element.name.length) {
    menorBook = element.name;
  }
});
// console.log(menorBook);

const firstBook26Char = books.find((element) => element.name.length === 26);
// console.log(firstBook26Char.name);

const ordemData = books.sort((a, b) => b.releaseYear - a.releaseYear);
// console.log(ordemData);

function everyoneWasBornOnSecXX(element) {
  return element.author.birthYear >= 1901;
}

// console.log(books.every(everyoneWasBornOnSecXX));

function someBookWasReleaseOnThe80s(element) {
  return element.releaseYear >= 1980 && element.releaseYear <= 1989;
}

// console.log(books.some(someBookWasReleaseOnThe80s));
let birthYearArray = [];
function createArray(element) {
  birthYearArray.push(element.author.birthYear);
}
books.forEach(createArray);

//console.log(birthYearArray);
// link de referencia -> https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
function countDuplicate(birthYearArray) {
  let counts = {};

  for (let i = 0; i < birthYearArray.length; i += 1) {
    if (counts[birthYearArray[i]]) {
      counts[birthYearArray[i]] += 1;
    } else {
      counts[birthYearArray[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + ' counted: ' + counts[prop] + ' times.');
      return false;
    }
  }
  return true;
}
console.log('my return', countDuplicate(birthYearArray));
