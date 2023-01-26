/* EXERCISE 4
Create three inputs for numbers
Print the average of the three numbers in an h1 element
If the average is larger or the same as 10 the result should be in green
If the average is smaller than 10 the result should be red


Do this with JQuery */

let averageNum = () => {
    return (parseInt($("input:eq(0)").val()) + parseInt($("input:eq(1)").val()) + parseInt($("input:eq(2)").val()))/3;
}

$("button").click(function () {
    if(averageNum() > 10){
        $("h1").text(averageNum()).css("color","yellow");
    }else{
        $("h1").text(averageNum()).css("color","red");
    }
})
