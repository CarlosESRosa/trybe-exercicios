"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercise2_1 = __importDefault(require("./exercise2"));
const exercise3_1 = __importDefault(require("./exercise3"));
const monthsNames = Object.values(exercise2_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
const seasonsSouth = {
    [exercise3_1.default.OUTONO]: [exercise2_1.default.MARCH, exercise2_1.default.APRIL, exercise2_1.default.MARCH, exercise2_1.default.JUNE],
    [exercise3_1.default.INVERNO]: [exercise2_1.default.JUNE, exercise2_1.default.JULY, exercise2_1.default.AUGUST, exercise2_1.default.SEPTEMBER],
    [exercise3_1.default.PRIMAVERA]: [exercise2_1.default.SEPTEMBER, exercise2_1.default.OCTOBER, exercise2_1.default.NOVEMBER, exercise2_1.default.DECEMBER],
    [exercise3_1.default.VERAO]: [exercise2_1.default.DECEMBER, exercise2_1.default.JANUARY, exercise2_1.default.FEBRUARY, exercise2_1.default.MARCH],
};
const seasonsNorth = {
    [exercise3_1.default.PRIMAVERA]: seasonsSouth[exercise3_1.default.OUTONO],
    [exercise3_1.default.VERAO]: seasonsSouth[exercise3_1.default.INVERNO],
    [exercise3_1.default.OUTONO]: seasonsSouth[exercise3_1.default.PRIMAVERA],
    [exercise3_1.default.INVERNO]: seasonsSouth[exercise3_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
const month = Object.values(exercise2_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
