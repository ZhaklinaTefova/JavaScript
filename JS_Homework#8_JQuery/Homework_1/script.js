/* HOMEWORK PART 1
CREATE A GREETING APP WITH JQUERY
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Petko output message: Hello there Petko!

You must use JQuery to complete the task
 */

$("button").click(function () {
   $("h1").text(`Hello there, ${$("input").val()}!`);

   clear();
});

let input = $("input");
function clear() {
  input[0].value = "";
}