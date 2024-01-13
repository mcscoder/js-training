// Define a class named "Person"
class Person {
  // Constructor to initialize object properties
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number");
    }
  }

  // Method to display information about the person
  displayInfo() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }
}

const person1 = new Person("John Doe", 25);

console.log(person1.name);
