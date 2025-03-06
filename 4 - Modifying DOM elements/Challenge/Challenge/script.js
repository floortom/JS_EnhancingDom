let isBold = false;
function changeStyle() {
    let txt = document.getElementById("dynamicText");
    // Challenge Instructions:
    // 1. When the button is clicked, change the background color of 'dynamicText' to 'lightblue'.
    txt.style.backgroundColor = "lightblue";
    // 2. Change the font size of 'dynamicText' to '18px'.
    txt.style.fontSize = "18px";
    // 3. Toggle the font weight of 'dynamicText' between 'normal' and 'bold' on each button click.
    txt.style.fontWeight = isBold ? "normal" : "bold";
    isBold = !isBold;
    // 4. Change the text color of 'dynamicText' to 'green'.
    txt.style.color = "green";
}
