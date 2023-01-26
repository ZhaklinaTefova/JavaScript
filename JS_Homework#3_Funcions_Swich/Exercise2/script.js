// Exercise 2

// 1. Prompt for user to choose type convertation
// 2. Convert the input into a number
// 3. If statments from the user choice

// 1. Declare a Function first for celsius
// 2. Give the function a name (identifieer) - celsiusToFahrenheit
// 3. Give the function one parametar: celsius
// 4. Create an input for celsius to insert user
// 5. Calculate the input to fahrenheit
// 6. Return the Function
// 7. Call the function
// 8. Display the result

// 1. Declare a Function for Fahrenheit
// 2. Give the function a name (identifieer) - fahrenheitToCelsius
// 3. Give the function one parametar: fahrenheit
// 4. Create an input for Fahrenheit to insert user
// 5. Calculate the input to celsius
// 6. Return the Function
// 7. Call the function
// 8. Display the result

let userOption = prompt("Please choose:\n 1.For Fahrenheit\n 2.For Celsius");

if (userOption === null || userOption === "") {
  console.log(userOption);
} else if (userOption != 1 && userOption != 2) {
  console.log("ERROR");
}

let input = parseInt(userOption);
if (input === 1) {
  {
    function fahrenheitToCelsius(fahrenheit) {
      fahrenheit = prompt("Please, enter Fahrenheit:");
      let resultCelsius = (5 / 9) * (fahrenheit - 32);
      console.log(`Celsius converted to Fahrenheit = ${resultCelsius}C`);
      return resultCelsius;
    }
  }
  alert("Fahrenheit converted to Celsius =" + fahrenheitToCelsius() + " C");
} else if (input === 2) {
  {
    function celsiusToFahrenheit(celsius) {
      celsius = prompt("Please, enter Celsius:");
      let resultFahrenheit = celsius * 1.8 + 32;
      console.log(`Celsius converted to Fahrenheit = ${resultFahrenheit}F`);
      return resultFahrenheit;
    }
  }
  alert("Celsius converted to Fahrenheit =" + celsiusToFahrenheit() + "F");
}
