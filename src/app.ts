let userInput: unknown; //Little more restrictive than "any" type
let userName: string;

userInput = 5;
userInput = "Vedran";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An Error ocurred", 500);
