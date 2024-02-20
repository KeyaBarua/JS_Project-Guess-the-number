"use strict";

let score = 20;
let highscore = 0;
let secret_number = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // Comparing the guess of the user with the secret number.
    // If there is no value.
    if (!guess) {
        displayMessage("⛔ No Number");
    }

    // If the guess is correct
    else if (guess == secret_number) {
        displayMessage("🎉 Correct Number");
        document.querySelector(".output").textContent = secret_number;
        // Changing the highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        // Changing the CSS
        document.querySelector("body").style.backgroundColor = '#189000';
        document.querySelector(".output").style.width = '12rem';
    }

    // If guess is not the secret number
    else if (guess !== secret_number) {
        displayMessage(guess > secret_number ? "📈 Too high!" : "📉 Too low!");
        // Checking if the score is above 0
        if (score > 1) {
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            displayMessage("😟 You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
});


// Implementing the Again button
document.querySelector(".again").addEventListener('click', function () {
    secret_number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#232323";
    document.querySelector(".output").style.width = "8rem";
    document.querySelector(".output").textContent = "?";
    document.querySelector(".guess").value = "";

});
