type Combinable = number | string; //Type alias is replacing union of number and string
type ConversionDescriptor = "as-number" | "as-string"; // Type alias can be used for Literal types too

function combine(
  input1: Combinable, //Using type alias instead of number | string
  input2: Combinable,
  resultConversion: ConversionDescriptor //Literal types especially useful when combining with union types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");

console.log(combinedStringAges);

const combinedNames = combine("Vedran", " Vedrana", "as-string");

console.log(combinedNames);
