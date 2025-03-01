// Descendants
let menuItems = document.querySelectorAll("ul > .menu-item");
menuItems.forEach(item => {
    console.log(item.textContent);
});

// First <p> of each section
let firstParagraphs = document.querySelectorAll("section > p:first-child");
firstParagraphs.forEach(par => {
    console.log(par.textContent);
});

// Last <li> of each <ul>
let lastListItems = document.querySelectorAll("ul > li:last-child");
lastListItems.forEach(lItem => {
    console.log(lItem.textContent);
});

// <input> attributes
let emailInputs = document.querySelectorAll("input[type='email'");
emailInputs.forEach(input => {
    console.log(input.placeholder);
});

// every 3rd <li> of each <ul>
let thirdListItems = document.querySelectorAll("ul > li:nth-child(3n)");
thirdListItems.forEach(item => {
    console.log(item.textContent);
});

// <p> immediately following a <h2>
let paragraphsAfterHeading = document.querySelectorAll("h2 + p");
paragraphsAfterHeading.forEach(par => {
    console.log(par.textContent);
});