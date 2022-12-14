console.log("Homework #2");

// 1. Declare a function that will convert Human to Dog years and opposite
// 2. Name it convertHumanAndDogYears
// 3. Give it an parametar - years
// 4. Prompt an input
// 5. Create if staitments for converting
// 6. Print it witg alert and console
// 7. Call the function

function convertHumanAndDogYears(years) {
  let userChoice = parseInt(
    prompt(
      "Insert 1 for converting Human Years to Dog Years\nInsert 2 for converting Dog Years to Human Years"
    )
  );

  if (userChoice === 1) {
    years = parseInt(prompt("Please insert Human years to convert"));
    let resultsHumanToDogYears = years * 7;
    console.log(`You are ${resultsHumanToDogYears} dogs years old!`);
    alert(`You are ${resultsHumanToDogYears} dogs years old!`);
    return resultsHumanToDogYears;
  } else if (userChoice === 2) {
    years = parseInt(prompt("Please insert Dogs years to convert"));
    let resultsDogsToHumanYears = years / 7;
    console.log(
      `Your Dog is ${resultsDogsToHumanYears.toFixed(0)} human years old`
    );
    alert(`Your Dog is ${resultsDogsToHumanYears.toFixed(0)} human years old`);
    return resultsDogsToHumanYears;
  } else {
    console.log("ERROR");
  }
}

convertHumanAndDogYears();
