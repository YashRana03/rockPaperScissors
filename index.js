// Getting the elements to be manipulated from the DOM
const computerChoiceEl = document.querySelector("#computer-choice")
const playerChoiceEl = document.querySelector("#player-choice")
const resultEl = document.querySelector("#result h1")
const possibleOptions = document.querySelectorAll("button")

let playerChoice
let computerChoice

// Adding to each button an event listener that calls the appropriate functions in order for the game to proceed
possibleOptions.forEach(possbleOption => possbleOption.addEventListener("click", function(e) {
    playerChoice = e.target.id
    computerChoice = generateComputerChoice()
    renderChoice(playerChoice, computerChoice);
    chooseWinner(playerChoice, computerChoice);



}))

// Renders the choices on the screen
function renderChoice(plrChoice, compChoice) {

    let toBeRemoved = playerChoiceEl.querySelector("img")
    if(toBeRemoved != null) {
        toBeRemoved.remove()
        computerChoiceEl.querySelector("img").remove()
    }
    
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = `${plrChoice}.png`
    playerChoiceEl.appendChild(img1)
    img2.src = `${compChoice}.png`
    computerChoiceEl.appendChild(img2)
}

// Returns a random option from rock, paper, scissors
function generateComputerChoice() {
    let random = Math.floor(Math.random() *3)
    return possibleOptions[random].id
}

// finds out the winner and displays it on the screen
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



