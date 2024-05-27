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

  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    console.log(`Human: ${humanChoice}`);  
    console.log(`Computer: ${computerChoice}`);
  } else {
    console.log(humanChoice);
    return;
  }

  pickRock(humanChoice, computerChoice);
  pickPaper(humanChoice, computerChoice);
  pickScissors(humanChoice, computerChoice);
};

// Function for when user picks "rock".
const pickRock = (human, computer) => {

  if (human === 'rock') {

    switch (computer) {

      case 'paper': 
        console.log("You lose. Paper beats rock.");
        break;

      case 'scissors':
        console.log("You win. Rock beats scissors.");
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

startGame();


// Play a single round
// const playRound = () => {

// let humanScore = 0;
// let computerScore = 0;
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

// console.log(humanChoice);
// console.log(computerChoice);

// if (humanChoice === 'rock' && computerChoice === 'paper') {
//   computerScore += 1;
// } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
//   humanScore += 1;
// } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
//   computerScore += 1;
// } else if (humanChoice === 'paper' && computerChoice === 'rock') {
//   humanScore += 1;
// } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
//   computerScore += 1;
// } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
//   humanScore += 1;
// } else {
//   humanScore = humanScore;
//   computerScore = computerScore;
// }

// console.log(`Human: ${humanScore}          Computer: ${computerScore}`);

// };








