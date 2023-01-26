console.log("STUDENT EXERCISE 1!!!!!");

/* FIND NUMBERS IN ARRAY
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in
 an array with numbers
Outputs the result to the screen like so: "There is
 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
Time to accomplish: 15 minutes.
 */

console.log("FIND NUMBERS IN ARRAY -----> While Loop");
let array1 = [1, 2, 2, 2, 3, 4, 2];

function findNumber(array1, number1) {
  let i = 0,
    n = 0;
  while (i < array1.length) {
    {
      if (number1 === array1[i]) {
        n++;
      }
      i++;
    }
    return `There is ${n} occurrences of number ${number1} in the array`;
  }
}

console.log(findNumber([2, 2, 2, 3, 4, 5, 3, 2, 2], 6));

console.log("FIND NUMBERS IN ARRAY ----> For Of Loop");

let array = [];
function findNumber(array, number) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      n++;
    }
  }
  return `There is ${n} occurrences of number ${number} in the array`;
}

console.log(findNumber([2, 2, 2, 3, 4, 5, 3, 2, 2], 2));
