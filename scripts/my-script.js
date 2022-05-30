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
    playRound(selection);
    console.log(`Player: ${playerPoints} | Computer: ${computerPoints}`)
}

function game() {

    gameButtons.forEach((button) => {
        // Its necessary to use Arrow function with another function "handler" passed to it.
        // Now its possible to remove the listener.
        button.addEventListener('click', () => {handler(button.id)});
    })
}

function win() {
    let theWinner = document.querySelector('#theWinner');
    theWinner.textContent = "YOU WIN!";
}
function lose() {
  let theWinner = document.querySelector('#theWinner');
  theWinner.textContent = "YOU LOSE!";
}
function tie() {
    let theWinner = document.querySelector('#theWinner');
    theWinner.textContent = "IT's A TIE!";
}

function results() {
    gameButtons.forEach((button) => {
        button.removeEventListener('click', handler);
    }
    )
    if (playerPoints > computerPoints) {
        win();
    } else if (computerPoints > playerPoints) {
        lose();
    } else {
        tie();
    }
}

// Generates a random number from 0 to 2 and use it to get a string from choice Array
function computerPLay() {
    let random_number = Math.floor(3 * Math.random());
    return choice[random_number];

}

function playRound(playerSelection, computerSelection = computerPLay()) {
    if ((playerPoints || computerPoints) < 2) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
    
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
    } else {
        results();
    }
}
game()