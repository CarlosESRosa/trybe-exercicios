const num1 = 10;
const num2 = 600;

console.log(retornaMaior(num1, num2));

function retornaMaior(num1, num2){
    if(num1 > num2 ){
        return num1;
    }
    else {
        return num2;
    }
}