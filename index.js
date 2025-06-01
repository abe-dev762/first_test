const options = [`rock`, `paper`, `scissors`];
const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function getComputerChoicecomputerChoice() {
    const randomIndex = (Math.random() * 3);
    if (randomIndex <= 1) {
        return randomIndex[0];
    } else if (randomIndex <= 2) {
        return randomIndex[1];
    } else {
        return randomIndex[2];
    }
}

function getHumanChoice() {
    getHumanChoice = prompt("Do you choose Rock, Paper, or Scissors ?");
    getHumanChoice = getHumanChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++);
    if (playerSelection === computerSelection) {
        console.log("its a tie!");
    } else if (playerSelection === `rock` && computerSelection === `scissors`);
              (playerSelection === `paper` && computerSelection === `rock`);
              (playerSelection === `scissors` && computerSelection === `paper`); {
                console.log(`You win!`);
                humanScore++;
     }
        else  {
            console.log("You lose!");
            computerScore++;
        }
    }

function playGame() {
    playRound(); {
        console.log("Your Score" + humanScore);
        console.log("Computer Score" + computerScore);
    } if (humanScore > computerScore) {
        console.log("You Win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You Lose the game..");
    } else {
        console.log("It`s a Tie!");
    }
}

playGame();

