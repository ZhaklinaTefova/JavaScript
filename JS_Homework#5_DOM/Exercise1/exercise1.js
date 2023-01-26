console.log("STUDENT EXERCISE - #1");

/* MANIPULATE THE DOM

Select the first div
Select all paragraphs
Select the last div
Select the header 3 in the last div
Select the header 1 in the last div
Get the text from the first paragraph in the second div
Add the word "text" to the text element in the second div
Change the text of the header 1 in the last div
Change the text of the header 3 in the last div
Note:You can't change the HTML */

// *********** ------> 1. Select the first div

// by ID
let firstDiv = document.getElementById("first");
console.log(firstDiv);

// by class name[select the first element]
let div1 = document.getElementsByClassName("aDiv")[0];
console.log(div1);

// by tag name - print first element
let divElements = document.getElementsByTagName("div");
console.log(divElements); // it will give me array of all div elements [3]
console.log(divElements[0]); // it will print first div

// find first child element

// select the parent el. by querySelector - it select the first el.
let divParent = document.querySelector("body");
console.log(divParent);
let firstDivChild = divParent.firstElementChild;
console.log(firstDivChild);

// Query selector - it will get first elemenet
let divOne = document.querySelector("div");
console.log(divOne);

let divv1 = document.querySelector("#first");
console.log(divv1);

let divvv1 = document.querySelector(".aDiv");
console.log(divvv1);

// *********** ------> 2. Select all paragraphs

// by tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// query selector All
let Allparagraphs = document.querySelectorAll("p");
console.log(Allparagraphs);

// *********** ------> 3.Select the last div
let lastElement = divParent.lastElementChild;
let lastDiv = lastElement.previousElementSibling;
console.log(lastDiv);

let thirdDiv = document.querySelector("div:nth-of-type(3)");
console.log(thirdDiv);

// *********** ------> 4.Select the header 3 in the last div
let header3 = lastDiv.lastElementChild;
console.log(header3);

let h3 = document.querySelector("h3");
console.log(h3);

let lastHeader3 = lastDiv.getElementsByTagName("h3")[0];
console.log(lastHeader3);

// *********** ------> 5.Select the header 1 in the last div

let h1 = lastDiv.firstElementChild;
console.log(h1);

// *********** ------> 6. Get the text from the first paragraph in the second div

let paragraphFromSecondDiv = document.querySelector(".second");
let textFromParagraph = paragraphFromSecondDiv.innerText;
console.log(textFromParagraph);

// *********** ------> 7. Add the word "text" to the text element in the second div

let textElement = document.querySelector("text");
let newTextElement = (textElement.innerText += " text");
console.log(newTextElement);

// *********** ------> 8. Change the text of the header 1 in the last div
let newTextH1 = (h1.innerText += " + new text");
console.log(newTextH1);

// *********** ------> 9. Change the text of the header 3 in the last div
header3.innerText += " + new text";
console.log(header3.innerText);
