let playerScore = 0
let computerScore = 0
let round = 1

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

// console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)

let choices = document.querySelectorAll('.choices');

const clearGame = () => {
  let resultList = document.querySelector('.results')
  resultList.innerHTML = ""
  playerScore = 0
  computerScore = 0
  let score = document.querySelector('#score')
  score.innerHTML = `User score: ${playerScore} | Computer score: ${computerScore}`
}

const updateScore = () => {
  let score = document.querySelector('#score')

  score.innerHTML = `User score: ${playerScore} | Computer score: ${computerScore}`

  if (playerScore >= 5) {
    alert("The player has won the match!")
    clearGame()
  } else if (computerScore >= 5) {
    alert("The computer has a won the match!")
    clearGame()
  }
}

choices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    let playerSelection = event.target.getAttribute('value')
    let computerSelection = getComputerChoice()
    let resultList = document.querySelector('.results')

    if (playerSelection == computerSelection) {
      console.log("Tie!");
      resultList.innerHTML += `<div>Tie!</div>`
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
      playerScore += 1;
      resultList.innerHTML += `<div>User wins!</div>`
    } else {
      computerScore += 1; 
      resultList.innerHTML += `<div>Computer wins!</div>`
    }

    updateScore();
  })
});

