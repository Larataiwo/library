const form = document.getElementById("form");
const authorText = document.getElementById("author");
const titleText = document.getElementById("title");
const pagesText = document.getElementById("pages");
const checkBox = document.getElementById("check");
const addBookToLibraryBtn = document.getElementById("add-book-library");
const addBookBtn = document.getElementById("add-book");
const addMoreBooksBtn = document.getElementById("add-more");

const bookCard = document.getElementById("container");

addBookBtn.onclick = function hide() {
    form.style.display = "block";
    addBookBtn.style.display = "none";
}


const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author;
    this.pages = pages; 
    this.read = read;
}
 
Book.prototype.toggleStatus = function () {
    this.read = !this.read;
}

const addBookToLibrary = () => {
    if(titleText.value !== "" || authorText.value !== "" || pagesText.value !== "") {
    let newBook = new Book(titleText.value, authorText.value, pagesText.value, checkBox.checked);
     myLibrary.push(newBook);
    updateBook();
} else {
    alert("enter a value");
    return;
}
}

const updateBook = () => {
    bookCard.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book-container");
        bookContainer.innerHTML += `
         <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read ? "Read" : "Not Read"}</p>
        <button class="toggle-read" onclick="cardStatus(${i})">Toggle Read</button>
        <button class="btn" onclick="removeCard(${i})">Remove</button>`
        bookCard.appendChild(bookContainer);
    }
}

 function removeCard(index) {
    myLibrary.splice(index, 1);
    updateBook();
 }

 function cardStatus(index) {
    myLibrary[index].toggleStatus();
    updateBook();
 }

     
form.addEventListener("submit", function(event) {
    event.preventDefault();
    })
    
    
    addBookToLibraryBtn.addEventListener("click", () => {
        addBookToLibrary();
        form.style.display = "none";
        addMoreBooksBtn.style.display = "block";
        });
    
addMoreBooksBtn.onclick = function hide() {
    form.style.display = "block";
    addMoreBooksBtn.style.display = "none";
    authorText.value = "";
    titleText.value = "";
    pagesText.value = "";
    checkBox.checked = "";
}




