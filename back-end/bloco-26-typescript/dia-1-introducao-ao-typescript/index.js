"use strict";
var _a, _b;
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var exercise2_1 = require("./exercise2");
var exercise3_1 = require("./exercise3");
var monthsNames = Object.values(exercise2_1["default"]);
var choiceMonth = readline_sync_1["default"].keyInSelect(monthsNames, "Escolha um mês do ano");
var seasonsSouth = (_a = {},
    _a[exercise3_1["default"].OUTONO] = [exercise2_1["default"].MARCO, exercise2_1["default"].ABRIL, exercise2_1["default"].MAIO, exercise2_1["default"].JUNHO],
    _a[exercise3_1["default"].INVERNO] = [exercise2_1["default"].JUNHO, exercise2_1["default"].JULHO, exercise2_1["default"].AGOSTO, exercise2_1["default"].SETEMBRO],
    _a[exercise3_1["default"].PRIMAVERA] = [exercise2_1["default"].SETEMBRO, exercise2_1["default"].OUTUBRO, exercise2_1["default"].NOVEMBRO, exercise2_1["default"].DEZEMBRO],
    _a[exercise3_1["default"].VERAO] = [exercise2_1["default"].DEZEMBRO, exercise2_1["default"].JANEIRO, exercise2_1["default"].FEVEREIRO, exercise2_1["default"].MARCO],
    _a);
var seasonsNorth = (_b = {},
    _b[exercise3_1["default"].PRIMAVERA] = seasonsSouth[exercise3_1["default"].OUTONO],
    _b[exercise3_1["default"].VERAO] = seasonsSouth[exercise3_1["default"].INVERNO],
    _b[exercise3_1["default"].OUTONO] = seasonsSouth[exercise3_1["default"].PRIMAVERA],
    _b[exercise3_1["default"].INVERNO] = seasonsSouth[exercise3_1["default"].VERAO],
    _b);
var hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
var choiceHemisphere = readline_sync_1["default"].keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
var month = Object.values(exercise2_1["default"])[choiceMonth];
var hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map(function (entry) {
    var seasons = entry[0];
    var months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
