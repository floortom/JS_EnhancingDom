// Clone a list item and add it to a list
let taskLst = document.getElementById("taskList");
let frstTsk = taskLst.firstElementChild.cloneNode(true);
frstTsk.textContent = "Review project";
taskLst.insertBefore(frstTsk, taskLst.firstChild);

// Replace an element
let announce = document.getElementById("announcements");
let newAnnouce = document.createElement("p");
newAnnouce.innerText = "New office opening next week";
let oldAnnounce = document.getElementById("announcementText");
announce.replaceChild(newAnnouce, oldAnnounce);

// Remove an element
let removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", () => {
  if (announce.firstChild) {
    announce.removeChild(announce.firstChild);
  }
});
