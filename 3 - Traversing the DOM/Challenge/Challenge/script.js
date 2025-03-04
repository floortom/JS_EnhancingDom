// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
let cat = document.querySelector("#animalFamilyTree li:nth-child(2)");
console.log(cat);
// 2. List all the children of the cat’s parent and log them.
let catParent = cat.parentNode;
// Convert the HTMLCollection to an array to use forEach
Array.from(catParent.children).forEach(child => {
    console.log("Child of catParent: ", child.textContent);
});
// 3. Identify the cat’s parent's next sibling in the tree and log it.
let catParentSibling = catParent.nextElementSibling;
console.log(catParentSibling ? catParentSibling.textContent : "No next sibling");