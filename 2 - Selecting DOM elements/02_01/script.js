let header = document.getElementById("mainHeader");
console.log(header.textContent);

let info = document.getElementsByClassName("product-info");
console.log(info[0].textContent);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

for(let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}