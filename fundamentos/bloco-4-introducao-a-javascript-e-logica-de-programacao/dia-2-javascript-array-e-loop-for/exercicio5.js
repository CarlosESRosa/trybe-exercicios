let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function encontraMaior(array){
    var maior = array[0];

    for (var i = 0; i < array.length; i++){
        if(maior < array[i]){
            maior = array[i];
        }
    }
    return maior;
}

console.log(encontraMaior(numbers));
