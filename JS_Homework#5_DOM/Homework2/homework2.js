// Homework2

// Print all numbers from an array and the sum

/* Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let h3 = document.createElement("h3");
h3.innerText = "Hi there, here is your numbers!";

let body = document.querySelector("body");
document.body.appendChild(h3);

let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

let array = [];
function printNum(array) {
  for (let i = 0; i < array.length; i++) {
    unorderedList.innerHTML += `<li>${array[i]}</li>`;
  }
  return unorderedList;
}
array = [2, 4, 6, 3, 7, 8, 9, 90];
printNum(array);

let p = document.createElement("p");
document.body.appendChild(p);


let div = document.createElement("div");
document.body.appendChild(div);

function sumOfArray(sum,mathOper) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    p.innerHTML = `Sum = ${sum}`;
    mathOper = `${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]} + ${array[5]} + ${array[6]} + ${array[7]} = ${sum}`
    div.innerHTML = mathOper;
  }
  return sum;
}
sumOfArray();

