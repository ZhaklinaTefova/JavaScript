let birthYear = parseInt(prompt("Please Insert your birth Year"));
let subtract = 4;

let chineseZodiac = (birthYear - subtract) % 12;

if (birthYear < 1900) {
  alert("Please, Enter your valid birth year!");
} else if (birthYear > 2022) {
  alert("You are not born jet!");
} else if (chineseZodiac === 0) {
  alert("Your Chinese zodiac is RAT");
} else if (chineseZodiac === 1) {
  alert("Your Chinese zodiac is Ox");
} else if (chineseZodiac === 2) {
  alert("Your Chinese zodiac is Tiger");
} else if (chineseZodiac === 3) {
  alert("Your Chinese zodiac is Rabbit");
} else if (chineseZodiac === 4) {
  alert("Your Chinese zodiac is Dragon");
} else if (chineseZodiac === 5) {
  alert("Your Chinese zodiac is Snake");
} else if (chineseZodiac === 6) {
  alert("Your Chinese zodiac is Horse");
} else if (chineseZodiac === 7) {
  alert("Your Chinese zodiac is Goat");
} else if (chineseZodiac === 8) {
  alert("Your Chinese zodiac is Monkey");
} else if (chineseZodiac === 9) {
  alert("Your Chinese zodiac is Rooster");
} else if (chineseZodiac === 10) {
  alert("Your Chinese zodiac is Dog");
} else if (chineseZodiac === 11) {
  alert("Your Chinese zodiac is Pig");
} else {
  alert("Please enter a valid year!");
}
