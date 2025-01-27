// Created a variable for buttonn and selected the class of .show-cat
var button = document.querySelector(".show-cat");
// Declared variable called cat and selected the figure wiht a class of .cat 
var cat = document.querySelector(".cat");

// Adding event listener for button to listen for a click event
button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.remove("disappear");
    }
}); 