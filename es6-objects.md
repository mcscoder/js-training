# JS ES6 OBJECTS

## 1. DESTRUCTURING

### 1.1. Destructuring Arrays

#### ES5

```js
const vehicles = ["mustang", "f-150", "expedition"];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
```

#### ES6

```js
const vehicles = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicles;
```

### 1.2. Destructuring Objects

#### ES5

```js
const person = { name: "leopard", age: 45 };
const name = person.name;
const age = person.age;
```

#### ES6

```js
const person = { name: "leopard", age: 45 };
const { name, age } = person;
```

## 2. SPREAD OPERATOR

- The JavaScript spread operator (`...`) is used to copy all or a part of an array or object into another array or object

### 2.1. Array

#### Example 1

```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```

#### Example 2

```js
const array = [1, 2, 3, 4, 5, 6];
const [a, b, c, ...rest] = array;
```

### 2.2. Object

#### Example 1

```js
const person1 = {
  name: "leopard",
  age: 30,
};
const person2 = {
  gender: "male",
};
const person = { ...person1, ...person2 };
```

#### Example 2

```js
const person = {
  name: "leopard",
  age: 30,
  gender: "male",
};

const { gender, ...person1 } = person;
```

## 3. COMPUTED PROPERTY

- Computed properties allow you to use the values of expressions as property names of an object

### Example

```js
const input = "something";

const object = {
  key1: "value1",
  [input]: "input data",
};

console.log(object[input]);
```

#### Output

```
input data
```

## 4. SHORTHAND NAMES

- If object key === variable name. use this

### Example

```js
const key1 = "value1";
const object = {
  key1,
};

console.log(object.key1);
```

#### Output

```
value1
```

## 5. METHOD DEFINITIONS

### Example

#### ES5

```js
const object = {
  myFunction: function () {
    console.log("something");
  },
};
```

#### ES6

```js
const object = {
  myFunction() {
    console.log("something");
  },
};
```
