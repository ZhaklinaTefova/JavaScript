/* HOMEWORK PART 2
Write a JavaScript program to display the reading status of some book.
 The object should have the next properties: title, author, readingStatus 
 and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games'
 by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML */

// function Book(title, author, readingStatus) {
//   this.title = title;
//   this.author = author;
//   this.readingStatus = readingStatus;
//   this.books = function () {
//     if (this.readingStatus === Yes) {
//       return `This Book "${this.title}", writen by author "${this.author}" is already read`;
//     } else {
//       return `You still need to read "${this.books}" by author "${this.author}"`;
//     }
//   };
// }

let bookTitle = document.getElementById("bookTitle");


let bookAuthor = document.getElementById("bookAuthor");


let readStatus = document.getElementById("readStatus");


let button = document.querySelector("button");


let listOfBooks = document.getElementById("listOfBooks");


let ul = document.getElementById("list");


let li = document.createElement("li");
ul.appendChild(li);


let book = {
  title: bookTitle,
  author: bookAuthor,
  readingStatus: readStatus,

  books: function () {
    if (this.readingStatus.value === "Yes") {
      return (li.innerText += `\n This Book "${this.title.value}", writen by author "${this.author.value}" is already read`);
    } else if (this.readingStatus.value === "No") {
      return (li.innerText += `\n You still need to read "${this.title.value}" by author "${this.author.value}"`);
    } else {
      return (li.innerText += `\n Wrong Status! Write Yes or No!`);
    }
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(book.books());
  clearInputs();
});

function clearInputs() {
  bookTitle.value = "";
  bookAuthor.value = "";
  readStatus.value = "";
}
