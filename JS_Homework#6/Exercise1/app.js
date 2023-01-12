/* STUDENT EXERCISE - #1
Decription: On a button click, greet yourself in alert
Action: Create a button. When clicked it shoud write: "Hello NAME"
Put your own name next to the Hello
Time to accomplish: 10 minutes. */

let body = document.querySelector("body");

let h3 = document.createElement("h3");
body.appendChild(h3);
h3.innerText = `Please click the button!`;

let button = document.createElement("button");
body.appendChild(button).innerText = "Click Me!";
button.addEventListener("click", printName);

let input = prompt("Insert yout name!");

function printName(name){
    name = "";
    name = input;
    console.log(name);
    alert("Hello" + " " + name);
}
