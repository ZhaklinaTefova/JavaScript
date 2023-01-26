/* EXERCISE 5
Create a student registry form. The form should have:

First Name
Last Name
Age

The form should have a save button which will create a student 
object and add it to an array (students). Log the array after 
every save to see the results in the console.
Bonus: Make the students appear in an unordered list in the page. */

// 1. Create elements in the DOM and append to the HTML
// 2. Create the save button that after will take an event onclick
// 3. I nee an empty array for user inputs values

// selecting the elements
let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let ageI = document.querySelector("#age");
// Constructor!

let students = [];
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// function to print the elements into the ul
function printStudents(array, element) {
  element.innerHTML = "";
  for (let student of array) {
    element.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName}, 
    <b>Age:</b> ${student.age}</li>`;
  }
}

let button = document.querySelector("button");

button.addEventListener("click", function () {
  let first = firstName.value;
  let last = lastName.value;
  let age = ageI.value;

  let newStudent = new Student(first, last, age);
  students.push(newStudent);

  let list = document.querySelector("#list");
  printStudents(students, list);

  firstName.value = "";
  lastName.value = "";
  ageI.value = "";
});
