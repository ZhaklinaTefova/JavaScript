console.log("Homework#5");

/*Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it */
console.log("First function with For Loop");

let array = [];
function sumOfMaxAndMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    {
      if (array[i] > max) {
        max = array[i];
      }
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let sum = max + min;
  return ` Max number is ${max}. \n Min number is ${min}. \n Sum of max and min numbers is: ${sum}`;
}

let array1 = [2, 10, 3, 4, 5, 5];
console.log(sumOfMaxAndMin(array1));
let array2 = [4, 3, 5, 8, 1, 90, 2, 1];
console.log(sumOfMaxAndMin(array2));

//
//
console.log("Second function with For Of Lopp!");

let arr = [];
function sumValue(arr) {
  let maximum = arr[0];
  let minimum = arr[0];

  for (let element of arr) {
    if (element > maximum) {
      maximum = element;
    }
    if (element < maximum) {
      minimum = element;
    }
  }
  let sum = maximum + minimum;
  return `Sum is: ${sum}.`;
}
let arr1 = [2, 10, 3, 4, 5, 5];
console.log(sumValue(arr1));
