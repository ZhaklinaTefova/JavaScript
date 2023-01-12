/* WEIGHT CALCULATOR IN CHICKENS
Want to know how you wiegh in chikens? No problem!

Write a function named weightInChickens that:
Takes an input weigh in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph
Time to accomplish: 15 minutes. */

function weightInChickens(weigh) {
  return weigh / 0.5;
}
let result = document.getElementById("result");
let input = parseInt(prompt("Insert your kg!"));

if (!isNaN(input)) {
  result.innerHTML = `<h3> ${input}KG is ${weightInChickens(input)} chickens`;
} else {
  result.innerHTML = `<h3> Sorry! Wrong input! Refresh the page again! </h3>`;
}
