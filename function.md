# JS FUNCTION

- JS function are defined with the `function` keyword
- 3 ways to declared a function:
  - function declaration
  - function expression
  - arrow function (ES6)

## 1. FUNCTION DECLARATION

### Example

````js
function myFunction(a, b) {
  return a * b;
}```
````

## 2. FUNCTION EXPRESSION

### Example

```js
const x = function (a, b) {
  return a * b;
};
```

## 3. ARROW FUNCTION

### Example

#### ES5

```js
const x = function (a, b) {
  return a * b;
};
```

#### ES6

```js
const x = (a, b) => {
  return a * b;
};
```

- Arrow functions do not have their own `this`
- Arrow functions are not hoisted. They must be defined before they are used