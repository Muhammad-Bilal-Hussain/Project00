function Show_megicians(megicians:string[]){
    megicians.forEach(megician_name => console.log(megician_name));
}
function make_great(megician:string[]){
   return megician.map(name => `The Great Magician ${name}`)
}
let nameList =["Bilal","Samad","farax"];
let modifedList =(make_great(nameList));

//Show_megicians(modifedList)

//Making a copy of orignal array through .slice() function
let copy_magician_array = nameList.slice();

//modified the copy array to include "the great" with thier names
let copy_great_megicians = make_great(copy_magician_array);

// now show both array copy & orignal

// show copy array
console.log("orignal array\n")
Show_megicians(nameList);

//show copy of great wala array
console.log("\ncopy array\n")
Show_megicians(copy_great_megicians)