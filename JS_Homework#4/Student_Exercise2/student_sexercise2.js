console.log("STUDENT EXERCISE 2!!!!!");

/* Write a function named findNumber that:

Takes 2 arguments: array, type
The person that calls the function should provide
an array of numbers and string odd / even

If the type is even the function should find all 
the even numbers and return them as result

If the type is odd the function should find all 
the odd numbers and return them as result
Time to accomplish: 20 minutes.
 */

// let input = parseInt(prompt("Insert numbers"));
// function findNumber(array, number) {}

// function filterOddEven(array, type) {
//   let result = [];
//   if (type === "even") {
//     for (let num of array) {
//       if (num % 2 === 0) {
//         result.push(num);
//       }
//     }
//     return result;
//   } else if (type === "odd") {
//     for (let num of array) {
//       if (num % 2 !== 0) {
//         result.push(num);
//       }
//     }
//     return result;
//   } else {
//     console.log("The type was not correct. Please enter odd or even");
//     return null;
//   }
// }
function OddAndEven(array, type) {
  array = [];
  for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Insert numbers"));
    let countNumbers = array.push(input);
  }
  console.log(`Your numbers are: ${array}`);

  let yourArray = [];
  type = prompt("Odd or Even!");
  if (type === "even") {
    for (let input of array) {
      if (input % 2 === 0) {
        yourArray.push(input);
      }
    }

    return `Your even numbers are: ${yourArray}`;
  } else if (type === "odd") {
    for (let input of array) {
      if (input % 2 !== 0) {
        yourArray.push(input);
      }
    }
    return `Your odd numbers are: ${yourArray}`;
  } else {
    console.log("Please enter corect numbers!!! Odd or Even");
    return null;
  }
}

console.log(OddAndEven());
