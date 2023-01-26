/* HOMEWORK PART 2
Create a header generator

Create two inputs, one for text and one for color
Create a button that says: generate h1
Create an h3 element for messages
When the button is clicked create a new header below the inputs and button
The new header should have the text and color from the inputs
If the person enters an invalid color or an empty text show an error message to the message element
You must use JQuery to complete the task */


let checkColor = (stringColor) => {
    let objStyle = new Option().style;
    // console.log(str);
    objStyle.color = stringColor;
    return objStyle.color !== '';
}

$("button").click(function () {
    if (!$("#textInput").val() || !checkColor($("#colorInput").val())) {
        $("h3").text("ERROR")
    } else if (checkColor($("#colorInput").val()) ){
        $("h3").text($("#textInput").val()).css("color", $("#colorInput").val())
    }
    clearInputs();
})


let input = $("input");
function clearInputs(){
    input[0].value = "";
    input[1].value = "";
};