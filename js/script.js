// Created a variable for buttonn and selected the class of .show-cat
var button = document.querySelector(".show-cat");
// Declared variable called cat and selected the figure wiht a class of .cat 
var cat = document.querySelector(".cat");

// Adding event listener and event handler for button to listen for a click event
button.addEventListener("click", function() {
    // Adding the show class
    cat.classList.add("show");
});