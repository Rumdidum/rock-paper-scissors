// Started project 28.11.2021 at 14:00pm
let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll('button');
const oneButton = document.querySelector('#paper');



buttons.forEach((button) => {
    button.addEventListener('click', () => {

    });
});
// oneButton.addEventListener('click', alertFunction);

         

// Working as intended!
function computerPlay() {
    // Everytime computerPlay is called a new random number will generate.
    let random_number = Math.floor(3 * Math.random())
    if (random_number == 0) {
        handsign = "rock";
    } else if (random_number == 1) {
        handsign = "paper";
    } else {
        handsign = "scissor";
    }
    return handsign
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("pick your weapon: ").toLowerCase();
    computerSelection = computerPlay();
    console.log(`Player selection: ${playerSelection} and computer: ${computerSelection}`)

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
    
}

function game() {
    let roundCounter = 0;
    
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

game()

