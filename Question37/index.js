function make_shirt(size, printmsg) {
    if (size === void 0) { size = 'medium'; }
    if (printmsg === void 0) { printmsg = "I Love Typescript"; }
    console.log("My Shirt Size Is ".concat(size, " And i Should Want to Print On My shirt ").concat(printmsg));
}
make_shirt();
make_shirt("large", "i love typescript");
