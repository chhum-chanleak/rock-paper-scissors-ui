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

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

// Play a single round
const playRound = (human, computer) => {

  console.log(human);
  console.log(computer);

  if (human === 'rock' && computer === 'paper') {
    computerScore += 1;
  } else if (human === 'rock' && computer === 'scissors') {
    humanScore += 1;
  } else if (human === 'paper' && computer === 'scissors') {
    computerScore += 1;
  } else if (human === 'paper' && computer === 'rock') {
    humanScore += 1;
  } else if (human === 'scissors' && computer === 'rock') {
    computerScore += 1;
  } else if (human === 'scissors' && computer === 'paper') {
    humanScore += 1;
  } else {
    humanScore = humanScore;
    computerScore = computerScore;
  }

  console.log(`Human: ${humanScore}          Computer: ${computerScore}`);

};

playRound(humanChoice, computerChoice);







