console.log("HOMEWORK 1");

/* Change the page with JavaScript



Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

document.getElementById("myTitle").innerText = "New page";
document.getElementsByClassName("paragraph")[0].innerText = "My first Homework";
document.getElementsByClassName("paragraph")[1].innerText = "from DOM";
document.querySelector("text").innerText = "I am selecting form the html";

document.getElementsByTagName("h1")[1].innerText = "This is changed!";
document.querySelector("h3").innerText = "This is the only h3 on the page!";
