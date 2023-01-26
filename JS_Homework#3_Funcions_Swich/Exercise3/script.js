console.log("Exercise #3");

// The Age Calculator

// Pseudo Code
// 1. Declare a function
// 2. Name it calculateAge
// 3. Give it 2 arguments: birth year, current year;
// 4. Execude the function and the result with alert
// 5. Call it three times with diferent sets of values
// 6. Find the curent year in JavaScript without writing you on your own

function calculateAge(
  birthYear = 1992,
  currentYear = new Date().getFullYear()
) {
  let calculatedAge = currentYear - birthYear;
  console.log(`You are ${calculatedAge} years old!`);
  alert(`You are ${calculatedAge} years old!`);
  return calculatedAge;
}

calculateAge();
calculateAge(1993);
calculateAge(2000);
calculateAge(2012);
