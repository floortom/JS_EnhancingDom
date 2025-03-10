// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.
let contArea = document.getElementById("contentArea");
let btn = document.createElement("button");
btn.innerText = "Add";
contArea.appendChild(btn);

// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.
let newLi = document.createElement("li");
newLi.innerText = "Added task";
let taskLst = document.getElementById("taskList");
taskLst.appendChild(newLi);

// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.
let firstTask = taskLst.firstElementChild.cloneNode(true);
firstTask.innerText = "Starter task";
taskLst.insertBefore(firstTask, taskLst.firstChild);

// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.
let newPar = document.createElement("p");
newPar.innerText = "New paragraph";
contArea.replaceChild(newPar, contArea.firstElementChild);

// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.
let pupImg = document.getElementById("puppyImage");
contArea.removeChild(pupImg);
