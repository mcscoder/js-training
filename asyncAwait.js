// ex1: Basic async Function
const fetchData = async () => {
  // Simulate fetch data from an API
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
  console.log(response);
  console.log("hello buddy");
};
fetchData();
