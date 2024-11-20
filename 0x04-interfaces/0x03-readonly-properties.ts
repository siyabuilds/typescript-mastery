interface Person {
  readonly cellphoneNumber: number; // 'readonly' makes this property immutable; once set, it can't be changed
  name: string;
  age: number;
}

const person1: Person = {
  cellphoneNumber: 27664228477, // Initial assignment of the cellphone number
  name: "Siyabonga Samson Lukhele",
  age: 22,
};

// person1.cellphoneNumber = 212; // Error: Cannot assign to 'cellphoneNumber' because it is a read-only property

/**
 * Why use `readonly`?
 * 1. **Immutability**: Just like constants, some data must never change once set.
 *    For example, a person's unique identifier (like a phone number) should remain constant.
 * 2. **Data Integrity**: The `readonly` modifier ensures that once the property is set, it can't be accidentally modified later. This prevents unintended bugs that could arise if critical data (like an ID or a fixed value) is altered during runtime.
 * 3. **Type Safety**: TypeScript ensures that any accidental reassignment of a `readonly` property will result in an error at compile-time, preventing potentially dangerous runtime changes.
 * 4. **Cleaner Code**: It signals to other developers (or yourself, in the future) that certain properties should not be modified, improving code readability and predictability.
 *
 * Use cases for `readonly`:
 * - When modeling real-world entities where some values are immutable, such as identifiers, timestamps, or constants.
 * - To avoid errors in code where certain values should never be altered, reducing the risk of bugs.
 */
