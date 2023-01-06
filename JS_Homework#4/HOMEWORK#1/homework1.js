console.log("Homework#1");

/* Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert */

let array = ["name", "mood", "activity"];
function tellStory(array) {
  console.log(array);
  let story = console.log(
    `This is ${array[0]}. ${array[0]} is a nice person. Today she is ${array[1]}. She is ${array[2]} all day.`
  );
  return story;
}

tellStory(["Zhaklina", "happy", "coding"]);

// let firstName = prompt("Insert your First Name!");
// let mood = prompt("Insert your mood!");
// let activity = prompt("Insert your activity!");

// function tellStory(array) {
//   array = [firstName, mood, activity];
//   console.log(array);
//   let story = console.log(
//     `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day.`
//   );
//   return story;
// }

// tellStory();
