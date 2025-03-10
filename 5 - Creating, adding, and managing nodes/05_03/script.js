// AppendChild Demo
let taskLst = document.getElementById("taskList");
let newTask = document.createElement("li");
newTask.textContent = "Organize team meeting";
taskLst.appendChild(newTask);

// Insert before
let urgentTask = document.createElement("li");
urgentTask.textContent = "Create project";
taskLst.insertBefore(urgentTask, taskLst.firstChild);

// InnerHTML
let dynCont = document.getElementById("dynamicContent");
dynCont.innerHTML = "<p>New project coming soon!</p>";
