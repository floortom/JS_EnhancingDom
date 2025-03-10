// Populating department dropdown
let departmentSelect = document.getElementById("departmentSelect");
["Sales", "Development", "HR", "Management"].forEach((dept) => {
  let option = new Option(dept, dept.toLowerCase());
  departmentSelect.add(option);
});

// Add profile picture
let picDiv = document.getElementById("employeeProfile");
let img = new Image();
img.src = "Harris.jpg";
img.alt = "Employee profile image";
picDiv.appendChild(img);
