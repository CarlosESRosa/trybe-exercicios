const num1 = 1000;
const num2 = 50;
const num3 = 31110;
var maior = num1;

if(num1 > num2 && num1 > num3) {
    maior = num1;
}
if(num2 > num1 && num2 > num3) {
    maior = num2;
}
if(num3 > num1 && num3 > num2) {
    maior = num3;
}

return maior;