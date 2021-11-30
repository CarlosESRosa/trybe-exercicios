const array1 = ['um', 'dois', 'três', 'quatro'];

const sum = (acc, number) => acc + `${number} `;
console.log(array1.reduce(sum, ''));
