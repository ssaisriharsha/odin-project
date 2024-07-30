/*"use strict"

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

main();

*/function autoChoice() {
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

function scoreAndRoundNumberUpdater(userWin, computerWin, roundElement) {
    roundNumber++;
    roundElement.textContent = `Round: ${roundNumber}`;
    if(userWin&&computerWin) {
        userScore++;
        computerScore++;
    }
    else if (userWin) {
        userScore++;
    }
    else {
        computerScore++;
    }
}

function imgPlacer(imgAlt, selector) {
    placeHolder = document.querySelector(selector);
    if (imgAlt === "rock") {
        placeHolder.innerHTML = `<img src="assets/rock.png" alt="rock" class="display-image">`;
    }
    else if (imgAlt === "paper") {
        placeHolder.innerHTML = `<img src="assets/paper.png" alt="paper" class="display-image">`;
    }
    else {
        placeHolder.innerHTML = `<img src="assets/scissors.png" alt="scissors" class="display-image">`;
    }
}

function main() {
    let roundNumber = 0;
    let userScore = 0;
    let computerScore = 0;
    let roundUpdater = document.querySelector(".round-number-container > .round-number");
    let userScoreUpdater = document.querySelector(".user-score > .user-score-text");
    let computerScoreUpdater = document.querySelector(".computer-score > .computer-score-text");
    let rockContainer = document.querySelector(".choice1");
    let paperContainer = document.querySelector(".choice2");
    let scissorsContainer = document.querySelector(".choice3");
    roundUpdater.textContent = `Round: ${roundNumber}`;
    userScoreUpdater.textContent = `Score: ${userScore}`;
    computerScoreUpdater.textContent = `Score: ${computerScore}`;
    rockContainer.addEventListener("click", () => {
        let userChocie = "rock";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChocie, computerChoice);
        imgPlacer(userChocie, ".user-score > .user-choice");
        imgPlacer(computerChoice, ".computer-score > .computer-choice");
        roundNumber++;
        roundUpdater.textContent = `Round: ${roundNumber}`;
    });
    paperContainer.addEventListener("click", () => {
        let userChoice = "paper";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChoice, computerChoice);
        imgPlacer(userChoice, ".user-score > .user-choice");
        imgPlacer(computerChoice, ".computer-score > .computer-choice")
    });
    scissorsContainer.addEventListener("click", () => {
        let userChoice = "scissors";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChoice, computerChoice);
    });
}

main(); 

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

// function scoreAndRoundNumberUpdater(userWin, computerWin, roundElement, roundNumber, userScore, computerScore) {
//     roundNumber++;
//     roundElement.textContent = `Round: ${roundNumber}`;
//     let userScoreElement = document.querySelector(".user-score > .user-score-text");
//     let computerScoreElement = document.querySelector(".computer-score > .computer-score-text");
//     if(userWin&&computerWin) {
//         userScore++;
//         computerScore++;
//         userScoreElement.textContent = `Score: ${userScore}`;
//         computerScoreElement.textContent = `Score ${computerScore}`;
//     }
//     else if (userWin) {
//         userScore++;
//         userScoreElement.textContent = `Score: ${userScore}`;
//     }
//     else {
//         computerScore++;
//         computerScoreElement.textContent = `Score ${computerScore}`;
//     }
// }

function imgPlacer(imgAlt, selector) {
    placeHolder = document.querySelector(selector);
    if (imgAlt === "rock") {
        placeHolder.innerHTML = `<img src="assets/rock.png" alt="rock" class="display-image">`;
    }
    else if (imgAlt === "paper") {
        placeHolder.innerHTML = `<img src="assets/paper.png" alt="paper" class="display-image">`;
    }
    else {
        placeHolder.innerHTML = `<img src="assets/scissors.png" alt="scissors" class="display-image">`;
    }
}

function main() {
    let roundNumber = 0;
    let userScore = 0;
    let computerScore = 0;
    let roundUpdater = document.querySelector(".round-number-container > .round-number");
    let userScoreUpdater = document.querySelector(".user-score > .user-score-text");
    let computerScoreUpdater = document.querySelector(".computer-score > .computer-score-text");
    let rockContainer = document.querySelector(".choice1");
    let paperContainer = document.querySelector(".choice2");
    let scissorsContainer = document.querySelector(".choice3");
    roundUpdater.textContent = `Round: ${roundNumber}`;
    userScoreUpdater.textContent = `Score: ${userScore}`;
    computerScoreUpdater.textContent = `Score: ${computerScore}`;
    rockContainer.addEventListener("click", () => {
        let userChocie = "rock";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChocie, computerChoice);
        imgPlacer(userChocie, ".user-score > .user-choice");
        imgPlacer(computerChoice, ".computer-score > .computer-choice");
        roundNumber++;
        roundUpdater.textContent = `Round: ${roundNumber}`;
    });
    paperContainer.addEventListener("click", () => {
        let userChoice = "paper";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChoice, computerChoice);
        imgPlacer(userChoice, ".user-score > .user-choice");
        imgPlacer(computerChoice, ".computer-score > .computer-choice");
        roundNumber++;
        roundUpdater.textContent = `Round: ${roundNumber}`;
    });
    scissorsContainer.addEventListener("click", () => {
        let userChoice = "scissors";
        let computerChoice = autoChoice();
        let userWin, computerWin = decider(userChoice, computerChoice);
        imgPlacer(userChoice, ".user-score > .user-choice");
        imgPlacer(computerChoice, ".computer-score > .computer-choice");   
        roundNumber++;
        roundUpdater.textContent = `Round: ${roundNumber}`;                 
    });
}

main();