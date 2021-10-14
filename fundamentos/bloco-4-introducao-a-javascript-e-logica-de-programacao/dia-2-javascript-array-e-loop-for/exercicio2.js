let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(somaValores(numbers));

function somaValores(array){
    var soma = array[0];
    for(var i = 1; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}