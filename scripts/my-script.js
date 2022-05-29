let playerPoints = 0;
let computerPoints = 0;

let choice = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll('button');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const btn = document.querySelector('#btn');
console.log(buttons.length);
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id.toLowerCase());
        if (button.id.toLowerCase() == "rock") {
            alert(button.id + " wohoooo!!!")
        } else {
            alert("hmm something went wrong")
        }
    });
})
 
function playerSelect() {
    let selection;
    rock.addEventListener('click', playRound);
}
       
function game() {
    let roundCounter = 0;
    playerSelect()
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelect();
    computerSelection = computerPLay();
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
}

game()