"use strict";
let userInput; //Little more restrictive than "any" type
let userName;
userInput = 5;
userInput = "Vedran";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error ocurred", 500);
