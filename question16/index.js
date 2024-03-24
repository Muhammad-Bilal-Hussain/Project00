var guest = ["samie", "ahsan", "maaz", "hassan"];
var nocome = guest[2];
console.log(nocome, "he can't come our party");
guest.splice(2, 1, "muzammil");
console.log("I found a bigger dinner table, so now more space is available for dinner");
guest.unshift("samad");
guest.push("salman");
var middleName = Math.floor(guest.length / 2);
guest.splice(middleName, 0, "areeb");
console.log("update dinner table for new guests");
guest.forEach(function (newguest) {
    console.log("hi ".concat(newguest, ", all my lovely friends i have to invite for dinner"));
});
