// is a function that takes one or more function as args
// or return a function

// take a operation function as callback and return a operation function as it result
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(operateOnNumbers(2, 3, add));
console.log(operateOnNumbers(2, 3, multiply));
