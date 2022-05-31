let flag = true;
let playerPoints = 0;
let computerPoints = 0;
let computerRenderPts = document.querySelector('#computerPoints');
let playerRenderPts = document.querySelector('#playerPoints');

const choice = ["rock", "paper", "scissor"];
const container = document.querySelector('#container').children;
const gameButtons = document.querySelectorAll('.game');
const playerChoice = document.querySelector('#playerChoice').firstElementChild;
const computerChoice = document.querySelector('#computerChoice').firstElementChild;



function handler(selection) {
    if (flag != false) {
        if (selection === "scissor") {
            let audio = new Audio('sounds/scissors.wav');
            audio.play();
        } else if (selection === "rock") {
            let audio = new Audio('sounds/rock.wav');
            audio.play();
        } else if (selection === "paper") {
            let audio = new Audio('sounds/paper.wav');
            audio.play();
        }
        playRound(selection);
        console.log(`Player: ${playerPoints} | Computer: ${computerPoints}`);
    }
}

function runGame() {
    if (flag != false) {
        gameButtons.forEach((button) => {
            // Its necessary to use Arrow function with another function "handler" passed to it.
            // Now its possible to remove the listener.
            button.addEventListener('click', () => {handler(button.id)});
        })
    }
}

function win() {
    let theWinner = document.querySelector('#theWinner');
    theWinner.textContent = "YOU WIN!";
    let audio = new Audio('sounds/win.wav');
    audio.play();
    flag = false;
}
function lose() {
    let theWinner = document.querySelector('#theWinner');
    theWinner.textContent = "YOU LOSE!";
    let audio = new Audio('sounds/lose.wav');
    audio.play();
    flag = false;
}

function results() {
    gameButtons.forEach((button) => {
        button.removeEventListener('click', handler);
    }
    )
    if (flag === true) {

        if (playerPoints > computerPoints) {
            win();
        } else if (computerPoints > playerPoints) {
            lose();
        } else {
            tie();
        }
    }
}

// Generates a random number from 0 to 2 and use it to get a string from choice Array
function computerPLay() {
    let random_number = Math.floor(3 * Math.random());
    return choice[random_number];

}

function checkPoints() {
    if (!((playerPoints < 5) && (computerPoints < 5))) {
        results()
    }
}

function playRound(playerSelection, computerSelection = computerPLay()) {
    
    if ((playerPoints < 5) && (computerPoints < 5)) {
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
    
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                computerPoints += 1;
            } else if (computerSelection == "scissor") {
                playerPoints += 1;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissor") {
                computerPoints += 1;
            } else if (computerSelection == "rock") {
                playerPoints += 1;
            }
        } else if (playerSelection == "scissor") {
            if (computerSelection == "rock") {
                computerPoints += 1;
            } else if (computerSelection == "paper") {
                playerPoints += 1;
            }
        }
    } else {
        results();
    }
    computerRenderPts.textContent = computerPoints;
    playerRenderPts.textContent = playerPoints;
    checkPoints()
}
runGame();

