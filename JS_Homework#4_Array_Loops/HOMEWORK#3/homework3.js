console.log("Homework#3");

/* HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */

let array = ["HI", "All", "how", "are", "you"];

function printOneString(array) {
  let sentence = "";
  for (let i = 0; i < array.length; i++) {
    sentence += `${array[i]} `;
  }
  return sentence;
}

let greetings = ["Hi", "everyone", "how", "are", "you", "?"];
console.log(printOneString(greetings));
