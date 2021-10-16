let arrayVazio = [];

function preencheArray (array){
    for(var i = 1; i <= 25; i++){
        array.push(i);
    }
    return array;
}
console.log(preencheArray(arrayVazio));