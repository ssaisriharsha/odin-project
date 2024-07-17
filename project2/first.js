"use strict"

function main() {
    let userScore = 0;
    let computerScore = 0;
    let tries = 0;
    while (tries != 3) {
        let userChoice = prompt("Enter your choice: ").toLowerCase();
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChoice, computerChoice);
        if (userWin) {
            userScore++;
        }
        else if (computerWin) {
            computerScore++;
        }
        else {
            userScore++;
            computerScore++;
        }
        tries++;
        console.log(`user score: ${userScore}, computer score: ${computerScore}`);
    }
    if (userScore > computerScore) {
        console.log("User Wins!");
    }
    else if (computerScore > userScore) {
        console.log("Computer Wins!");
    }
    else {
        console.log("It's a tie."); 
    }
}

function autoChoice() {
    let randNum = Math.random();
    let computerChoice;
    if (randNum < 0.33) {
        computerChoice = "rock";
    }
    else if (randNum > 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }
    return computerChoice;
}

function decider(userChoice, computerChoice) {
    let userWin;
    let computerWin
    if (userChoice == "rock" && computerChoice == "paper") {
        userWin = false;
        computerWin = true;
    }
    else if (userChoice == "paper" && computerChoice == "paper") {
        userWin = true;
        computerWin = false;
    }
    else if (userChoice == "scissor" && computerChoice == "paper") {
        userWin = true;
        computerWin = false;
    }
    else if (userChoice == "paper" && computerChoice == "scissor") {
        userWin = false;
        computerWin = true;
    }
    else if (userChoice == "rock" && computerChoice == "scissor") {
        userWin = true;
        computerWin = false;
    }
    else if (userChoice == "scissor" && computerChoice == "rock") {
        userWin = false;
        computerWin = true;
    }
    else {
        userWin = false;
        computerWin = false;
    }
    return userWin, computerWin;
}

main();