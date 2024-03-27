var current_user = ["samad", "danish", "Haris", "hassan", "faraz"];
var new_user = ["samad", "salman", "haris", "hammad", "kashif"];
//foreach ka function
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!!"));
    }
    else {
        console.log("this ".concat(new_one_user, " Name is available"));
    }
});
