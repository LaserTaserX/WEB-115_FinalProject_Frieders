function getSavedJokes() {
    return JSON.parse(localStorage.getItem("jokes") || "[]");
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const prompt = document.getElementsByName("jokePrompt")[0].value;
    const punchLine = document.getElementsByName("jokePunchLine")[0].value;
    const jokeClass = document.getElementsByName("jokeClass")[0].value;

    if (!prompt || !punchLine) {
        alert("Please fill in all fields.");
        return;
    }

    // Create the appropriate joke object based on the selected class
    let joke;
    switch (jokeClass) {
        case "dad":
            joke = new dadJoke(prompt, punchLine);
            break;
        case "knock-knock":
            joke = new knockKnockJoke(prompt, punchLine);
            break;
        case "one-liner":
            joke = new oneLiner(prompt, punchLine);
            break;
        default:
            joke = new Joke(prompt, punchLine, jokeClass);
    }

    const jokes = getSavedJokes();
    jokes.push({ prompt: joke.prompt, punchLine: joke.punchLine, jokeClass: joke.jokeClass });
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
        dataElement.textContent = `${index + 1}. [${joke.jokeClass}] Prompt: ${joke.prompt} — Punch Line: ${joke.punchLine}`;
        
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
    dataElement.textContent = `${randomJoke.jokeClass} Joke: ${randomJoke.prompt} — ${randomJoke.punchLine}`;
    
    // Apply CSS class based on joke type
    const className = `joke-${randomJoke.jokeClass.replace("-", "")}`;
    dataElement.classList.add(className);
    
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

class Joke {
    constructor(prompt, punchLine, jokeClass) {
        this.prompt = prompt;
        this.punchLine = punchLine;
        this.jokeClass = jokeClass;
    }
};

class dadJoke extends Joke {
    constructor(prompt, punchLine) {
        super(prompt, punchLine, "Dad");
    }
};

class knockKnockJoke extends Joke {
    constructor(prompt, punchLine) {
        super(prompt, punchLine, "Knock-Knock");
    }
};

class oneLiner extends Joke {
    constructor(prompt, punchLine) {
        super(prompt, punchLine, "One-Liner");
    }
};