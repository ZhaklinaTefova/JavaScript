console.log("EXERCISE 3!!!!!");
/* Write a JavaScript program that will read in a number and write out 
its digits*/

function readNumber(number) {
  number = prompt("INSERT NUMBER WITH MORE THAN ONE DIGIT");
  let printNum = [];
  let i = 0;
  while (i < number.length) {
    printNum = number[i];
    console.log(printNum);
    i++;
  }
  return printNum;
}
readNumber();

// function readStr(str) {
//   let i = 0;
//   while (i < str.length) {
//     console.log(str[i]);
//     i++;
//   }
//   return str[i];
// }
// readStr("Zhaklina");
