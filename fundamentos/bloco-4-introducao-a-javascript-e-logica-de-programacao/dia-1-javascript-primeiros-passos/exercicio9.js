const num1 = 2;
const num2 = 2;
const num3 = 2;

console.log(pickPar(num1, num2, num3));

function pickPar(num1, num2, num3){
    if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
        return true;
    }
    else {
        return false;
    }
}
