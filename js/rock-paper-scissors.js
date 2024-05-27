// This function generates either 'rock', 'paper', or 'scissors'.
const getComputerChoice = () => {

  let randomNum = Math.floor(Math.random() * 3);
  let choice = "";

  if (randomNum === 1) {
    choice = "Rock";
    return choice.toLowerCase();
  } else if (randomNum === 2) {
    choice = "Paper";
    return choice.toLowerCase();
  } else {
    choice = "Scissors";
    return choice.toLowerCase();
  }
};

// Ask user to input 'Rock', 'Paper', or 'Scissor' 
const getHumanChoice = () => {

let humanChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'. : ").toLowerCase();

if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
  return humanChoice;
};

return "You neither picked 'rock', 'paper' or 'scissors'.";
}



// This function prompt user to choose one of the three options and
// generate random strings "rock", "paper", "scissors"
const startGame = () => {

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;

  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    console.log(`Human: ${humanChoice}`);  
    console.log(`Computer: ${computerChoice}`);
  } else {
    console.log(humanChoice);
    return;
  }

  pickRock(humanChoice, computerChoice, humanScore, computerScore);
  pickPaper(humanChoice, computerChoice);
  pickScissors(humanChoice, computerChoice);
};

// Function for when user picks "rock".
const pickRock = (human, computer, computerScore, humanScore) => {

  if (human === 'rock') {

    switch (computer) {

      case 'paper': 
        console.log("You lose. Paper beats rock.");
        computerScore += 1;
        console.log(computerScore);
        break;

      case 'scissors':
        console.log("You win. Rock beats scissors.");
        humanScore += 1;
        console.log(humanScore);
        break;

      default: 
        console.log("Draw!");
    }
  }

};

// Function for when user picks "paper".
const pickPaper = (human, computer) => {

  if (human === 'paper') {

    switch (computer) {

      case 'scissors': 
        console.log("You lose. Scissors beat paper.");
        break;

      case 'rock':
        console.log("You win. Paper beats rock.");
        break;

      default: 
        console.log("Draw!");
    }
  }

};

// Function for when user picks "scissors".
const pickScissors = (human, computer) => {

  if (human === 'scissors') {

    switch (computer) {

      case 'rock': 
        console.log("You lose. Rock beats scissors.");
        break;

      case 'paper':
        console.log("You win. Scissors beat paper.");
        break;

      default: 
        console.log("Draw!");
    }
  }

};

// This function displays score.
const displayScore = () => {
  // When the user picks 'rock'
  pickRock();
}

startGame();









