const custo = 10;
const valorVenda = 20;

console.log(lucroPorMil(custo, valorVenda));

function lucroPorMil(custo, venda){
    if(custo < 0 || venda < 0){
        return 'erro';
    }
    var imposto = ((custo/100)*20);
    var lucro = venda - (custo + imposto);
    return lucro*1000;
}