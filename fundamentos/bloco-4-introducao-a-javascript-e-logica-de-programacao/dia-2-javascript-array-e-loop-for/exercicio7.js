let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function encontraMenor(array){
    var menor = array[0];

    for (var i = 0; i < array.length; i++){
        if(menor > array[i]){
            menor = array[i];
        }
    }
    return menor;
}
console.log(encontraMenor(numbers));
