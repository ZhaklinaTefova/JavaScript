console.log("Exercise 1");

// Pseaudo Code
// 1. Declare four functions
// 2. Give each function a name (identifier)
// 3. Define 2 parametars
// 4. Write an output of each function

// Function ONE - > sums
console.log("Function ONE");

function sumsNumbers(number1, number2) {
  let sum = number1 + number2;
  console.log(`Result from the sum of two numbers is: ${sum}`);
  return sum;
}

sumsNumbers(2, 5);

// Function TWO - > subtracts
console.log("Function TWO");

function subtractionNumbers(number1, number2) {
  let subtraction = number1 - number2;
  console.log(`Result from the subtraction of two numbers is: ${subtraction}`);
  return subtraction;
}

subtractionNumbers(2, 5);

// Function THREE - > multiplies
console.log("Function THREE");

function multiplicatioNumbers(number1, number2) {
  let multiplicatio = number1 * number2;
  console.log(
    `Result from the multiplication of two numbers is: ${multiplicatio}`
  );
  return multiplicatio;
}

multiplicatioNumbers(2, 5);

// Function FOUR - > divides
console.log("Function FOUR");

function dividingNumbers(number1, number2) {
  let dividing = number1 / number2;
  console.log(`Result from the dividing of two numbers is: ${dividing}`);
  return dividing;
}

dividingNumbers(2, 5);
