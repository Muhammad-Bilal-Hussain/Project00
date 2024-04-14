function Show_megicians(megicians:string[]){
    megicians.forEach(megician_name => console.log(megician_name));
}
function make_great(megician:string[]){
   return megician.map(name => `The Great Magician ${name}`)
}
let nameList =["Bilal","Samad","farax"];
let modifedList =(make_great(nameList));

Show_megicians(modifedList)

