function person() {
  return `${this.name} ${this.age}`;
}

const person1 = {
  name: "leopard",
  age: 30,
};

console.log(person.call(person1));
