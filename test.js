const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

setTimeout(person.fullName);
setTimeout(person.fullName.bind(person));
