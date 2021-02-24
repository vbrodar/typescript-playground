"use strict";
//  const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple construct
// } = {
//   name: "Vedran",
//   age: 27,
//   hobbies: ["Sports", "Reading"],
//   role: [2, "author"], //Tuple - only has 2 elements, it uses union type
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
const person = {
    name: "Vedran",
    age: 27,
    hobbies: ["Sports", "Reading"],
    role: Role.ADMIN,
};
// person.role.push("admin"); //Push is allowed on tuples, can lead to errors
// person.role[1] = "brdo";
let favoriteActivities; // Array of strings
favoriteActivities: ["Sports"];
console.log(person);
for (const hobby of person.hobbies) {
    //can print each element in hobbies and use .toUpperCase because of each string in array
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log("Person is admin!");
}
