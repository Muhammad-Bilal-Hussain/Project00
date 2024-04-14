function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Maikng a sandwich with the follwing items \n");
    item.forEach(function (name) { return console.log(name); });
    console.log("\n Now YOUR Sandwich is Ready");
}
// call the function with 3 time with different numbers
makeSandwich("Egg", "Beaf Kabab", "Tomato");
makeSandwich("Egg", "Beaf Kabab", "Tomato", "garlic ketchup");
makeSandwich("Egg", "Beaf Kabab", "Tomato", "mayonnies", "lettuce", "corslow");
