//define a function to create a car object with optional optionsss.
function creat_Cars(menufacturer, model, ...options){
// initialize a car object menufacturer , and model
let car = {
    menufacturer: menufacturer,
    model: model
};
// add additional value to option object
options.forEach(option => {
    let [key,value] = option.split(":");
    car[key.trim()] = value.trim();

});
return car;

}
let myCar = creat_Cars('Honda Civic','FE4' ,'Color: Red', "Engine: Gasoline","Battery: Lithium-ion (e_HEV)");
console.log(myCar)
// interface CarInformation {manufacturer: string,model: string,[key: string]: any;}

// function make_cars(manufacturer : string , model : string , ...options: [string, any[]]) : CarInformation {
//     const into : CarInformation = {
//         manufacturer,
//         model,
//     };

//     for (const[key , value] of options) {
//         into[key] = value;
//     }
//     return into 
// }

// const information : string = make_cars('Honda Civic','FE4' ,['Color','Black'], ['Engine','Gasoline'],['Battery','Lithium-ion (e:HEV)']);
// console.log(information);