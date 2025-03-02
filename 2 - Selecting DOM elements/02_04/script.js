let elements = document.querySelectorAll('.content *');
// console.log(elements);

elements.forEach(element => {
    if(element.matches(".active")) {
        console.log(element);
    };
});