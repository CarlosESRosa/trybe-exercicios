const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const newArray = arrays.reduce((result, array) => {
  result.push(...array);
  return result;
});

console.log(newArray);
