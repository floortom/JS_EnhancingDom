let header = document.querySelector("#dashboardHeader");
console.log(header.textContent);

let firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);

// let highlight = document.querySelector(".highlight");
// console.log(highlight.textContent);

let highlights = document.querySelectorAll(".highlight");
highlights.forEach((item) => {
    console.log(item.textContent);
})