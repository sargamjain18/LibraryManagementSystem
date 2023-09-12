console.log("Hello World");

// constructor
function Book(name, author, type, issueDate) {
  this.name = name;
  this.author = author;
  this.type = type;
  this.issueDate = issueDate;
}

// Add Methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding bboks");
  tableBody = document.getElementById("tableBody");
  let data = `              
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
  tableBody.innerHTML += data;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message: </strong> ${displayMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                             </div> 
                         `;

  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

// Add Submit event listener to form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submitted library form");

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let issueDate = document.getElementById("issueDate").value;
  let type;
  let fiction = document.getElementById("fiction");
  let philosophy = document.getElementById("philosophy");
  let autobiography = document.getElementById("autobiography");

  if (fiction.checked) {
    type = fiction.value;
  } else if (philosophy.checked) {
    type = philosophy.value;
  } else if (autobiography.checked) {
    type = autobiography.value;
  }

  let book = new Book(name, author, type, issueDate);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", " Your book has been successfully added");
  } else {
    display.show("danger", " Sorry you cannot add this book");
  }
  e.preventDefault();
}
