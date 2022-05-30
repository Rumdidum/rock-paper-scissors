let playerPoints = 0;
let computerPoints = 0;
let computerRenderPts = document.querySelector('#computerPoints');
let playerRenderPts = document.querySelector('#playerPoints');

const choice = ["rock", "paper", "scissor"];
const container = document.querySelector('#container').children;
const gameButtons = document.querySelectorAll('.game');
const playerChoice = document.querySelector('#playerChoice').firstElementChild;
const computerChoice = document.querySelector('#computerChoice').firstElementChild;
// playerChoice.textContent = "FUUUUUK!";

function handler(selection) {
    // this is broken because it loops until the last "scissor"
    if ((playerPoints || computerPoints) < 5) {
        playRound(selection);
    } else {
        results();
    }
}

function game() {
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {handler(button.id)});
    })
}

function lose() {

}
function win() {
}

function results() {
    gameButtons.forEach((button) => {
        button.removeEventListener('click', handler);
    }
    )
    if (playerPoints > computerPoints) {
        console.log("you win")
    } else if (computerPoints > playerPoints) {
        console.log("you lose")
    } else {
        console.log("its a tie")
    }
    console.log(`Your points: ${playerPoints}`)
    console.log(`computer Points: ${computerPoints}`)
}

// Generates a random number from 0 to 2 and use it to get a string from choice Array
function computerPLay() {
    let random_number = Math.floor(3 * Math.random());
    return choice[random_number];

}

function playRound(playerSelection, computerSelection = computerPLay()) {
    // playerSelection = playerClick();
    console.log(playerSelection + " some fun");
    // computerSelection = computerPLay();
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    console.log(`Player selection: ${playerSelection} and computer: ${computerSelection}`);

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerPoints += 1
        } else if (computerSelection == "scissor") {
            playerPoints += 1
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            computerPoints += 1
        } else if (computerSelection == "rock") {
            playerPoints += 1
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            computerPoints += 1
        } else if (computerSelection == "paper") {
            playerPoints += 1
        }
    }
    computerRenderPts.textContent = computerPoints;
    playerRenderPts.textContent = playerPoints;
}
game()