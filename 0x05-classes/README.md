## Description

This project is a modified version of a task from the [ACN syllabus](http://syllabus.africacode.net/projects/oop/animals/part3/index.html), which originally focused on implementing an **Animals and Home** system. The task required designing classes for animals like cats and dogs, as well as a home that could adopt or remove pets, with specific rules and behaviors for each entity.

Instead of following the original animal-based context, I reimagined the task to work with **Vehicles and Garage**. This adaptation allowed me to explore a domain I find more relatable while still fulfilling the task's requirements. The changes include:

- Replacing **Animals** with **Vehicles** (e.g., cars and trucks).
- Replacing the **Home** class with a **Garage** that manages a collection of vehicles.
- Reinterpreting rules such as "Dogs can't belong to multiple homes, but cats can," to enforce unique vehicle entries in the garage.

### Key Features

1. **Vehicle Classes**:
   - A base `Vehicle` class with shared properties like `make`, `model`, `year`, and `color`.
   - Specialized subclasses for `Car` (with attributes like number of doors) and `Truck` (with attributes like cargo capacity and four-wheel drive).
2. **Garage Class**:
   - Methods to add and remove vehicles while enforcing unique entries.
   - A collection to store vehicles and provide detailed error handling.
3. **Object-Oriented Programming Principles**:
   - **Encapsulation**: Private fields and methods.
   - **Inheritance**: `Car` and `Truck` extend the base `Vehicle` class.
   - **Polymorphism**: Subclasses implement unique behaviors.

### Programming Language

This project was written in **TypeScript**, unlike the original syllabus task, which was intended for JavaScript. Using TypeScript allowed me to leverage static typing, enhanced readability, and more robust error handling.

### Links to Original Task

- [Part 1: OOP Basics](http://syllabus.africacode.net/projects/oop/animals/part1/index.html)
- [Part 3: Adding More Functionality](http://syllabus.africacode.net/projects/oop/animals/part3/index.html)

Adapting this task to a new context provided an opportunity to solidify my understanding of OOP concepts while exploring the powerful features of TypeScript.
