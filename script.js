

//_____My Library Array__________

const myLibrary = [
    // Input from user
];



//_____Query Selectors_________

const addButton = document.querySelector('.add-book'); 

const formPopup = document.querySelector('.form-popup');
const form = document.querySelector('.form-popup > form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

const container = document.querySelector('.container');

const cardContainer = document.querySelector('.card-container')

const submitBook = document.querySelector('.form-add > button')



//_____Object Constructor_____________

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read);
}



//_____Set Prototype___________________

Book.prototype.updateReadStatus = function() {
    this.read === true ? this.read = false : this.read = true;
    return this.read;
}



//_____Event Listeners__________________

addButton.addEventListener('click', function() {
    formPopup.showModal();
})


form.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    refreshCardData();
    displayBook(myLibrary);
    form.reset();
    formPopup.close();
    // used form instead of submitButton because "submit" will only work if used on a form tag 
    // also used "submit" instead of "click", otherwise the HTML required tag would not work
})


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read)); 
}



//_____Add and Display Functions____________

function displayBook(myLibrary) {
    myLibrary.forEach((book, index, array) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    Object.values(book).forEach((value, valueIndex) => {
        if (typeof value == "boolean") {
            // Do nothing
        } else if (valueIndex != 0 && isNaN(value) === false) {
            let cardData = document.createElement('div');
            // HTML sees everything as strings, so instead of checking to see if value is a number, check to see if value can convert into a number instead.
            // Also use index to prevent code from adding "pages" after book title if it is a number
        cardData.textContent = `${value} pages`;
        card.appendChild(cardData);
        } else {
            let cardData = document.createElement('div');
            cardData.textContent = `${value}`;
            card.appendChild(cardData);
        }
    })
    let toggleStatus = document.createElement('button');
    toggleStatus.classList.add('read-toggle');
    toggleStatus.addEventListener('click', function(e) {
        book.updateReadStatus();
        setToggleText(book.read, toggleStatus)
    })
    setToggleText(book.read, toggleStatus);
    card.appendChild(toggleStatus);
    createRemoveBtn(index, card);
    cardContainer.appendChild(card);
});
}


function setToggleText(boolean, toggleStatus) {
    boolean === true ? toggleStatus.textContent = "Read" : toggleStatus.textContent = "Not read yet"
}



// ______Remove and Refresh Functions__________

function createRemoveBtn(index, card) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn')
    removeBtn.addEventListener('click', function(e) {
        removeBookFromLibrary(myLibrary, index);
        refreshCardData();
        displayBook(myLibrary);
    })
    card.appendChild(removeBtn);
}


function removeBookFromLibrary(myLibrary, index) {
    myLibrary.splice(index, 1);
    return myLibrary;
}


function refreshCardData() {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
}