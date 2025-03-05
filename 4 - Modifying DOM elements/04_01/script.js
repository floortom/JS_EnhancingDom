function updatePage() {
    let messageDiv = document.getElementById("message");
    messageDiv.innerText = "Hello world!";

    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<p>Updated content</p>";
}
