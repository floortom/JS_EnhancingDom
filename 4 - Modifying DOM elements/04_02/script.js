function updatePage() {
    
    // Reading and changing the value of a text input
    let nameInput = document.getElementById("nameInput");
    console.log("Name: ", nameInput.value);
    nameInput.value = "Alfred";

    // Dropdown input
    let deptInput = document.getElementById("departmentSelect");
    deptInput.value = "development";

    // Radio buttons
    let radioButtons = document.querySelectorAll("input[type='radio'][name='status']");
    radioButtons.forEach(btn => {
        if (btn.checked) {
            console.log("Employee status: ", btn.value);
        };
    });

    // Checkboxes
    let subscribe = document.getElementById('newsletterCheckbox');
    console.log("Newsletter subscription: ", subscribe.checked);
    subscribe.checked = true;
};
