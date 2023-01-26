console.log("Exercise 1");
/* EXERCISE 1
Create an html with:

Two wrapper divs with id identifiers
An h1 header, h3 header and a paragraph in both of them
The paragraphs inside the divs should have a class identifier (same)
Two paragraphs outside of the div wrappers
A button after the two last paragraphs


Select one div, one paragraph, one h1, one h3 and a button */


// let printAllElements = () =>{
//     let div = $("#firstDiv");
//     let paragraph = $("p").first();
//     let h3 = $("h3").first();
//     let h1 = $("h1").last();
//     let button = $("button");
// }
// console.log(printAllElements);

$(document).ready(function(){
    let div = $("#firstDiv");
    let paragraph = $("p").first();
    let h3 = $("h3").first();
    let h1 = $("h1").last();
    let button = $("button");
});

console.log("Exercise 2");
/* EXERCISE 2
Change the html from the previous document

Change the first h1 header text to "JQuery is awesome"
Add a new paragraph after the first header with some text
Change the button background to red


Use JQuery to complete this exercise*/

$("h1").first().text("JQuery is awesome");
$("h1").first().after("<p> new p after first heading </p>");
$("button").css("backgroundColor","red");

console.log("Exercise 3")

/* EXERCISE 3
Add event listener to the previous exercise button
When clicked the button should:

Hide the second div wrapper
Change the color of all paragraphs to green
Change the button text to "Don't click me"


Use JQuery to complete this exercise */

let button =  $("button");
console.log(button);

button.click(function(){
    console.log("it's working on click!");
    $(".wrapper:eq(1)").hide();
    $("p").css("color","green");
    button.text("Don't click me");
})