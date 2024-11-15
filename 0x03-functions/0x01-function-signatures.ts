// Function signature specifies:
/**
 * type for arguments
 * type of the function return
 */

// Basic add function with signature
const add = (...numbers: number[]): number =>
  numbers.reduce((acc, curr) => acc + curr, 0);

// Basic function with optional parameter
const greet = (name: string, age?: number): string =>
  `Hi, ${name}. You are ${age} years old`; // Will return `undefined for age when called with age excluded

// Basic function for exponenting a number. When no value is porvided, return 1
const exponenting = (integer: number = 0, exponent: number = 0): number => {
  return integer ** exponent;
};

// Basic function where no value is returned from the function
const logAGreeting = (name: string = "Bob"): void => {
  console.log(`Hi, ${name}.`);
};

// Function overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid input types");
}
