// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it
let actionButton = document.getElementById("actionButton");
console.log(actionButton);

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one
let infoElements = document.querySelectorAll(".info");
console.log("Info elements querySelector:")
infoElements.forEach(element => {
    console.log(element);
});

let infoElements2 = document.getElementsByClassName("info");
console.log("Info elements getByClassName:");
for(let i = 0; i < infoElements2.length; i++) {
    console.log(infoElements2[i]);
};

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one
let paragraphs = document.querySelectorAll("p");
console.log("Paragraphs querySelector:");
paragraphs.forEach(paragraph => {
    console.log(paragraph);
});

let paragraphs2 = document.getElementsByTagName("p");
console.log("Paragraphs getElementsByTagName:");
for(let i = 0; i < paragraphs2.length; i++) {
    console.log(paragraphs2[i]);
};

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one
let highlights = document.querySelectorAll("span.highlight");
highlights.forEach(highlight => {
    console.log(highlight);
});