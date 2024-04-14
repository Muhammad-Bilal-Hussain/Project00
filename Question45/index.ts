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
