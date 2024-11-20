// We reuse the interface we created in 0x01
interface Person {
  name: string;
  age?: number; // Age is now made optional
  address: string;
  interests: string[];
  isEmployed: boolean;
  greet(): string;
}

/**
 * 1. An interface enforces strict structure on objects.
 * 2. Explanation: Whatever properties and types are defined in the interface
 *    must exactly match the object; no more, no less. This makes interfaces
 *    a rigid skeleton for objects.
 * 3. This is why interfaces are used to define types for object properties
 *    in TypeScript.
 */

// Demonstrating that the 'age' property can be optional
// Example: I know a person, Sulamain. He lives in Pretoria
const sula: Person = {
  name: "Sulaiman Ndlovu",
  // Age is optional because I don't know his age
  address: "Pretoria, Gauteng",
  interests: ["python", "javascript", "web development"],
  isEmployed: false,
  greet() {
    return `
      I know a guy named ${this.name},
      he lives in ${this.address},
      and he is currently ${
        this.isEmployed ? "employed" : "looking for employment opportunities"
      }
    `;
  },
};

/**
 * This illustrates the flexibility of optional properties:
 * 1. When certain data is unknown, you can make it optional in the interface.
 * 2. When the data is available, you can still use the same interface without any issues.
 *
 * Despite interfaces being strict and rigid, they offer great flexibility with a basic
 * understanding of types, allowing you to manage different use cases more easily.
 */
