// Destructuring
const destructuring = () => {
  const person = { name: "leopard", age: 45 };
  const { name, age } = person;
  console.log("name :>> ", name);
  console.log("age :>> ", age);
};

// Computed property
const computedProperty = () => {
  const key = "gender";
  const object = { [key]: "0101010101010101" };
  console.log(object.gender);
};

// Spread
const spreadMerge = () => {
  const person = { name: "leopard", age: 45 };
  const gender = { gender: "0101010101010101" };
  const mergedObject = { ...person, ...gender };
  console.log(mergedObject);
};

// Object method
const objectMethod = () => {
  const obj = {
    method: () => {
      console.log("object method");
    },
  };
  obj.method();
};

// Shorthand names
const shorthandNames = () => {
  const name = "leopard";
  const age = 30;

  const person = {
    name,
    age,
  };
  console.log("name :>> ", person.name);
  console.log("age :>> ", person.age);
};
