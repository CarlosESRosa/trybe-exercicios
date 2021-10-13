const num = -10;

console.log(testaNum(num));

function testaNum (num){
    if(num == 0) {
        return 0;
    }
    else if(num > 0){
        return 'positive';
    }
    else {
        return 'negative';
    }
}