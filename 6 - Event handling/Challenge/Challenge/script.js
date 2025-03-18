document.addEventListener("DOMContentLoaded", () => {
  // Task: React to a button click by changing text in the paragraph with id 'para1'.
  // Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.
  let btn = document.getElementById("changeTextButton");
  btn.addEventListener("click", () => {
    let para1 = document.getElementById("para1");
    para1.innerText = "Clicked!";
  });
  // Task: Change the style of 'para1' on mouseover and mouseout.
  // Add mouseover and mouseout event listeners to 'para1' and change its style.
  let para1 = document.getElementById("para1");
  para1.addEventListener("mouseenter", () => {
    para1.style.color = "green";
  });
  para1.addEventListener("mouseleave", () => {
    para1.style.color = "black";
  });
  // Task: Use event delegation on 'itemList' to display which item was clicked.
  // Add click event listener to 'itemList' and identify the clicked list item.
  let itemList = document.getElementById("itemList");
  itemList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      alert(e.target.textContent + " clicked.");
    }
  });
  // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
  // Add click event listener to 'preventLink' and prevent default action.
  let preventLink = document.getElementById("preventLink");
  preventLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Link blocked!");
  });
});
