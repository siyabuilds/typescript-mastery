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
