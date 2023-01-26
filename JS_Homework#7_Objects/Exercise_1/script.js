/* EXERCISE 1
Create a JavaScript object that will describe you.
Include at least 5 properties, including a string, 
a number and a boolean
 */


// creating a JS Object with LITERAL NOTATION METHOD
let personalInfo = {
    name: "Zhaklina",
    lastName: "Tefova",
    birhtYear: 1992,
    age: 30,
    married: true,
    freeTime: false,

    checkTimeAvailavility: function(){
        return this.freeTime;
    }
};

// Accessing into an Object

// with DOT NOTATION
// accsessing properties:
console.log(personalInfo.name);
console.log(personalInfo.lastName);
// accessing methods
console.log(personalInfo.checkTimeAvailavility());

// with SQUARE BRACKETS:
// accessing a property
console.log(personalInfo["name"]);

// we can not access to a method