let playerPoints = 0;
let computerPoints = 0;
let computerRenderPts = document.querySelector('#computerPoints');
let playerRenderPts = document.querySelector('#playerPoints');

let choice = ["rock", "paper", "scissor"];
const container = document.querySelector('#container').children;
const gameButtons = document.querySelectorAll('.game');


function handler() {
    gameButtons.forEach((button) => {

        if ((playerPoints || computerPoints) < 1) {
            playRound(selection);
            console.log("playerClick: " + selection);
        } else {
            results();
        }
    })
}

function game() {
    let selection;
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selection = button.id;
            if ((playerPoints || computerPoints) < 1) {
                playRound(selection);
                console.log("playerClick: " + selection);
            } else {
                results();
                button.removeEventListener('click',)
            }
        });
    })
}

function results() {
    gameButtons.forEach((button) => {
        button.removeEventListener('click', handler)
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
    console.log(`Your points: ${playerPoints}`)
    console.log(`computer Points: ${computerPoints}`)
}
game()