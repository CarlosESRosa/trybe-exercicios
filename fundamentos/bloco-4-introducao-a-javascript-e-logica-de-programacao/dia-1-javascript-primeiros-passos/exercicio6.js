var pecaDeXadrez = 'bispo';

console.log(testaPeca(pecaDeXadrez));

function testaPeca(peca){
    if(peca.toLowerCase() != 'bispo'){
        return 'erro';
    }
    return  'diagonais';
}
