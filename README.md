Project: Library

_______________Instructions_______________

- [x] If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

- [x] All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

- [x] Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

- [ ] Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!

- [ ] Add a button on each book’s display to remove the book from the library.
    - [ ] You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

- [ ] Add a button on each book’s display to change its read status.
    - [ ] To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.



________________Media_______________

bg: Vicki Hamilton (flutie8211) - Pixabay



_______________Tools:_______________

Pull color palette from an image: 
https://coolors.co/image-picker




_______________Resources:________________

Gradients:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients

window.prompt() method:
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

How to create a popup form:
https://www.w3schools.com/howto/howto_js_popup_form.asp

How to center a position: fixed element:
https://stackoverflow.com/questions/2005954/center-a-positionfixed-element

How to blur background when a popup appears:
https://stackoverflow.com/questions/74440193/how-to-fade-background-when-popup-appears

Looping through an array of objects:
https://www.geeksforgeeks.org/how-to-loop-through-an-array-containing-multiple-objects-and-access-their-properties-in-javascript/

Making cards with JS:
https://stackoverflow.com/questions/52739898/making-cards-with-javascript-and-html

Change first letter to uppercase in JS:
https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/

The dialog element:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

Checkbox.checked property:
https://www.w3schools.com/jsref/prop_checkbox_checked.asp