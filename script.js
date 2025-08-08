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
    const formValid = validateForm()
    if (formValid) {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        refreshCardData();
        displayBook(myLibrary);
        closeForm();
        // used form instead of submitButton because "submit" will only work if used on a form tag 
        // also used "submit" instead of "click", otherwise the HTML required tag would not work
    } else {
        validateTitle(titleInput);
        validateAuthor(authorInput);
        validatePages(pagesInput);
    }
})

titleInput.addEventListener('input', (e) => {
    const input = e.target;
    validateTitle(input);
})

authorInput.addEventListener('input', (e) => {
    const input = e.target;
    validateAuthor(input);
})

pagesInput.addEventListener('input', (e) => {
    const input = e.target;
    validatePages(input);
})

function checkValueExists(input) {
    const valueValid = !input.validity.valueMissing;
    return valueValid;
}

function checkValidMatch(input, regex) {
    const matchTrue = regex.test(input.value);
    return matchTrue;
}

function setValidClass(input, isValid, isMatch=true) {
    input.className = (isValid && isMatch) ? "valid" : "invalid";
}

function validateTitle(input) {
    const isValue = checkValueExists(input);
    updateErrorMsg_Title(input, isValue);
    setValidClass(input, isValue);
}

function updateErrorMsg_Title(input, isValue) {
    const spanMsg = input.previousElementSibling;
    if (!isValue) {
        spanMsg.textContent = "Please fill out this field";
    } else {
        spanMsg.textContent = "";  
    }
}

function validateAuthor(input) {
    const regEx_Author = /^[a-zA-Z\s.-]+$/gm;
    const isValue = checkValueExists(input);
    const isMatch = checkValidMatch(input, regEx_Author);
    setValidClass(input, isValue, isMatch);
    updateErrorMsg_Author(input, isValue, isMatch);
}

function updateErrorMsg_Author(input, isValue, isMatch) {
    const spanMsg = input.previousElementSibling;
    if (!isValue) {
        spanMsg.textContent = "Please fill out this field";
    } else if (isValue && !isMatch) {
        spanMsg.textContent = "Please enter a valid name (can include letters, '.' or '-')";
    } else {
        spanMsg.textContent = "";
    }
}

function validatePages(input) {
    const regEx_Pages = /^[0-9]*$/gm;
    const isValue = checkValueExists(input);
    const isMatch = checkValidMatch(input, regEx_Pages);
    setValidClass(input, isValue, isMatch);
    updateErrorMsg_Pages(input, isValue, isMatch);
}

function updateErrorMsg_Pages(input, isValue, isMatch) {
    const spanMsg = input.previousElementSibling;
    if (!isValue) {
        spanMsg.textContent = "Please fill out this field";
    } else if (isValue && !isMatch) {
        spanMsg.textContent = "Please enter a valid number";
    } else {
        spanMsg.textContent = "";
    }
}

function validateForm() {
    const titleValid = titleInput.className === "valid";
    const authorValid = authorInput.className === "valid";
    const pagesValid = pagesInput.className === "valid";
    const allValid = (titleValid && authorValid && pagesValid);
    return allValid;
}

function closeForm() {
    form.reset();
    clearValidity();
    formPopup.close();
}

function clearValidity(){
    titleInput.className = "";
    authorInput.className = "";
    pagesInput.className = "";
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