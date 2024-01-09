const person = {
  firstName: "leopard",
  lastName: "a1a1",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = {
  firstName: "abrams",
  lastName: "m1a1",
};

console.log(person.getFullName());
const getPerson1Name = person.getFullName.bind(person1);
console.log(getPerson1Name());
