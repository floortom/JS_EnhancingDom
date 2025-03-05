function changeAttributes() {
    // Changing the source of an image
    let image = document.getElementById("exampleImage");
    image.setAttribute("src", "puppy2.jpg");

    // change link
    let link = document.getElementById("exampleLink");
    link.setAttribute("href", "https://example2.com");
    link.innerText = "Visit Example2.com";
};
