console.log("Homework#2");

/* Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid 
number and call it for every number. If one of the numbers of the array is invalid show
 an error message instead of a result. */

//  1. Declare function with name and as a parametar it will take one array
//  2. Array scould content 5 numbers as an argument
//  3. function should return the sum value from array elements
//  4. print the rezult
array = [];
function sumOfArray(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    if ((array.length = 5)) {
      sum += array[i];
    }
    i++;
  }
  return sum;
}
let array1 = [2, 3, 4, 5, 6];
console.log(sumOfArray(array1));

let array2 = [1, 1, 1, 1, 1];
console.log(sumOfArray(array2));

/* BONUS: Write another function called validateNumber() that checks if a number
  is a valid number and call it for every number. 
  If one of the numbers of the array is invalid show an error message instead of a result.*/
// let validArray = [];
