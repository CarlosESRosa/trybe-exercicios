let arrayVazio = [];

function preencheArray (array){
    for(var i = 1; i <= 25; i++){
        array.push(i/2);
    }
    return array;
}
console.log(preencheArray(arrayVazio));