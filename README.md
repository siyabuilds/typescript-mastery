# TypeScript Mastery

A comprehensive learning journey through TypeScript fundamentals to advanced concepts. This repository contains hands-on examples and exercises designed to build mastery in TypeScript development.

## 📚 Topics Covered

### ✅ Completed Topics

#### 0x01 - Introduction

- **Hello World** (`0x00-hello-world.ts`)
  - Basic TypeScript syntax and setup
  - Type annotations with strings
  - Template literals and console output

#### 0x02 - Basics

- **Variables** (`0x01-variables.ts`)
  - `let` vs `const` declarations
  - Type annotations for primitives
  - All TypeScript basic types
  - Type safety and error prevention
- **Type Inference** (`0x02-type-inference.ts`)
  - How TypeScript infers types automatically
  - When to use explicit vs implicit typing

#### 0x03 - Functions

- **Function Signatures** (`0x01-function-signatures.ts`)
  - Function parameter types
  - Return type annotations
  - Arrow functions vs function declarations
- **Optional Parameters** (`0x02-optional-parameters.ts`)
  - Making parameters optional with `?`
  - Default parameter values
  - Function overloading basics

#### 0x04 - Interfaces

- **Person Interface** (`0x01-person-interface.ts`)
  - Defining object structure with interfaces
  - Method signatures in interfaces
  - Implementing interfaces with objects
- **Optional Properties** (`0x02-optional-properties.ts`)
  - Making interface properties optional
  - Flexibility in object structure
- **Readonly Properties** (`0x03-readonly-properties.ts`)
  - Immutable properties with `readonly`
  - Data protection and safety

#### 0x05 - Classes

- **Classes** (`0x01-classes.ts`)
  - Object-oriented programming with TypeScript
  - Vehicle and Garage system implementation
  - Inheritance with `Car` and `Truck` classes
  - Encapsulation with private fields
  - Polymorphism and method overriding

## 🚀 Upcoming Topics

### 0x06 - Advanced Types

- Union and intersection types
- Type aliases and custom types
- Literal types and type narrowing
- Conditional types

### 0x07 - Generics

- Generic functions and classes
- Type constraints
- Generic interfaces
- Utility types (`Partial`, `Pick`, `Omit`, etc.)

### 0x08 - Modules and Namespaces

- ES6 modules in TypeScript
- Import/export syntax
- Module resolution
- Namespace organization

### 0x09 - Decorators

- Class decorators
- Method and property decorators
- Decorator factories
- Metadata reflection

### 0x10 - Advanced OOP

- Abstract classes
- Static members
- Access modifiers (`public`, `private`, `protected`)
- Getter and setter methods

### 0x11 - Type Guards and Assertions

- Type predicates
- `instanceof` and `typeof` guards
- Type assertions and casting
- Discriminated unions

### 0x12 - Configuration and Tooling

- `tsconfig.json` configuration
- Compiler options
- TypeScript with build tools
- Linting and formatting

### 0x13 - Real-World Applications

- TypeScript with React
- Node.js and Express with TypeScript
- Testing TypeScript code
- Deployment strategies

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- TypeScript compiler (`npm install -g typescript`)

### Running the Examples

1. Clone this repository:

   ```bash
   git clone https://github.com/siyabuilds/typescript-mastery.git
   cd typescript-mastery
   ```

2. Compile and run any TypeScript file:

   ```bash
   # Compile to JavaScript
   tsc 0x01-intro/0x00-hello-world.ts

   # Run the compiled JavaScript
   node 0x01-intro/0x00-hello-world.js

   # Or use ts-node for direct execution
   npx ts-node 0x01-intro/0x00-hello-world.ts
   ```

## 📖 Learning Path

This repository follows a structured learning approach:

1. **Start with the basics** - Understand TypeScript syntax and type system
2. **Practice with functions** - Learn to type functions properly
3. **Master interfaces** - Structure your data with TypeScript interfaces
4. **Explore classes** - Implement object-oriented patterns
5. **Advance gradually** - Move to more complex TypeScript features

Each section builds upon the previous one, so it's recommended to follow the order from `0x01` through `0x13`.

## 🎯 Project Highlights

- **Vehicle/Garage System**: A comprehensive OOP example demonstrating inheritance, encapsulation, and polymorphism
- **Type Safety**: Examples showing how TypeScript prevents common JavaScript errors
- **Real-world Patterns**: Practical implementations you'll use in actual projects

## 🤝 Contributing

Feel free to contribute by:

- Adding more examples
- Improving existing code
- Fixing issues or typos
- Suggesting new topics

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 References

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ACN Syllabus OOP Projects](http://syllabus.africacode.net/projects/oop/animals/part3/index.html)
