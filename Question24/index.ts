let apple="mango";
let uppercaseApple="MANGO";
let five=5;
let year= [2023,2024,2025]
//equality
console.log(apple == "mango");
console.log(apple !== "mango","\n");
//lowercase working
console.log("\nMANGO is mango eqal to lowercase");
console.log(uppercaseApple.toLowerCase()== "mango");
//numerical
//equal to
console.log("\n5 is eqal to 5");
console.log(five == 5);
//not equal to
console.log("\n5 is not eqal to 6");
console.log(five == 6);
//less then
console.log("\n5 is less 6");
console.log(five < 6);
//greterthen
console.log("\n5 is greater then to 6");
console.log(five > 6);
// lees then equal to
console.log("\n5 is greater then to 20");
console.log(five <= 20);
//grater then equal to
console.log("\n5 is greater then to 20");
console.log(five >= 20);
// && operator using
console.log("\n 5 is lessthen 6 and 6 is grater then 5");
console.log(5 < 6 && 6 > 5);

console.log("\n 5 is grater 6 and 6 is lessthen then 5");
console.log(5 > 6 && 6 < 5);

//or || opretor using
console.log("\n 5 is grater 6 OR 5 is equal to 5");
console.log(5 > 6 || 5 == 5);

//wether test 1
console.log("in this array '2026' is available?");
console.log(year.includes(2026));
//wether test 2
console.log("in this array '2023' is available?");
console.log(year.includes(2023));