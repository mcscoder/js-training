// ex1: Basic async Function
const fetchData = async () => {
  // Simulate fetch data from an API
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("data");
      }, 2000);
    });
    console.log(response);
    console.log("hello buddy");
  } catch (error) {
    console.log(error);
  }
};

// ex2: Multiple async function
const asyncFunction1 = async () => {
  console.log("Async function 1 started");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Async function 1 completed");
};
const asyncFunction2 = async () => {
  console.log("Async function 2 started");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Async function 2 completed");
};
const main = async () => {
  await Promise.all([asyncFunction1(), asyncFunction2()]);
  console.log("done all");
};
main();
