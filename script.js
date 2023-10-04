
const myLibrary = [];

// _____Object constructor_____

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = function() {
        if (read === true) {
            let string = "read"
            return string;
        } else {
            let string = "not read yet"
            return string
        }
    }
    this.info = function() {
        if (read === true) {
            let string = "read"
            return `${title} by ${author}, ${pages} pages, ${string}.`
        } else {
            let string = "not read yet"
            return `${title} by ${author}, ${pages} pages, ${string}.`
        }
        
    }
}

const hP1 = new Book("Harry Potter and Philisoper's Stone", "J.K. Rowling", 223, true);

const eragon = new Book("Eragon", "Christopher Paolini", 509, false);
 

console.log(hP1.info());


console.log(eragon.info());