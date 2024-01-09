// callback is a function that used in another function and passed as an argument
const forEach = (a, cb) => {
  for (let i = 0; i < a.length; i++) {
    cb(a[i], i);
  }
};
// callback
const double = (item, index) => {
  console.log(item * 2);
};

let a = [1, 2, 3, 4, 5];
forEach(a, double); // use callback
forEach(a, (item, index) => console.log(`index:${index} - item:${item}`)); // use callback too
