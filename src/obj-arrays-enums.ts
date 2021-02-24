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
enum Role { //Examples of adding values to enum
  ADMIN = "Admin",
  READ_ONLY = 100,
  AUTHOR = "Author",
}
const person = {
  name: "Vedran",
  age: 27,
  hobbies: ["Sports", "Reading"],
  role: Role.ADMIN,
};

// person.role.push("admin"); //Push is allowed on tuples, can lead to errors
// person.role[1] = "brdo";

let favoriteActivities: string[]; // Array of strings
favoriteActivities: ["Sports"];
console.log(person);

for (const hobby of person.hobbies) {
  //can print each element in hobbies and use .toUpperCase because of each string in array
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("Person is admin!");
}
