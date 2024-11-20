// In this file I won't be demostrating wrong code...

// Basic greet function
const greetUser = (
  name: string,
  age?: number,
  location: string = "Earth"
): string => {
  let message = `Hello, ${name}. You live on ${location}.`;

  if (age) {
    message += `You are ${age} years old.`;
  } else {
    message += `Age remains unknown.`;
  }
  return message;
};

