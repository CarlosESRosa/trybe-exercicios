var seasons;
(function (seasons) {
    seasons[seasons["Primavera"] = 0] = "Primavera";
    seasons[seasons["Verao"] = 1] = "Verao";
    seasons[seasons["Outono"] = 2] = "Outono";
    seasons[seasons["Inverno"] = 3] = "Inverno";
})(seasons || (seasons = {}));
console.log(seasons[1]);
