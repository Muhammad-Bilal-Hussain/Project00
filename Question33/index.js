var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var one_number = number_1[_i];
    var oridinalNum = void 0;
    if (one_number === 1) {
        oridinalNum = "st";
    }
    else if (one_number === 2) {
        oridinalNum = "nd";
    }
    else if (one_number === 3) {
        oridinalNum = "rd";
    }
    else {
        oridinalNum = "th";
    }
    console.log("".concat(one_number).concat(oridinalNum, " this is oridinal number"));
}
