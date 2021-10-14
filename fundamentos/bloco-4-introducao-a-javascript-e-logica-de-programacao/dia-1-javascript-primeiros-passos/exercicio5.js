const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;
var soma = 0;

console.log(testaTriangulo(angulo1, angulo3, angulo3));

function testaTriangulo (angulo1, angulo2, angulo3){
    if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
        return 'erro';
    }
    soma = angulo1 + angulo2 + angulo3;
    if (soma == 180){
        return true;
    }
    else {
        return false;
    }
}
