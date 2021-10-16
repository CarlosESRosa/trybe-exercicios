const n = 5;
var space = Math.floor(n / 2); // 2
var asterisco = n - space * 2; // 1

//console.log(space, asterisco, space); 2 1 2

function makeString(num, simbolo) {
  var resp = "";
  for (i = 0; i < num; i++) {
    resp += simbolo;
  }
  return resp;
}

for (var i = space; i >= 0; i--) {
  a = n - 2 * space;
  console.log(
    makeString(space, " ") + makeString(a, "*") + makeString(space, " ")
  );
  space--;
}

/* Entendendo a matematica
n = 5;
s = n/2;  
a = n - s*2
p = s a s

s 5/2 = 2.5 -> 2
a = 5 - 2*2 -> 1
p = 2 1 2

s = s-1 -> 1
a = 5 - 2*1 -> 3
p = 1 3 1

s = s-1 -> 0
a = 5 - 2*0 -> 5
p = 0 5 0

---------------------------

n = 4;
s = n/2;  
a = n - s*2
p = s a s

s 4/2 = 2 -> 2
a = 4 - 2*2 -> 0
p = 2 0 2

s = s-1 -> 1
a = 4 - 2*1 -> 2
p = 1 2 1

s = s-1 -> 0
a = 4 - 2*0 -> 4
p = 0 4 0
*/
