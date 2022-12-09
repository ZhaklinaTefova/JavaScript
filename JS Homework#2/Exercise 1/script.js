let input = prompt("Hey, insert how much money you have?");

if (input === null || input === "") {
  console.log(input);
}

let inputMoney = parseInt(input);

if (inputMoney >= 500) {
  alert("Do whatever you like you have enough money for this weekend");
} else if (inputMoney >= 400) {
  alert("You can go on a date tonight");
} else if (inputMoney >= 300) {
  alert(
    "You can go out tonight, but not on a date. There is not enough money for two."
  );
} else if (inputMoney >= 200) {
  alert("You can hang out with your friends home.");
} else if (inputMoney >= 100) {
  alert("You can order a diner for you and stay home alone");
} else if (inputMoney >= 0) {
  alert("You should find another job immediately");
} else if (inputMoney < 0) {
  alert(
    "You should not borrow money from the bank. The Bank is not your friend!"
  );
} else {
  alert("The amount is not corect. Please insert the corect number!");
}
