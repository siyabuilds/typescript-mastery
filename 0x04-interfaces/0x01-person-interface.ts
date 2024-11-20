// Interfaces are meant to generate a "static" structure of how objects must be. Fow now we only focus on objects, it can also be applied to classes

interface Person {
  name: string;
  age: number;
  address: string;
  interests: string[];
  isEmployed: boolean;
  greet(): string;
}

const person1: Person = {
  name: "Samson Lukhele",
  age: 22,
  address: "Daveyton, South Africa",
  interests: ["React", "Node", "Basketball", "Online trading"],
  isEmployed: true,
  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.
      I am fascinated in ${this.interests.join(", ")} and I am ${
      this.isEmployed ? "employed" : "not employed"
    }
      `;
  },
};
