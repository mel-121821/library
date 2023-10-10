

//_____My Library Array_____

const myLibrary = [];



//_____Query Selectors____

const addButton = document.querySelector('.add-book'); 

const formPopup = document.querySelector('.form-popup')

addButton.addEventListener('click', function() {
    console.log("clicked")
    formPopup.style.display = "block";
})


// _____Object constructor_____

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read);
    this.info = function() {
        if (this.read === true) {
            let string = "read"
            return `${title} by ${author}, ${pages} pages, ${string}.`
        } else {
            let string = "not read yet"
            return `${title} by ${author}, ${pages} pages, ${string}.`
        }
        
    }
}

const hP1 = new Book("Harry Potter and the Philisoper's Stone", "J.K. Rowling", 223, true);

const eragon = new Book("Eragon", "Christopher Paolini", 509, false);
 
console.log(hP1.read);
console.log(eragon.read);

console.log(hP1.info());
console.log(eragon.info());



function addBookToLibrary(title, author, pages, read) {
    
}