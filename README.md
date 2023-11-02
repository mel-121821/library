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

Removing all child elements in a DOM node:
https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

Clear input fields:
https://www.tutorialspoint.com/how-to-clear-the-form-after-submitting-in-javascript-without-using-reset#:~:text=reset()%20is%20a%20built,the%20default%20in%20the%20form.

Data Attributes:
https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/

https://javascript.plainenglish.io/quick-guide-to-using-data-attributes-f1f2c3161d5f

https://plainjs.com/javascript/attributes/setting-getting-and-removing-data-attributes-8/

Removing and item from an array:
https://www.geeksforgeeks.org/different-ways-to-delete-an-item-from-an-array-using-javascript/

Selecting an item that was created with JS in JS: 
https://stackoverflow.com/questions/35349212/select-an-html-element-created-with-js-in-js

Array.splice():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Problems with HTML required tag not working (solution: set event listener to submit instead of click):
https://stackoverflow.com/questions/17966390/how-do-i-make-a-field-required-in-html

Submit event listener not working (solution: the submit event listener can only work on a form tag):
https://stackoverflow.com/questions/32637920/why-does-a-submit-event-listener-not-work-on-a-submit-button

Javascript Array forEach() Method:
https://www.geeksforgeeks.org/javascript-array-foreach-method/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

Input type-number still returns a string:
https://stackoverflow.com/questions/35791767/html-input-type-number-still-returning-a-string-when-accessed-from-javascript

Prototype inheritance (see part on for... in loop iterating over inherited properties):
https://javascript.info/prototype-inheritance

Object keys, values and entries:
https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object

Check if variable is a number (even if it is in string form):
https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number

isNaN() with booleans:
https://stackoverflow.com/questions/60097714/why-isnantrue-or-isnanfalse-is-returning-false

More info on isNaN:
https://stackoverflow.com/questions/115548/why-is-isnannull-false-in-js