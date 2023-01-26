/* HOMEWORK PART 1
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print 
in the console a message: e.g. dog.speak(“hey bro!!!”) 
will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs */

/*  1. Create elements in the DOM 
            input for the name 
            input for the kind

    2. Create object for the same properties
    3. Declare a function (method) in object that will take one parametar
       and it will print in the console
*/

let body = document.querySelector("body");

let div = document.createElement("div");
body.appendChild(div);

let p = document.createElement("p");
div.appendChild(p);
p.innerText = "Hi there, please write yout dog's name here!!!";

let inputName = document.createElement("input");
div.appendChild(inputName);
inputName.setAttribute("placeholder", "Name here :)");

let p1 = document.createElement("p");
div.appendChild(p1);
p1.innerText = "Please write your dog's kind here!!!";

let kindInput = document.createElement("input");
div.appendChild(kindInput);
kindInput.setAttribute("placeholder", "Your dog's kind here :)");

let button = document.createElement("button");
body.appendChild(button);
button.innerText = "Click Me!";
button.style.marginTop = "10px";

let p2 = document.createElement("p");
body.appendChild(p2);

let animal = {
  name: inputName,
  kind: kindInput,
  speak: function () {
    return (p2.innerText = `Your dog ${this.name.value} is ${this.kind.value} of a kind, and said:"Hey bro!!!"`);
  },
};

button.addEventListener("click", function (e) {
  e.preventDefault;
  console.log(animal.speak());
});
