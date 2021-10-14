const salarioBruto = 3000;

function inss (salarioBruto){
    var salarioInss = 0;

    if(salarioBruto <= 1556.94){
        salarioInss = salarioBruto - ((8/100)*salarioBruto)
    }
    else if(salarioBruto <= 2594.92){
        salarioInss = salarioBruto - ((9/100)*salarioBruto)
    }
    else if(salarioBruto <= 5189.82){
        salarioInss = salarioBruto - ((11/100)*salarioBruto)
    }
    else {
        salarioInss = salarioBruto - 570.88;
    }
    return salarioInss;
}

function impostoDeRenda (salarioInss){
    salarioLiquido = salarioInss;

    if(salarioInss <= 1903.98){
        salarioLiquido = salarioLiquido;
    }
    else if(salarioInss <= 2826.65){
        salarioLiquido = salarioLiquido - (((7.5/100)*salarioInss) - 142.80);
    }
    else if(salarioInss <= 3751.05){
        salarioLiquido = salarioLiquido - (((15/100)*salarioInss) - 354.80);
    }
    else if(salarioInss <= 4664.68){
        salarioLiquido = salarioLiquido - (((22.5/100)*salarioInss) - 636.13);
    }
    else {
        salarioLiquido = salarioLiquido - (((27.5/100)*salarioInss) - 869.36);
    }
    return salarioLiquido;
}

console.log('Salário Liquido R$', impostoDeRenda(inss(salarioBruto)));
