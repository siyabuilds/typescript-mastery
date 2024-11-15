// Basic type inference
// Type inference occurs when we do not specify the types for our variables
let samson = "Samson"; //Gets infered as a string
let userAge = 21; //Get infered as a number
userAge = "samson"; // Throws an error because type "number" is already assigned to `userAge`

// Arrays
const devAges = [21, 22, 45, 8, 12]; //Wow, the youngest dev is 8 years old!
devAges.push("Samson"); // Throws an error because devAges can only have variables of numbers
const someMixedArray = ["Samson", 21, {}, []];
someMixedArray.push(true); // Valid because we added many mixed types when declaring the array
const arrayOfBooleans = [true, false, false, true];
arrayOfBooleans.push("Samson"); // Will throw an error since "Samson" is a string and strings are not allowed in this array

// Objects
const user = {
  name: "Samson",
  age: 25,
};
user.location = "Benoni"; // Will throw an error because an interface was "automatically created" and now the user object is only limited to age and name
