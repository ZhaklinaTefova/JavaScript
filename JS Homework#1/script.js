//  ***  Exercise 1 ***
alert("Hello SEDC!");

//  ***  Exercise 2 ***
console.log("Exercise 2");
console.log("Hello from JavaScript!");

//   *** Exercise 3 ***

// feet to meters convertor
// 1. I should have given feet to convert (Ishould have have that value)
// 2. I should have the given ratio ( I schould have that value which is 1fet = 0.3048)
// 3. I should multiply the given geet with 0.3048

console.log("Exercise 3 - Convert Feet to Meters");
let FeetToConvert = 1;
let ratioOfFeetToMeters = 0.3048;

let convertToFeets = FeetToConvert * ratioOfFeetToMeters;
console.log("Result of conversion is: ", convertToFeets);

console.log("Exercise 3 - Convert Meters to Feets");
let meterToConvert = 1;
let ratioOfMetersToFeet = 3.28084;

let convertToMeters = meterToConvert * ratioOfMetersToFeet;
console.log("Result of conversion is: ", convertToMeters);

//   *** Exercise 4 ***
console.log("Exercise 4 - Rectangle Area");
let firstSide = 10;
console.log("First side is", firstSide);
let secondSide = 15;
console.log("Second side is", secondSide);

let result = firstSide * secondSide;
console.log("The Area of the rectangle is =", result);

//   *** Exercise 5 ***
console.log("Exercise 5 - Circle Area");
let piValue = 3.14159265359;
console.log("Value of Pi is =", piValue);
let radius = 3;
console.log("Radius of the Circle is =", radius);

// first type solution Exponentiation (**)
let circleAreaOne = piValue * radius ** 2;
console.log("The Area of the Circle is =", circleAreaOne);
// second type solution Math.pow()

let circleAreaTwo = piValue * Math.pow(radius, 2);
console.log("The Area of the Circle is =", circleAreaTwo);

// HOMEWORK 1
console.log("HOMEWORK 1");

let phonePrice = 119.95;
console.log("Price for each phone =", phonePrice, "$");

let taxRate = 5;
console.log("The Tax Rate is =", taxRate, "%");

let phoneTaxRatePrice = (taxRate / 100) * phonePrice;
console.log("5 % rate for each phone =", phoneTaxRatePrice, "$");

let phonePriceWithTax = phonePrice + phoneTaxRatePrice;
console.log(
  "Price for one phone including the 5% tax rate is",
  phonePriceWithTax,
  "$"
);

let quantityOfPhones = 30;
console.log("We are calculating a price for", quantityOfPhones, "phones.");

let wholePrice = phonePriceWithTax * quantityOfPhones;
console.log(
  "Price for 30 phones including the tax rate of 5% =",
  wholePrice,
  "$"
);

// second type the short and wrong way :)

let onePhone = 119.95;
let tax = 5;
let numberPhones = 30;

console.log(
  "The price is",
  onePhone * numberPhones + onePhone * numberPhones * 0.05,
  "$"
);
