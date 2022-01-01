// Started project 28.11.2021 at 14:00pm
let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll('button');

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
function playRound(playerSelection, computerSelection=computerPlay()) {
    // alert(playerSelection)
    
    console.log(`Player: ${playerSelection} | Comp: ${computerSelection}`)
    
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
    console.log(`Your P: ${playerPoints}\ncomputer P: ${computerPoints}\n-----------`)
    if (playerPoints == 1) {
        removeListener()
    }
}
function removeListener() {
    buttons.forEach((button) => {
        button.removeEventListener('click', hey())
    });
}
function buttonId() {
    
    buttons.forEach((button) => {
        c = button.id;
    })
    let b = c;
    return b
}
console.log(buttonId());
console.log(buttonId());

function hey() {
    if (playerPoints == 1) {
        console.log("you win")
    } else {
        playRound(button.id)
    }
}
// diese Funktion ist nur zur übersicht
function myEvent() {
    if (playerPoints == 2) {
        console.log("you are greato!")
    } else {
        buttons.forEach((button) => {
            button.addEventListener('click', function hey() {
                if (playerPoints == 1) {
                    // das hier wird immer wieder ausgelöst
                    console.log("you win")
                } else {
                    playRound(button.id)
                }
    
            });
        });
    } 
}

function game() {
    // dann wird das hier auch immer wieder ausgelöst
    if (playerPoints != 1) {
        myEvent()
    } else {
        console.log("you won")
    }
}
game()
// Wie schaffe ich es "button.id" an eine Variable zu binden?