var guest = ["salman", "kashif", "Shahrukh", "hammad",];
var nocome = guest[1];
console.log(nocome, "he can't come our party");
guest.splice(1, 1, "faraz");
guest.forEach(function (guests) {
    console.log("hi ".concat(guests, ", would you come with me for dinner?"));
});
