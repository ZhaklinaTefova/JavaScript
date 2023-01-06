console.log("EXERCISE 1!!!!!");

/*
Action: Write a JavaScript program to read ten array values,
 determine the largest value, and print it */

//  1. We need array with 10 elements
//  2. Declare a function to find the longest string
//  3. Declare a starting variable from 0
//  4. We need loop to iterate through the array
//  5. Find the longest string with if statment and return tha value
//  6. Invoke the function and print it the longest name

let namesOfStudents = [
  "Zhaklina",
  "Trajche",
  "Jasmina",
  "Florina",
  "Daniel",
  "Zoran",
  "Zdravko",
  "Lenca",
  "Jovan",
  "BLaga",
];

function findTheLongestName(longestStr) {
  let lengthOfString = 0;
  longestStr;
  for (let i = 0; i < namesOfStudents.length; i++) {
    if (namesOfStudents[i].length > lengthOfString) {
      lengthOfString = namesOfStudents[i].length;
      longestStr = namesOfStudents[i];
      console.log(longestStr);
    }
  }
}
findTheLongestName(namesOfStudents);
