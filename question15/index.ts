let guest =["salman","kashif","Shahrukh","hammad",];
let nocome = guest[1];
console.log(nocome, "he can't come our party");
guest.splice(1,1,"faraz");
guest.forEach(function(guests){
    console.log(`hi ${guests}, would you come with me for dinner?`);
})