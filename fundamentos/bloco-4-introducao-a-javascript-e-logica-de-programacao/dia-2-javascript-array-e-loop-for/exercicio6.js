let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function imprimeImpar(array){
    var count = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 != 0){
            count++;
        }
    }
    if(count == 0){
        return "nenhum valor ímpar encontrado";
    }
    return count;
}

console.log(imprimeImpar(numbers));