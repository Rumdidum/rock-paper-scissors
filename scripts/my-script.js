
let random_number = Math.floor(3*Math.random())


let playerpoints = 0;
let computerpoints = 0;

function computerPlay() {
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
    console.log(playerSelection)
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return playerpoints += 0
        } else if (computerSelection == "paper") {
            return computerpoints += 1
        } else if (computerSelection == "scissor") {
            return playerpoints += 1
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return playerpoints += 0
        } else if (computerSelection == "scissor") {
            return computerpoints += 1
        } else if (computerSelection == "rock") {
            return playerpoints += 1
        }

    } else if (playerSelection == "scissor") {
        if (computerSelection == "scissor") {
            return playerpoints += 0
        } else if (computerSelection == "rock") {
            return computerpoints += 1
        } else if (computerSelection == "paper") {
            return playerpoints += 1
        }
    }
}

function game() {
    let roundCounter = 0;
    while (roundCounter < 5) {
        playRound()
        roundCounter += 1
    }
    if (playerpoints == 5) {
        console.log("you win")
    } else if (computerpoints == 5) {
        console.log("you lose")
    }
}

game()

