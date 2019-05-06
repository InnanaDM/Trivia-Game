var computerChoices = ["a", "e", "f", "i", "j", "k", "l", "m", "n", "q", "r", "u", "v", "w", "x", "z"]; 
 // computerchoices is given an array with strings
    var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessLetter;
var winningLetter;


    // creates a function that chooses a random letter from the array named computerChoices
function randLetter() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerGuess;
}

    // this function clears resets element box on Html page
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

// this is when page loads it assigns a random letter to winning letter variable
$(document).ready(function () {
    winningLetter = randLetter();
});
    

    // captures a keyboard input. depending on letter pressed it will execute dif functions
document.onkeyup = function(event) {

        // captures key press and converts to a lower case letter and saves it to var guessLetter. charCode inputs the letter that you select and makes it log
    guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
    
        if (guessLetter == winningLetter) {
        // alert box pops if you guess correct letter
        alert("You win! " + "Winning letter is " + winningLetter + ".");
        // increases var wins by 1
        wins++;
        // gets element wins by id. innerHTML connects to html 
        document.getElementById("userWins").innerHTML =
            // makes id userWins equal js var wins
            wins;
            
            guessesLeft = 9;
        // makes winning letter equal random letter
        winningLetter = randLetter();
        // it clears if user guesses same as computer and once you press okay it clears screen(New Game)
        clearBox("userInput");
        
    // -= means minus a given number and it subtracts guessesLeft var by 1
    } else {
        guessesLeft -= 1;
        // gets id from html for guessesLeft
        document.getElementById("remaining").innerHTML =
            // makes id remaining equal to guessesLeft minus 1
            guessesLeft;
            
            console.log(guessesLeft);
        // this is when user inputs a letter the guesses so far on Html lists what letters you pressed and the quotes keeps it as a string
        document.getElementById("userInput").innerHTML += guessLetter + ", ";


        
    
        // if you run out of guess and equals zero it increases losses by 1
    } if (guessesLeft == 0) {
        alert("You lost! " + "Winning letter was " + winningLetter + ".");

    losses += 1;
    // make html = js var losses 
    document.getElementById("userLosses").innerHTML = losses;
    guessesLeft = 9;
    // clears guesses so far after you lose
    clearBox("userInput");

            winningLetter = randLetter();
    } 
}

