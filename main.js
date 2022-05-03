const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.game-card')
const cs_t = document.getElementById("cs");
const ps_t = document.getElementById("ys");
let userChoice;
let computerChoice;
let result
var cs = 0;
var ps = 0;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //  possibleChoices.length
    if (randomNumber === 1) computerChoice = ('rock');
    if (randomNumber === 2) computerChoice = ('scissors');
    if (randomNumber === 3) computerChoice = ('paper');
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) result = ('its a draw!');
    if (computerChoice === 'rock' && userChoice === "paper") result = ('you win!');
    if (computerChoice === 'rock' && userChoice === "scissors") result = ('you lose!');
    if (computerChoice === 'paper' && userChoice === "scissors") result = ('you win!');
    if (computerChoice === 'paper' && userChoice === "rock") result = ('you lose!');
    if (computerChoice === 'scissors' && userChoice === "rock") result = ('you win!');
    if (computerChoice === 'scissors' && userChoice === "paper") result = ('you lose!');
    if (result == 'you win!') ps += 1;
    else if (result == 'you lose!') cs += 1;
    else;
    cs_t.innerHTML = ("Computer: " + cs);
    ps_t.innerHTML = ("You: " + ps);
    resultDisplay.innerHTML = result
}