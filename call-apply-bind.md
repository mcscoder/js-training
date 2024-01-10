# `call()` - `apply()` - `bind()`

- `call()` - `apply()` - `bind()` are methods that are used to change reference of `this` keyword

## `call()`

### Example 1: Use the `this` keyword as usual

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
```

#### Output

```text
John Doe
```

- In this example `this` keyword refer to the `person` object

### Example 2: Use the `this` keyword to refer to another object

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Lee",
  lastName: "Sin",
};

console.log(person.fullName.call(person1));
```

#### Output

```
Lee Sin
```

- In this example `this` keyword refers to the `person1` object
- The `call()` method has changed the reference of `this` keyword to `person1`

### Example 3: The call() method with Arguments

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (greet) {
    return greet + " " + this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Lee",
  lastName: "Sin",
};

console.log(person.fullName.call(person1, "hello"));
```

```
hello Lee Sin
```

## `apply()`

- The `apply()` method is similar to the `call()` method
- But, the `apply()` method takes arguments as an array

### Example: The apply() method with Arguments

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (greet) {
    return greet + " " + this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Lee",
  lastName: "Sin",
};

console.log(person.fullName.apply(person1, ["hello"]));
```

#### Output

```
hello Lee Sin
```

## `bind()`

- Unlike `call()` and `apply()` method, with `bind()` method, an object can borrow a method from another object

### Example 1:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Lee",
  lastName: "Sin",
};

const person1FullName = person.fullName.bind(person1);

console.log(person1FullName());
```

#### Output

```
Lee Sin
```

### Example 2: The `bind()` method with Arguments

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (greet) {
    return greet + " " + this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Lee",
  lastName: "Sin",
};

const person1FullName = person.fullName.bind(person1);

console.log(person1FullName("good morning"));
```

#### Output

```
good morning Lee Sin
```

### Example 3: Prevent losing `this` keyword when use a function as a callback

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

setTimeout(person.fullName, 0);
setTimeout(person.fullName.bind(person), 0);
```

#### Output

```
undefined undefined
John Doe
```
