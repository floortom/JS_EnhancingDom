let news = document.getElementById("newsContent");
let closestArticle = news.closest(".article");
console.log("Closest element article: ", closestArticle);

let mainCont = document.getElementById("mainContent");
let newsInMain = mainCont.contains(news);
console.log("Is news in main: ", newsInMain);