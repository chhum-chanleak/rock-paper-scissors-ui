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

let humanChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'. : ");

if (humanChoice === null) {
  return "You neither picked 'rock', 'paper' or 'scissors'.";
} else if (humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
  return humanChoice.toLowerCase();
}

return "You neither picked 'rock', 'paper' or 'scissors'.";
}



// This function prompt user to choose one of the three options and
// generate random strings "rock", "paper", "scissors"
const startGame = () => {


  let gameStatus = true;
  let test = 10;
  let humanScore = 0;
  let computerScore = 0;
  
  while (gameStatus) {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
 
    let winnerRock;
    let winnerPaper;
    let winnerScissors;

    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
      console.log(`Human: ${humanChoice}`);  
      console.log(`Computer: ${computerChoice}`);
    } else {
      console.log(humanChoice);
      return;
    }
  
    winnerRock = pickRock(humanChoice, computerChoice);

    if (winnerRock === 'human') {
      humanScore += 1;
    } else if (winnerRock === 'computer') {
      computerScore += 1;
    }

    winnerPaper = pickPaper(humanChoice, computerChoice);
    if (winnerPaper === 'human') {
      humanScore += 1;
    } else if (winnerPaper === 'computer') {
      computerScore += 1;
    }

    winnerScissors = pickScissors(humanChoice, computerChoice);
    if (winnerScissors === 'human') {
      humanScore += 1;
    } else if (winnerScissors === 'computer') {
      computerScore += 1;
    }

    console.log(`Human: ${humanScore}         Computer: ${computerScore}`);
    
    // If either humanScore or computerScore is 5, then stop the loop
    if (humanScore === 5 || computerScore === 5) {
      gameStatus = false;
    }


  }
};

// Function for when user picks "rock".
const pickRock = (human, computer) => {

  if (human === 'rock') {

    switch (computer) {

      case 'paper': 
        console.log("You lose. Paper beats rock.");
        return "computer";

      case 'scissors':
        console.log("You win. Rock beats scissors.");
        return 'human';

      default: 
        console.log("Draw!");
        return "Draw";
    }
  }

};

// Function for when user picks "paper".
const pickPaper = (human, computer) => {

  if (human === 'paper') {

    switch (computer) {

      case 'scissors': 
        console.log("You lose. Scissors beat paper.");
        return 'computer';

      case 'rock':
        console.log("You win. Paper beats rock.");
        return 'human';

      default: 
        console.log("Draw!");
        return "Draw";
    }
  }

};

// Function for when user picks "scissors".
const pickScissors = (human, computer) => {

  if (human === 'scissors') {

    switch (computer) {

      case 'rock': 
        console.log("You lose. Rock beats scissors.");
        return 'computer';

      case 'paper':
        console.log("You win. Scissors beat paper.");
        return 'human';

      default: 
        console.log("Draw!");
        return "Draw";
    }
  }

};

startGame();









