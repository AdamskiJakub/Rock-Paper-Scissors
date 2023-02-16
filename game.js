const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const playerChoiceText = `Your choice: ${playerChoice}`;
    const computerChoiceText = `Computer choice: ${computerChoice}`;
    const resultText = `${playerChoiceText}<br>${computerChoiceText}`;

    if(playerChoice === computerChoice) {
        resultDiv.innerHTML = `${resultText}<br>Draw!`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultDiv.innerHTML = `${resultText}<br>Congratulations You Won!`;
    } else {
        resultDiv.innerHTML = `${resultText}<br>You lost. Try again!`;
    }
}


rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));