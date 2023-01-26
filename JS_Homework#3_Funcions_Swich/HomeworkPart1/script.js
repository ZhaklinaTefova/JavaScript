console.log("Homework #1");

// 1. Declare a function
// 2. Name it differentTypes
// 3. Get one parameter go the function
// 4. Return their type
// 5. Print it in the console
// 6. Invoke the function 5 type for different types :
// (object, boolean, number, string, undefined)

function differentTypes(parametar) {
  let typeOfParametar = typeof parametar;
  return typeOfParametar;
}

console.log(
  "This type is:",
  differentTypes([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ])
);
console.log("This type is:", differentTypes(2));
console.log("This type is:", differentTypes(false));
console.log("This type is:", differentTypes("Hi"));
console.log("This type is:", differentTypes());
