// BONUS HOMEWORK

// Create a recipe page from inputs

/* Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :) */

// select the body
let body = document.querySelector("body");

// ask user for recipe name
let recipeName = prompt("Insert your recipe name!");
console.log(recipeName);

// create heading for the recipe name
let h2 = document.createElement("h2");
body.appendChild(h2);
h2.innerText = `Your recipe name is: ${recipeName}`;

// create div for the unorderedList
let div = document.createElement("div");
body.appendChild(div);

div.innerText = "Here are your ingredients:";

// ask user for number of ingredients
let numOfIng = parseInt(
  prompt("How many ingredients you need for this recepе?")
);
console.log(numOfIng);

// create unordered list
let unorderedList = document.createElement("ul");
div.appendChild(unorderedList);

// function to print all ingredients in html
function printAllIng(ingredients) {
  for (let i = 1; i <= numOfIng; i++) {
    ingredients = prompt(`Enter ingredient ${i}`);
    unorderedList.innerHTML += `<li>${ingredients}</li>`;
    console.log(ingredients);
  }

  return ingredients;
}
printAllIng();
