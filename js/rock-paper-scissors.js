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

return humanChoice ? humanChoice.toLocaleLowerCase() : "You did not pick one of the three choices.";
};

// This function prompt user to choose one of the three options and
// generate random strings "rock", "paper", "scissors"
const startGame = () => {

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(`Human: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
};

const pickRock = () => {

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

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








