# Custom Tournament Bracket Builder
**WEB-115 Final Project Proposal**
Student: Alexander Frieders | Repo: `WEB-115_FinalProject_Frieders`

---

## Overview

This is a website that allows users to create and store self made dad jokes for later usage. Say somebody comes up with a joke on the spot, and dosen't want to forget it. With the help of my website, they will be able to type in the `setup` of the joke and `punchline` of the joke, and click `save` to put it into their `localStorage`, after which at any point they will be able to click a "Pull random joke" button and pull one of many jokes that they saved over time for a quick laugh. If the user ever wants to start over with a new repertoire of jokes, they can clear the `localStorage` and continue adding fresh new jokes.

---

## Features

- User inputs jokes
- User clicks "Save joke"
- Joke gets saved to `localStorage`
- User clicks "Get random joke"
- Joke gets pulled from user's `localStorage`
- Joke gets displayed
- User can repeat process multiple times
- User can clear joke storage
- User can click "Show all jokes" to show every joke that currently resides in the localStorage

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | When the user decides to post every joke inside of `localStorage`, a for loop will be necessary to iterate through every element inside of local storage to make sure that all of the jokes are shown. |
| **Event Listeners** | I will need an event listener for both of the buttons, which will run functions that I create to manipulate `localStorage`. |
| **DOM Element Creation** | When a random joke gets pulled and presented, it will need a new div to put the joke in. This is where I will use the .createElement() method to create a placeholder for the newly pulled jokes. After the first time, I will use the .remove() method to replace the current div with another div to store the next joke. |
| **Classes & Subclasses** | I will make a class called Joke, which had multiple subclasses of different types of jokes, like dad jokes, dark jokes, or anti-humor jokes (some examples, might not be implemented).  |

---

### JSON & Local Storage

The `localStorage` will store jokes so that the user can leave and return to the page without losing any of their recently created jokes.

---

## Tech Stack

- HTML, CSS, JavaScript
- localStorage
- VS Code + GitHub