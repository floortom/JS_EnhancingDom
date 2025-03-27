function fetchAndLoadExperiences() {
  fetch("/api/experiences")
    .then((response) => response.json())
    .then((data) => displayExperiences(data))
    .catch((err) => console.error("Error", err));
}

function displayExperiences(experiences) {
  const list = document.getElementById("experienceList");
  list.innerHTML = "";
  experiences.forEach((exp) => {
    list.innerHTML += `
        <li>
            <h3>${exp.company} - ${exp.role}</h3>
            <p>${exp.date}</p>
            <p>${exp.description}</p>
        </li>
    `;
  });
}

function addExperience(event) {}

let sortAscending = true;

function sortExperiences() {}
