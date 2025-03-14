document.addEventListener("DOMContentLoaded", () => {
  let agendaList = document.getElementById("agendaList");

  // Event delegation
  agendaList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log(e.target.textContent + "is removed from agenda.");
      agendaList.removeChild(e.target);
    }
  });
});
