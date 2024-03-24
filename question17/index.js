var guest = ["aman", "samad", "affan", "hamza"];
var nocome = guest[0];
console.log(nocome, "not coming some reason");
guest.splice(0, 1, "bilal");
console.log("our dinner table arrange for more friends");
guest.unshift("muzammil");
guest.push("ahsan");
var middle = Math.floor(guest.length / 2);
guest.splice(middle, 0, "shahzaib");
console.log("more friends are update for big dinner table");
guest.forEach(function (guests) {
    console.log("salam ".concat(guests, " i have to invite for dinner"));
});
console.log("unfortunatily! my dinner table not arrive for more my friends");
while (guest.length > 2) {
    var removefriend = guest.pop();
    console.log("sorry my dear ".concat(removefriend, " i can't invite for dinner from me"));
}
;
console.log("You r lucky still for my invitation");
guest.forEach(function (lasttwo) {
    console.log("ap ".concat(lasttwo, " askty ho mere 7 dinner pe"));
});
guest.pop();
guest.pop();
console.log("my friend list is empty now", guest);
