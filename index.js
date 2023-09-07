const computerChoiceEl = document.querySelector("#computer-choice img")
const playerChoiceEl = document.querySelector("#player-choice img")
const resultEl = document.querySelector("#result h1")

const possibleOptions = document.querySelectorAll("button")

let userChoice
let computerChoice


possibleOptions.forEach(possbleOption => possbleOption.addEventListener("click", function(e) {
    userChoice = e.target.id
    computerChoice = generateComputerChoice()
    playerChoiceEl.src = `${userChoice}.png`
    computerChoiceEl.src = `${computerChoice}.png`
    chooseWinner(userChoice, computerChoice);



}))

function generateComputerChoice() {
    let random = Math.floor(Math.random() *3)
    return possibleOptions[random].id
}

function chooseWinner(userChoice, computerChoice) {

    if(userChoice == computerChoice) {
        resultEl.textContent = "It's a draw!"
    }

    else if(userChoice == "scissors" & computerChoice == "paper") {
        resultEl.textContent = "You won!"
    }

    else if(userChoice == "rock" & computerChoice == "scissors" ) {
        resultEl.textContent = "You won!"
    }

    else if(userChoice == "paper" & computerChoice == "rock") {

        resultEl.textContent = "You won!"

    }

    else {
        resultEl.textContent = "You lost!"
    }
}



