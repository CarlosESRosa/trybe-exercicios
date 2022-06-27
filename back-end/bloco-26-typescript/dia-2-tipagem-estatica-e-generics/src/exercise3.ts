type slicesValues = 4 | 6 | 8;

interface IPizza {
  flavor: string;
  slices: slicesValues;
}

const calabresa: IPizza = {flavor:'Calabresa', slices: 8};
const marguerita: IPizza = {flavor:'Marguerita', slices: 6};
const nutela: IPizza = {flavor:'Nutela', slices: 4};

console.log(calabresa);
console.log(marguerita);
console.log(nutela);

interface pizzaComum extends IPizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni',
}

interface pizzaVegetariana extends IPizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo',
}

interface pizzaDoce extends IPizza {
  flavor: 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';
  slices: 4;
}

const calabresa2: pizzaComum = {flavor: 'Calabresa', slices: 6};

console.log(calabresa2);
