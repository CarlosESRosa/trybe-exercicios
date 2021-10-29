const idEstados = document.querySelector("#estado");
const idData = document.querySelector("#dataDeInicio");
const idButton = document.querySelector("#myButton");

//idData.value = "2014-02-09";
//console.log(idData.value);

var estados = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

for (var key in estados) {
  const option = document.createElement("option");
  option.value = key;
  option.innerText = estados[key];
  idEstados.appendChild(option);
  // console.log(key + " = " + estados[key]);
}

/*
if(idData.value'dia' < 0 || idData.value.'dia' > 31){
    alert('valor de dia invalido'); 
}
if(idData.value'mes' < 0 || idData.value.'mes' > 12){
    alert('valor de mes invalido');
}
if(idData.value'ano' < 0){
    alert('valor de ano invalido');
}
*/

idButton.addEventListener("click", () => {
  const form = document.querySelector("#myForm");
  form.preventDefault();
});
