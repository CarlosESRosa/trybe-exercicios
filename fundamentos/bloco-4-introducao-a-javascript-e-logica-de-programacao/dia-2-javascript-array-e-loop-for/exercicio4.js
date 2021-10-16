let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function somaValores(array){
    var somaDosValores = array[0];
    for(var i = 1; i < array.length; i++){
        somaDosValores += array[i];
    }
    return somaDosValores;
}

function mediaAritmetica (soma){
    var media = soma/numbers.length;
    return media;
}

if(mediaAritmetica(somaValores(numbers)) > 20){
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}
