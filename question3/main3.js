//Ans_3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personName = "Eric john";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.replace(/\b\w/g, function (bilal) { return bilal.toUpperCase(); }));
