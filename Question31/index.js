"use strict";
let form = ["Admin", "Saoud bhai", "Admin2", "Hassan", "Jawwad"];
form = [];
if (form.length === 0) {
    console.log("We need find Some Users");
}
else {
    if (form.includes("Admin1")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello humen, thank you for logging in again.");
    }
    if (form.includes("Sauod bhai")) {
        console.log("Hello Sauod, would you like to see a status report?");
    }
    else {
        console.log("Hello Human, thank you for logging in again.");
    }
    if (form.includes("Admin2")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello Humen, thank you for logging in again.");
    }
    if (form.includes("Hassan")) {
        console.log("Hello Hassan, would you like to see a status report?");
    }
    else {
        console.log("Hello human, thank you for logging in again.");
    }
    if (form.includes("Jawwad")) {
        console.log("Hello Jawwad, would you like to see a status report?");
    }
    else {
        console.log("Hello Human, thank you for logging in again.");
    }
}
