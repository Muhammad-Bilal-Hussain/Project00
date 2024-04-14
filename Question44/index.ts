function makeSandwich(...item:string[]){
    console.log("Maikng a sandwich with the follwing items \n")
    item.forEach(name => console.log(name));
    console.log("\n Now YOUR Sandwich is Ready")
}
    // call the function with 3 time with different numbers
    makeSandwich("Egg","Beaf Kabab","Tomato")

    makeSandwich("Egg","Beaf Kabab","Tomato","garlic ketchup")
    
    makeSandwich("Egg","Beaf Kabab","Tomato","mayonnies","lettuce","corslow")
