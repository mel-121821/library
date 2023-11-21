

//_____My Library Array_____

const myLibrary = [
    {
        title: "The hobbit",
        author: "J.R.R Tolkien",
        pages:  310,
        read: true
    },
    {
        title: "Silverwing",
        author: "Kenneth Oppel",
        pages:  228,
        read: true 
    }
];



//_____Query Selectors____

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

//________________________________

addButton.addEventListener('click', function() {
    console.log("clicked");
    formPopup.showModal();
    // formPopup.style.display = "block";
    // container.classList.add('blurry');
})

// used form instead of submitButton because "submit" will only work if used on a form tag 
// also used "submit" instead of "click", otherwise the HTML required tag would not work
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    // console.log(myLibrary);
    refreshCardData();
    displayBook(myLibrary);
    form.reset();
    formPopup.close();
})


// _____Object constructor_____

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read);
    // this.info = function() {
    //     if (this.read === true) {
    //         let string = "read"
    //         return `${title} by ${author}, ${pages} pages, ${string}.`
    //     } else {
    //         let string = "not read yet"
    //         return `${title} by ${author}, ${pages} pages, ${string}.`
    //     }
        
    // }
}

// console.log(Object.getPrototypeOf(Book));

Book.prototype.updateReadStatus = function() {
    console.log("Prototype set")
    return `${this.read}`;
    // console.log(this.read);
    // if (this.read === true) {
    //     this.read = false;
    // } else {
    //     this.read = true;
    // }
    // return this.read;
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read)); 
    // console.log(myLibrary);
}


function displayBook(myLibrary) {
    myLibrary.forEach((book, index, array) => {
    // console.log(book.title);
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    Object.values(book).forEach((value, index) => {
        // console.log(key);
        // console.log(value);
        // console.log(typeof(value));
        let cardData = document.createElement('div');
        if (typeof value == "boolean") {
            let toggleStatus = document.createElement('button');
            toggleStatus.classList.add('read-toggle');
              
            toggleStatus.textContent = "Read";
            card.appendChild(toggleStatus);
            // Moved boolean check above number check because boolean values can be considered numbers (0 for false and 1 for true) and isNaN will pick up these values too if it is placed before the boolean code block
        } else if (index != 0 && isNaN(value) === false) {
            console.log(value, index);
            // HTML sees everything as strings, so instead of checking to see if value is a number, check to see if value can convert into a number instead
        // console.log("This value can be converted into a number");
        cardData.textContent = `${value} pages`;
        card.appendChild(cardData);
        } else {
            cardData.textContent = `${value}`;
            card.appendChild(cardData);
        }
    

        // console.log(Object.values(book));
    })
    createRemoveBtn(index, card);
    
    console.log(card.dataset.index);
    console.log(array);
    cardContainer.appendChild(card);
});
}





function createRemoveBtn(index, card) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn')
    removeBtn.addEventListener('click', function(e) {
        console.log(`User wants to remove book ${index}`);
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
    // console.log(cardContainer.firstChild);
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
        // console.log(cardContainer.childNodes);
    }
}






// Code to include capitalized object key on the card
// cardData.textContent = `${(key).replace(/^./, (key[0]).toUpperCase())}: ${myLibrary[book][key]}`;



// _____Problem code to fix/redo_____

// This code executes both the first if statement and the else statement when read === true. 
// function displayBook(myLibrary) {
//     for (let book in Object.keys(myLibrary)) {
//         let card = document.createElement('div');
//         card.classList.add('card');
//         console.log(book);
//         for (let key in myLibrary[book]) {
//             if (key === "read" && myLibrary[book][key] === true) {
//                 console.log(myLibrary[book][key]);
//                 let cardData = document.createElement('div');
//                 cardData.textContent = `This is working ${(key)}: ${myLibrary[book][key]}`
//                 card.appendChild(cardData);
//             } if (key === "read" && myLibrary[book][key] === false) {
//                 console.log(myLibrary[book][key]);
//                 let cardData = document.createElement('div');
//                 cardData.textContent = `This is working ${(key)}: ${myLibrary[book][key]}`
//                 card.appendChild(cardData);
//             } else {
//                 console.log(key);
//                 // console.log(typeof(key));
//                 console.log(myLibrary[book][key]);
//                 let cardData = document.createElement('div');
//                 cardData.textContent = `${myLibrary[book][key]}`;
//                 card.appendChild(cardData);
//             }
//         }
//         cardContainer.appendChild(card);
//     }
// }


// function createCard(book) {
//     let card = document.createElement('div');
//         card.dataset.index = [book];
//         // console.log(card.dataset.index);
//         card.classList.add('card');
//         card.textContent = `${book.title}`;
//         card.textContent = `${book.author}`;
       
//         card.appendChild(removeBtn);
//         cardContainer.appendChild(card);
//     }

// function getRemoveBtn () {
//     if (cardContainer.firstChild) {
//         const removeBookBtn = document.querySelector('.remove-btn');
//         console.log(removeBookBtn);
//         const bookCard = document.querySelector('.card');
//         console.log(bookCard);
//         // console.log(bookCard.dataset.index)
//         // removeBookBtn.addEventListener('click', function(e) {
//         //     console.log(`User wants to remove book ${bookCard.dataset.index}`);
//             // removeBookFromLibrary(myLibrary, [book]);
//             // refreshCardData();
//         }
//     }


// getRemoveBtn();

// function displayBook(myLibrary) {
//     for (let book in Object.keys(myLibrary)) {
//         console.log([book]);
//         let card = document.createElement('div');
//         card.dataset.index = [book];
//         // console.log(card.dataset.index);
//         card.classList.add('card');
//         for (let key in myLibrary[book]) {
//             console.log(myLibrary[book][key]);
//             if (key === "pages") {
//                 let cardData = document.    createElement('div');
//                 cardData.textContent = `${myLibrary[book][key]} pages`
//                 card.appendChild(cardData);
//             } else if (key === "read") {
//                 let toggleStatus = document.createElement('button');
//                 toggleStatus.classList.add('read-toggle');
//                 // toggleStatus.addEventListener('click', function() {

//                 // })
//                 toggleStatus.textContent = "Read";
//                 card.appendChild(toggleStatus);
//                 // console.log(Object.getPrototypeOf(book));
//                 console.log(Object.getPrototypeOf(myLibrary[book]));
//                 myLibrary[book].updateReadStatus();
//                 // if (myLibrary[book][key] === true) {
//                 //     let cardData = document.    createElement('div');
//                 //     cardData.textContent = `I have read this book`
//                 //     card.appendChild(cardData);
//                 // } else {
//                 //     let cardData = document.createElement('div');
//                 //     cardData.textContent = `I have not read this book`
//                 //     card.appendChild(cardData);
//                 // }
//             } else {
//                 let cardData = document.createElement('div');
//                 cardData.textContent = `${myLibrary[book][key]}`;
//                 card.appendChild(cardData);
//             }
//         }
//         let removeBtn = document.createElement('button');
//         removeBtn.textContent = "Remove";
//         removeBtn.classList.add('remove-btn')
//         removeBtn.addEventListener('click', function(e) {
//             console.log(`User wants to remove book ${[book]}`);
//             removeBookFromLibrary(myLibrary, [book]);
//             refreshCardData();
//             displayBook(myLibrary);
//         })
//         card.appendChild(removeBtn);
//         cardContainer.appendChild(card);
//     }
// }