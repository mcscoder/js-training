function person(gender, state) {
  return `${this.name} ${this.age} ${gender} ${state}`;
}

const person1 = {
  name: "leopard",
  age: 30,
};

console.log(person.call(person1, "male", "single"));
