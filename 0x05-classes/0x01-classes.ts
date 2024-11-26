class Vehicle {
  #make: string;
  #model: string | number;
  #year: number;
  #color;

  constructor({
    make,
    model,
    year,
    color = "White",
  }: {
    make: string;
    model: string | number;
    year: number;
    color?: string;
  }) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#color = color;
  }

  getDetails(): string {
    return `Make: ${this.#make}\nModel: ${this.#model}\nYear: ${
      this.#year
    }\nColor: ${this.#color}`;
  }

  getColor(): string {
    return this.#color;
  }

  setColor(newColor: string): void {
    if (!newColor) {
      throw new Error("Color cannot be empty");
    }
    this.#color = newColor;
  }
}

class Car extends Vehicle {
  #numDoors: number;
  constructor({
    make,
    model,
    year,
    color = "Black",
    numDoors,
  }: {
    make: string;
    model: string | number;
    year: number;
    color?: string;
    numDoors: number;
  }) {
    super({ make, model, year, color });
    this.#numDoors = numDoors;
  }
  getNumberOfDoors(): string {
    return `This car has ${this.#numDoors} doors.`;
  }
}

class Truck extends Vehicle {
  #cargoCapacity: number;
  #isFourWheelDrive: boolean;
  constructor({
    make,
    model,
    year,
    color = "Maroon",
    cargoCapacity,
    isFourWheelDrive,
  }: {
    make: string;
    model: string | number;
    year: number;
    color?: string;
    cargoCapacity: number;
    isFourWheelDrive: boolean;
  }) {
    super({ make, model, year, color });
    this.#cargoCapacity = cargoCapacity;
    this.#isFourWheelDrive = isFourWheelDrive;
  }
  getCargoCapacity(): string {
    return `This truck can load ${this.#cargoCapacity / 100} KG`;
  }
  checkWheelDrive(): string {
    return `This is a ${
      this.#isFourWheelDrive
        ? "four-wheel drive truck."
        : "not a four wheel drive truck"
    }`;
  }
}

class Garage {
  public collectionOfVehicles: Vehicle[];
  constructor() {
    this.collectionOfVehicles = [];
  }
  collectVehicle(vehicle: Vehicle): number {
    if (!(vehicle instanceof Vehicle)) {
      throw new Error(
        "Only vehicles matching OUR definition of vehicle are allowed in this inventory"
      );
    }
    if (!this.collectionOfVehicles.includes(vehicle)) {
      this.collectionOfVehicles.push(vehicle);
      return this.collectionOfVehicles.length;
    } else {
      throw new Error(
        "Are you sure you didn't steal this car here? It is ours already but here you are selling it."
      );
    }
  }
  removeVehicle(vehicle: Vehicle): number {
    const indexOfTheVehicle = this.collectionOfVehicles.indexOf(vehicle);
    if (indexOfTheVehicle > -1) {
      this.collectionOfVehicles.splice(indexOfTheVehicle, 1);
      return this.collectionOfVehicles.length;
    } else {
      throw new Error("Vehicle is not found in currecnt collection");
    }
  }
  showCurrentCollection(): Vehicle[] {
    return this.collectionOfVehicles;
  }
}
