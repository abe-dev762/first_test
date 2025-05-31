function getComputerChoice() {
    const options = [`rock`, `paper`, `scissors`];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It`s a tie!"
    }