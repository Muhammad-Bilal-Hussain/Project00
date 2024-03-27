let current_user=["samad","danish","Haris","hassan","faraz"];
let new_user=["samad","salman","haris","hammad","kashif"];

//foreach ka function
new_user.forEach(new_one_user =>{
    let our_condition= current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!!`)
    }else{
        console.log(`this ${new_one_user} Name is available`)
    }
})