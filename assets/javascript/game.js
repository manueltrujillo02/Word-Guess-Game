

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




var wins = 0;
var losses = 0;
var guesses = 10;
var guesessofar = null;


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text")
var guessessofarText = document.getElementById("guessessofar-text")
document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess) {
        wins++;
        guesses = 10;
    } else {
        guesses--;
    }
    if (guesses === 0) {
        losses++;
        guesses = 10;
    }
    else if (losses === 3) {
        alert("GAME OVER!")
    }

    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "Guesses left: " + guesses;
    guessessofarText.textContent = "Your Guesses so far: " + userGuess;
    


}


