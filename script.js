document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const prompt = document.getElementsByName("jokePrompt")[0].value;
    const punchLine = document.getElementById("jokePunchLine").value;

    if (!prompt || !punchLine) {
        alert("Please fill in all fields.");
        return;
    }
    // Proceed with form submission or further processing

    const formData = { prompt, punchLine };

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form submitted successfully");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementById("jokePunchLine").value = "";

});

document.getElementById("loadData").addEventListener("click", function() {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementsByName("jokePrompt")[0].value = formData.prompt;
        document.getElementById("jokePunchLine").value = formData.punchLine;
    } else {
        alert("No data found in local storage.");
    }

    document.createElement("p").textContent = `Prompt: ${formData.prompt}, Punch Line: ${formData.punchLine}`;
});

document.getElementById("clearData").addEventListener("click", function() {
    localStorage.removeItem("formData");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementById("jokePunchLine").value = "";
    alert("Data cleared from local storage.");
});