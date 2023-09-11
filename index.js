let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Tie!");
  } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
    playerScore += 1;
    console.log("Human player wins!");
  } else {
    computerScore += 1; 
    console.log("Computer player wins!");
  }
};

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)]
};

const getPlayerChoice = () => {
  let playerChoice = '';
  while (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
      playerChoice = prompt("Choose 'rock', 'paper', or 'scissors'.").toLowerCase();
  }
  return playerChoice;
}

console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
