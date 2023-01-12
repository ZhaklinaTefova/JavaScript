/* STUDENT EXERCISE - #2
CHANGE ELEMENT STYLE
On a button click, change a paragraph's text color, background color and font size.
Time to accomplish: 15 minutes */

let body = document.querySelector("body");

let button = document.createElement("button");
body.appendChild(button);
button.innerText = "BUTTON";

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`
}

function fontChange(){
    let fontRandomSize = Math.floor((Math.random()+2)*10)+"px";
    return fontRandomSize;
}

function changes(){
    this.style.color = randomColor();
    this.style.backgroundColor = randomColor();
    this.style.fontSize = fontChange();
}

button.addEventListener("click", changes);