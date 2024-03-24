let guest=["samie","ahsan","maaz","hassan"];
let nocome = guest[2];
console.log(nocome,"he can't come our party");
guest.splice(2,1,"muzammil");
console.log("I found a bigger dinner table, so now more space is available for dinner");
guest.unshift("samad");
guest.push("salman");
let middleName: number=Math.floor(guest.length / 2);
guest.splice(middleName,0,"areeb");
console.log("update dinner table for new guests");
guest.forEach(function(newguest){
    console.log(`hi ${newguest}, my lovely friends i have to invite for dinner`)
});