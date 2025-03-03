let employeeCountSpan = document.getElementById("employeeCount");
let parentParagraph = employeeCountSpan.parentNode;
console.log("Parent of emplyee count: ", parentParagraph);

let statsSection = document.getElementById("statsSection");
let statsChildren = statsSection.child;
console.log("Children of stats section: ", statsChildren);

let salesDept = document.querySelector(".department");
console.log(salesDept);
let nextDept = salesDept.nextElementSibling;
let prevDept = salesDept.previousElementSibling;
console.log("Next sibling: ", nextDept);
console.log("Previous sibling: ", prevDept);

let allDepartments = [];
let currentElement = salesDept;
while (currentElement) {
    if (currentElement.nodeType === Node.ELEMENT_NODE) {
        allDepartments.push(currentElement);
    }
    currentElement = currentElement.nextSibling;
};
console.log("All departments: ", allDepartments);
