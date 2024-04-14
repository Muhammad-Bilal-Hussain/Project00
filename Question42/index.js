function Show_megicians(megicians) {
    megicians.forEach(function (megician_name) { return console.log(megician_name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The Great Magician ".concat(name); });
}
var nameList = ["Bilal", "Samad", "farax"];
var modifedList = (make_great(nameList));
Show_megicians(modifedList);
