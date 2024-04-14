function Show_megicians(megicians) {
    megicians.forEach(function (megician_name) { return console.log(megician_name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The Great Magician ".concat(name); });
}
var nameList = ["Bilal", "Samad", "farax"];
var modifedList = (make_great(nameList));
//Show_megicians(modifedList)
//Making a copy of orignal array through .slice() function
var copy_magician_array = nameList.slice();
//modified the copy array to include "the great" with thier names
var copy_great_megicians = make_great(copy_magician_array);
// now show both array copy & orignal
// show copy array
console.log("orignal array\n");
Show_megicians(nameList);
//show copy of great wala array
console.log("\ncopy array\n");
Show_megicians(copy_great_megicians);
