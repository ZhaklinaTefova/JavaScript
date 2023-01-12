/* HOMEWORK
CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

// selecting the body
let body = document.querySelector("body");

// header
let h2 = document.createElement("h2");
h2.innerText = "Hi there, Let's create a table!";
body.appendChild(h2);

// div element
let div = document.createElement("div");
body.appendChild(div);

// nested inputs in div element
let rowInput = document.createElement("input");
div.appendChild(rowInput);
rowInput.style.margin = "10px";
rowInput.setAttribute("placeholder", "Insert your number of Rows");

let colInput = document.createElement("input");
div.appendChild(colInput);
colInput.style.margin = "10px";
colInput.setAttribute("placeholder", "Insert your number of Columns");

// function to greate a table
function createTable() {
  // creates a <table> element and a <tbody> element
  const table = document.createElement("table");
  body.appendChild(table);
  const tblBody = document.createElement("tbody");
  table.appendChild(tblBody);

  // creating cells
  for (let i = 0; i < rowInput.value; i++) {
    // creates a table row
    const row = document.createElement("tr");
    tblBody.appendChild(row);

    for (let j = 0; j < colInput.value; j++) {
      // Creating a <td> element
      const cell = document.createElement("td");
      row.appendChild(cell);
      //   print text in cell = row and column
      cell.innerText = `Row ${i + 1}, column ${j + 1}`;
    }
  }

  // sets the border attribute
  table.setAttribute("border", "1");
}

// creating submit button and addeventListener click
let submitBtn = document.createElement("button");
body.appendChild(submitBtn);
submitBtn.innerText = "Click to create a table!";
submitBtn.style.margin = "10px";

submitBtn.addEventListener("click", createTable);
