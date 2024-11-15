// Using let
let count: number = 10;
count++; // Reassigning is allowed

let firstName: string = "Samson";
firstName = 21; // Will throw an error since firstName can only be a string

// Using const
// straightforward but let me demostrate anyways
const nums: number | undefined = undefined; // Allows intentional absence of a value which can't be modified
const PI: number = 3.14;
PI = 16; // Throws an error, reassignment is not allowed

// All types in TS

// number
let age: number = 22;

// String
let devName: string = "markuptitan";

// Boolean
let isDeveloperSeasoned: boolean = false;

// Any
// This type is used when the variable type is unknown. Commonly used in legacy code where refactoring is difficult and tricky
let companyEmployedUnder: any = "Self Learning";
companyEmployedUnder = {
  companyName: "Some Company Name",
  companyLocation: "Johannesburg",
}; // Using `any` for the type allows reassignment to any type. It is best for generic variables

// Undefined
let undefinedString: string | undefined;
if (undefinedString === undefined) {
  return `The string is ${undefinedString}`;
}
undefinedString = 21; // Throws an error because `undefinedString` can only be a string or undefined
undefinedString = "My string is now not undefined"; // Allows reassignement because string is one the allowed types

// null
let myName: null | string = null; // Allowed because null is one of the correct types
myName = "Samson";

// void
// Used for functions that do something but not return a value
const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};

// Shopping cart example with literal types
let cartStatus: "paid" | "delivered" | "open" = "delivered";
cartStatus = "open"; // Allowed
cartStatus = "paid"; // Also allowed
cartStatus = undefined; // Not allowed since undefined is not part of our cart types

// More literal types
const escapeRoutes: 0 | 1 = 1;
const samsonHouse: "apartment" | "house" | "penthouse" = "penthouse";

// Arrays
// array types in TS are way cooler than possibly explained
const arrayOfItems: string[] = ["Clothes", "Food", "Personal Hard drive"]; //string[] as a a type ensures that we only have strings in the array
const arrayOfBooleans: boolean[] = [true, false, false, false, true];
const arrayOfInts: number[] = [10, 20, 30, 40, 50, 60, 70];
const arrayOfStringsAndNumbers: (string | number)[] = [
  "Samson",
  22,
  "Dude",
  12,
  "Potatoes",
  10,
];

// Objects
// We have `interfaces` in TS that let us define the structure of objects
interface Person {
  name: string;
  age: number;
  devStatus?: boolean; //An optional value for an object, can be excluded when needed
}

const user: Person = {
  name: "Samson",
  age: 22,
  // devStatus is excluded but this won't throw an error since we used the'?' syntax in the interface
};

// Interfaces where we don't exactly know what will be in the object but we know the intended value structure
interface Users {
  [key: string]: string;
}

const objectOfNames: Users = {
  firstUser: "Samson",
  secondUser: "Spha",
  thirdUser: "Markuptitan",
};
