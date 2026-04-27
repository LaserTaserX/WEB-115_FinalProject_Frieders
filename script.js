document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementsByName("jokePrompt")[0].value;
    const email = document.getElementById("jokePunchLine").value;

    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }
    // Proceed with form submission or further processing

    const formData = { name, email };

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form submitted successfully");

});

document.getElementById("loadData").addEventListener("click", function() {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementsByName("jokePrompt")[0].value = formData.name;
        document.getElementById("jokePunchLine").value = formData.email;
    } else {
        alert("No data found in local storage.");
    }

    console.log("Data loaded from local storage:", savedData);
});

document.getElementById("clearData").addEventListener("click", function() {
    localStorage.removeItem("formData");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementById("jokePunchLine").value = "";
    alert("Data cleared from local storage.");
});