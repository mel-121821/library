

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

submitBook.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    console.log(myLibrary);
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

// const hP1 = new Book("Harry Potter and the Philisoper's Stone", "J.K. Rowling", 223, true);

// const eragon = new Book("Eragon", "Christopher Paolini", 509, false);
 
// console.log(hP1.read);
// console.log(eragon.read);

// console.log(hP1.info());
// console.log(eragon.info());


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read)); 
    // console.log(myLibrary);
}

// addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);

// addBookToLibrary("Eragon", "Christopher Paolini", 509, false);

function displayBook(myLibrary) {
    for (let book in Object.keys(myLibrary)) {
        console.log([book]);
        let card = document.createElement('div');
        card.dataset.index = [book];
        console.log(card.dataset.index);
        card.classList.add('card');
        for (let key in myLibrary[book]) {
            if (key === "pages") {
                let cardData = document.    createElement('div');
                cardData.textContent = `${myLibrary[book][key]} pages`
                card.appendChild(cardData);
            } else if (key === "read") {
                if (myLibrary[book][key] === true) {
                    let cardData = document.    createElement('div');
                    cardData.textContent = `I have read this book`
                    card.appendChild(cardData);
                } else {
                    let cardData = document.createElement('div');
                    cardData.textContent = `I have not read this book`
                    card.appendChild(cardData);
                }
            } else {
                let cardData = document.createElement('div');
                cardData.textContent = `${myLibrary[book][key]}`;
                card.appendChild(cardData);
            }
        }
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('remove-btn')
        removeBtn.addEventListener('click', function(e) {
            console.log(`User wants to remove book ${[book]}`)
        })
        card.appendChild(removeBtn);
        cardContainer.appendChild(card);
    }
}

// displayBook(myLibrary);

function refreshCardData() {
    console.log(cardContainer.firstChild);
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
        console.log(cardContainer.childNodes);
    }
}




// Code to include capitalized object key on the card
// cardData.textContent = `${(key).replace(/^./, (key[0]).toUpperCase())}: ${myLibrary[book][key]}`;



// _____Problem code to be fixed_____

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