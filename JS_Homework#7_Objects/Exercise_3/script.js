/* EXERCISE 3
Write a JavaScript program to delete the lecture property 
from the following object. Add a property age to the object. 
Add a method getFullName that returns the full name 
( First Name and Last name )
Sample object: */

let trainer = { 
	name:  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}

// deliting lecture property
// with dot notation will be:
delete trainer.lecture;

// with square brackets will be: 
// delete trainer["lecture"];

// after deliting:
console.log(trainer);

// adding property age to the object:
// with dot notatiton:
trainer.age = 28;
// with square brackets
// trainer["age"] = 30;

// after adding:
console.log(trainer);

trainer.getFullName = function() {
    return `${trainer.name} ${trainer.lastName}`;
};
 
// after adding the method
console.log(trainer);
console.log(trainer.getFullName());
