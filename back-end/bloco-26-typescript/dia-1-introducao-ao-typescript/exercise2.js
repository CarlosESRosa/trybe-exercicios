var monthsOfYear;
(function (monthsOfYear) {
    monthsOfYear[monthsOfYear["Janeiro"] = 0] = "Janeiro";
    monthsOfYear[monthsOfYear["Fevereiro"] = 1] = "Fevereiro";
    monthsOfYear[monthsOfYear["Mar\u00E7o"] = 2] = "Mar\u00E7o";
    monthsOfYear[monthsOfYear["Abril"] = 3] = "Abril";
    monthsOfYear[monthsOfYear["Maio"] = 4] = "Maio";
    monthsOfYear[monthsOfYear["Junho"] = 5] = "Junho";
    monthsOfYear[monthsOfYear["Julho"] = 6] = "Julho";
    monthsOfYear[monthsOfYear["Agosto"] = 7] = "Agosto";
    monthsOfYear[monthsOfYear["Setembro"] = 8] = "Setembro";
    monthsOfYear[monthsOfYear["Outubro"] = 9] = "Outubro";
    monthsOfYear[monthsOfYear["Novembro"] = 10] = "Novembro";
    monthsOfYear[monthsOfYear["Dezembro"] = 11] = "Dezembro";
})(monthsOfYear || (monthsOfYear = {}));
console.log(monthsOfYear[1]);
