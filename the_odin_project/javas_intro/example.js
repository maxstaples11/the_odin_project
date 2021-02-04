var playerScore = 0;
var compScore = 0;
// prompt user for choice
let playerSelection = prompt("Select rock paper scissors: ");
    //if (playerSelection.toLowerCase() === "rock") {
    //    console.log("You selected rock.");
    //} 
    //if (playerSelection.toLowerCase() === "paper") {
    //    console.log("You selected paper");
    //} 
    //if (playerSelection.toLowerCase() === "scissors") {
    //    console.log("You selected scissors.");
    //}
    //if (playerSelection.toLowerCase() ==null)
    //    console.log("Please choose a valid option.");
let playerChoice = playerSelection.toLowerCase();

// randomize computer choices
function getRandomInt(min, max) {
    min= Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function compThrow() {
    let compRand = getRandomInt(1, 4);
    if (compRand == 1) {
        return "rock";
    } else if (compRand == 2) {
        return "paper";
    } else if (compRand == 3) {
        return "scissors";
    }
}


// play against computer
function playRound (playerChoice) {
    let compChoice = compThrow();
    if (playerChoice == compChoice) {
        return "You selected " + playerChoice + " and the computer selected " + compChoice + ". Tie, no points awarded. Your score is " + playerScore + " and the computer's score is " + compScore + ".";
    } else if (playerChoice == "rock" && compChoice == "paper" || playerChoice == "paper" && compChoice == "scissors" || playerChoice == "scissors" && compChoice == "rock") {
        compScore = (compScore + 1);
        return "You selected " + playerChoice + " and the computer selected " + compChoice + ". Computer wins +1 point. Your score is " + playerScore + " and the computer's score is " + compScore + ".";
    } else if (playerChoice == "paper" && compChoice == "rock" ||
    playerChoice == "rock" && compChoice == "scissors" ||
    playerChoice == "scissors" && compChoice == "paper") {
        playerScore = (playerScore + 1);
        return "You selected " + playerChoice + " and the computer selected " + compChoice + ". Player wins +1 point. Your score is " + playerScore + " and the computer's score is " + compScore + ".";
    }
}
console.log(playRound(playerChoice));