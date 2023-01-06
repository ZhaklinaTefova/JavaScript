console.log("Homework#6");

/* HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames 
will return a new array with students full names

Every name should have a numeric value before it

Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]*/

function arrayDetails(array1, array2) {
  let fullName = [];
  for (let i = 0; i < array1.length; i++) {
    fullName += `${array1[i]} ${array2[i]} `;
  }
  return [fullName];
}

let arr1 = ["Zhaklina", "Trajche"];
let arr2 = ["Tefova", "Tefov"];

let details = arrayDetails(arr1, arr2);
console.log(details);
