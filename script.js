// New Branch, form validation

// Plan:
// Validate 3 fields: title, author and pages
// For title, user must input a value, but no other restrictions are needed (Title can include numbers, symbols etc.). 
// For author, user must input a value, and it must be text only - no numbers or symbols, but spaces are allowed
// For pages, user must input a value, and only numbers are allowed
// can use valueMissing and pattern mismatch for validation
// use regex patterns to test inputs against



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

const cardContainer = document.querySelector('.card-container')




//_____Object Constructor_____________

class Book {
constructor(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = Boolean(read);
}
updateReadStatus() {    
    this.read === true ? this.read = false : this.read = true;
    return this.read; 
}};



//_____Event Listeners__________________

addButton.addEventListener('click', function() {
    formPopup.showModal();
})


form.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    refreshCardData();
    displayBook(myLibrary);
    form.reset();
    formPopup.close();
    // used form instead of submitButton because "submit" will only work if used on a form tag 
    // also used "submit" instead of "click", otherwise the HTML required tag would not work
})

titleInput.addEventListener('input', (e) => {
    checkValueExists(e)
})



// functions - 1 each to:
// check that input exists
// show error msg for valueMissing
// check for title pattern & show error msg
// check for author pattern & show error msg
// check for pages pattern & show error msg

// event listeners:
// for each (3): on input, check value exists, setCustom error msg
// on submit: check validity, if invalid, prevent default, display error message

function checkValueExists(e) {
    if (!e.target.validity.valueMissing) {
        e.target.nextElementSibling.textContent = "";
        console.log("input is valid")
    } else {
        showError_ValueMissing(e)
        console.log("input is NOT valid")
    }
}

function showError_ValueMissing(e) {
    e.target.nextElementSibling.textContent = "Please fill out this field"
}

function showError_invalidAuthorName(e) {

}





//_____Add and Display Functions____________

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


function displayBook(myLibrary) {
    myLibrary.forEach((book, index) => {
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
    setToggleText(book.read, toggleStatus);
    toggleStatus.addEventListener('click', function() {
        book.updateReadStatus();
        setToggleText(book.read, toggleStatus)
    })

    card.appendChild(toggleStatus);
    createRemoveBtn(index, card);
    cardContainer.appendChild(card);
});
}


function setToggleText(boolean, toggleStatus) {
    if (boolean === true) {
        toggleStatus.textContent = "Read";
        toggleStatus.classList.add('read')
    } else {
        toggleStatus.textContent = "Not read"
        toggleStatus.classList.remove('read');
    }
}



// ______Remove and Refresh Functions__________

function createRemoveBtn(index, card) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn')
    removeBtn.addEventListener('click', function() {
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