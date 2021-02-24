"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    //Return type is void
    console.log("Result " + num);
}
printResult(add(5, 12));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues;
combineValues = add;
// combineValues = printResult;    Not Working because output is not number
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
