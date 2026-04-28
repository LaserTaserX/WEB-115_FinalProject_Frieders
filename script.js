const prompt = document.getElementsByName("jokePrompt")[0].value;
const punchLine = document.getElementsByName("jokePunchLine")[0].value;
const formData = { prompt, punchLine };

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const prompt = document.getElementsByName("jokePrompt")[0].value;
    const punchLine = document.getElementsByName("jokePunchLine")[0].value;

    if (!prompt || !punchLine) {
        alert("Please fill in all fields.");
        return;
    }
    // Proceed with form submission or further processing

    const formData = { prompt, punchLine };

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form submitted successfully");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementsByName("jokePunchLine")[0].value = "";

});


document.getElementById("loadData").addEventListener("click", function() {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
        const formData = JSON.parse(savedData);
        const dataElement = document.createElement("p");
        dataElement.textContent = `Prompt: ${formData.prompt}, Punch Line: ${formData.punchLine}`;
        document.body.appendChild(dataElement);
    } else {
        alert("No data found in local storage.");
    }
});

document.getElementById("clearData").addEventListener("click", function() {
    localStorage.removeItem("formData");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementsByName("jokePunchLine")[0].value = "";
    alert("Data cleared from local storage.");
});