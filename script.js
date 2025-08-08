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
    // setValidClass(e, checkValueExists(e))
    updateError_TitleField(e)
})

authorInput.addEventListener('input', (e) => {
    updateError_AuthorField(e);
})

pagesInput.addEventListener('input', (e) => {
    updateError_PagesField(e)
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

// TODO: need to add a class to signal validity as the regular validity.value does not match against the regEx patterns

function checkValueExists(e) {
    const valueValid = !e.target.validity.valueMissing
    console.log(valueValid);
    return valueValid;
}

function checkValidMatch(e, regex) {
    const matchTrue = regex.test(e.target.value)
    console.log(matchTrue)
    return matchTrue

}

function setValidClass(e, isValid) {
    console.log(isValid)
    e.target.className = isValid ? "valid" : "invalid"
}

function updateError_TitleField(e) {
    const isValue = checkValueExists(e);
    if (isValue) {
        setValidClass(e, isValue)
        console.log(e.target.className)
        e.target.nextElementSibling.textContent = "Please fill out this field"
    } else {
        setValidClass(e, isValue)
        console.log(e.target.className)
        e.target.nextElementSibling.textContent = "";   
    }
}

function updateError_AuthorField(e) {
    const regEx_Author = /^[a-zA-Z\s.-]+$/gm
    const isValue = checkValueExists(e)
    const isMatch = checkValidMatch(e, regEx_Author)
    if (isValue && isMatch) {
        setValidClass(e, isMatch)
        e.target.nextElementSibling.textContent = "";
        console.log("author name is a match")
        console.log(e.target.className)
    } else if (isValue && !isMatch){
        setValidClass(e, isMatch)
        e.target.nextElementSibling.textContent = "Please enter a valid name (can include letters, '.' or '-')"
        console.log("author name is INVALID")
        console.log(e.target.className)
    } else {
        setValidClass(e, isValue)
        e.target.nextElementSibling.textContent = "Please fill out this field"
        console.log(e.target.className)
    }
}

function updateError_PagesField(e) {
    const regEx_Pages = /^[0-9]*$/gm
    const isValue = checkValueExists(e)
    const isMatch = checkValidMatch(e, regEx_Pages)
    if (isValue && isMatch) {
        setValidClass(e, isMatch)
        e.target.nextElementSibling.textContent = "";
        console.log("page num is valid")
        console.log(e.target.className)
    } else if (isValue && !isMatch) {
        setValidClass(e, isMatch)
        e.target.nextElementSibling.textContent = "Please enter a valid number"
        console.log("page num is INVALID")
        console.log(e.target.className)
    } else {
        setValidClass(e, isValue);
        e.target.nextElementSibling.textContent = "Please fill out this field"
        console.log(e.target.className)
    }
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