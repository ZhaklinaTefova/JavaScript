/* STUDENT EXERCISE - #3
REGISTER USER
Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string
Finaly print the string in a new p element on the screen
Time to accomplish: 15 minutes */

let body = document.querySelector("body");

let div = document.createElement("div");
body.appendChild(div);

let firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("placeholder", "First Name");
firstNameInput.style.margin = "10px";
firstNameInput.classList.add("inputs");

div.appendChild(firstNameInput);

let lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("placeholder", "Last Name");
lastNameInput.classList.add("inputs");

lastNameInput.style.margin = "10px";

div.appendChild(lastNameInput);

let emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Email");
emailInput.style.margin = "10px";
emailInput.classList.add("inputs");

div.appendChild(emailInput);

let passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Paswword");
passwordInput.style.margin = "10px";
passwordInput.classList.add("inputs");

div.appendChild(passwordInput);

let button = document.createElement("button");
button.innerText = "Sign In";
button.style.margin = "10px";

body.appendChild(button);

let result = document.createElement("p");
body.appendChild(result);

let inputs = div.children;

function getUserInfo(inputElements) {
  result = "User: ";
  for (let input of inputElements) {
    result += input.value + " ";
  }
  result += "is registered!";
  return result;
}
button.addEventListener("click", function () {
  result.innerText = getUserInfo(inputs);
});
