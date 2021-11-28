// Started project 28.11.2021 at 14:00pm
let playerPoints = 0;
let computerPoints = 0;

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
        if (computerSelection == "rock") {
            return playerPoints += 0
        } else if (computerSelection == "paper") {
            return computerPoints += 1
        } else if (computerSelection == "scissor") {
            return playerPoints += 1
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return playerPoints += 0
        } else if (computerSelection == "scissor") {
            return computerPoints += 1
        } else if (computerSelection == "rock") {
            return playerPoints += 1
        }

    } else if (playerSelection == "scissor") {
        if (computerSelection == "scissor") {
            return playerPoints += 0
        } else if (computerSelection == "rock") {
            return computerPoints += 1
        } else if (computerSelection == "paper") {
            return playerPoints += 1
        }
    }
    
}

function game() {
    let roundCounter = 0;
    while (roundCounter < 5) {
        console.log(`Player points: ${playerPoints} computer points: ${computerPoints}`)
        playRound()
        roundCounter += 1
    }
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

