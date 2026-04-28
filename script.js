function getSavedJokes() {
    return JSON.parse(localStorage.getItem("jokes") || "[]");
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const prompt = document.getElementsByName("jokePrompt")[0].value;
    const punchLine = document.getElementsByName("jokePunchLine")[0].value;

    if (!prompt || !punchLine) {
        alert("Please fill in all fields.");
        return;
    }

    const jokes = getSavedJokes();
    jokes.push({ prompt, punchLine });
    localStorage.setItem("jokes", JSON.stringify(jokes));

    alert("Joke saved successfully.");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementsByName("jokePunchLine")[0].value = "";
});

document.getElementById("loadAllData").addEventListener("click", function() {
    const savedJokes = getSavedJokes();

    if (savedJokes.length === 0) {
        alert("No jokes found in local storage.");
        return;
    }

    const outputContainer = document.getElementById("jokeList") || document.createElement("div");
    outputContainer.id = "jokeList";
    outputContainer.innerHTML = "";

    savedJokes.forEach((joke, index) => {
        const dataElement = document.createElement("p");
        dataElement.textContent = `${index + 1}. Prompt: ${joke.prompt} — Punch Line: ${joke.punchLine}`;
        outputContainer.appendChild(dataElement);
        document.body.appendChild(outputContainer);
    });

});

document.getElementById("randomJoke").addEventListener("click", function() {
    const savedJokes = getSavedJokes();

    if (savedJokes.length === 0) {
        alert("No jokes found in local storage.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * savedJokes.length);
    const randomJoke = savedJokes[randomIndex];

    const outputContainer = document.getElementById("jokeList") || document.createElement("div");
    outputContainer.id = "jokeList";
    outputContainer.innerHTML = "";

    const dataElement = document.createElement("p");
    dataElement.textContent = `Random Joke: ${randomJoke.prompt} — ${randomJoke.punchLine}`;
    outputContainer.appendChild(dataElement);

    document.body.appendChild(outputContainer);
});

document.getElementById("clearData").addEventListener("click", function() {
    localStorage.removeItem("jokes");
    document.getElementsByName("jokePrompt")[0].value = "";
    document.getElementsByName("jokePunchLine")[0].value = "";
    const outputContainer = document.getElementById("jokeList");
    if (outputContainer) {
        outputContainer.remove();
    }
    alert("All jokes cleared from local storage.");
});