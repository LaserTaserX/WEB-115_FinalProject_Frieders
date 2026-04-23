async function getData() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    });
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
console.log(data);
document.getElementById('joke-container').innerHTML = `<p>${data.joke}</p>`;
} catch (error) {
console.error('Fetch error:', error.message);
}
}

function displayJoke(joke) {
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = `<p>${joke}</p>`;
    getData();
}

document.getElementById("joke-button").addEventListener("click", displayJoke);


