// Example 1: Basic Promise Usage
const example1 = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Succeeded");
      } else {
        reject("Failed");
      }
    }, 3000); // 2 seconds delay
  });
  myPromise
    .then((Succeeded) => {
      console.log(Succeeded);
    })
    .catch((failed) => {
      console.log(failed);
    });
};

// Example 2: Chaining Promises
const example2 = () => {
  const newPromise = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
  newPromise(2000)
    .then(() => {
      console.log("First operation");
      return newPromise(1500);
    })
    .then(() => {
      console.log("Second operation");
      return newPromise(500);
    })
    .then(() => {
      console.log("Third operation");
    });
};

// Example 3: Promise.all
const example3 = () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation 1");
    }, 500);
  });
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation 2");
    }, 3000);
  });
  Promise.all([promise1, promise2]).then(([result1, result2]) => {
    console.log(`${result1}, ${result2}`);
  });
};
