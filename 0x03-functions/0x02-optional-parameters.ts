// In this file I won't be demostrating wrong code...

// Basic greet function
const greetUser = (
  name: string,
  age?: number,
  location: string = "Earth"
): string => {
  let message = `Hello, ${name}. You live on ${location}.`;

  if (age !== undefined) {
    message += `You are ${age} years old.`;
  } else {
    message += `Age remains unknown.`;
  }
  return message;
};

// Simple calculate function

const calculate = (
  operation: string = "add",
  a: number = 0,
  b: number = 0
): number => {
  if (operation === "subtract") {
    return b - a;
  }

  if (operation === "add") {
    return a + b;
  }

  throw new Error("Operation not supported currently");
};

// Diffs between the two functions

// #1. `age?` indicates that the age is optional and the function can work even in cases where age is not provided. Caution has to be taken though when this is the case
// #2. `operation: string = "add"` indicates that the default operation is to add a and b. If another operation is provided, we check if it's available.

// The main difference?
/**
 * When running function 1 if age is not optional the function may throw an error
 * However, indicating that it is optional means you can run the function even when age is not provided.
 * Again, handling has to be made here.
 *
 * In function 2 however, the operation argument is not optional but it is defaulted to "add" meaning an operation is available by default.
 * This means, if we leave operation blank the function already has a default operation it picked for us
 */
