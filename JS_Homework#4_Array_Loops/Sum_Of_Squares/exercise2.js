console.log("EXERCISE 2!!!!!");

/* STUDENT EXERCISE

Decription: The Math object allows you to perform mathematical tasks.

Math.pow(x,y); - Returns the value of x to the power of y

Action: Write a JavaScript program to write the sum of squares 
of the numbers from 101 to 150

Time to accomplish: 15 minutes. */

// function findTheSumOfSquares(sum) {
//   sum = 0;
//   for (let i = 101; i <= 150; i++) {
//     sum += Math.pow(i, 2);
//   }
//   return sum;
// }

// console.log(findTheSumOfSquares());

function findTheSumOfSquares(number1, number2) {
  let sum = 0;
  let i = number1;
  while (i <= number2) {
    sum += Math.pow(i, 2);
    i++;
  }
  return sum;
}

console.log(`The result is: ${findTheSumOfSquares(101, 150)}`);

// function findTheSumOfSquares(number1, number2) {
//   let sum = 0;

//   for (let i = number1; i <= numberS2; i++) {
//     sum += Math.pow(i, 2);
//   }
//   return sum;
// }

// console.log(`The result is: ${findTheSumOfSquares(101, 150)}`);
