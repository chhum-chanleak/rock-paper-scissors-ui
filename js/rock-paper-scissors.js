const getComputerChoice = () => {

  let randomNum = Math.floor(Math.random() * 3);
  let choice = "";

  if (randomNum === 1) {
    choice = "Rock";
    return choice;
  } else if (randomNum === 2) {
    choice = "Paper";
    return choice;
  } else {
    choice = "Scissors";
    return choice;
  }
};

// Ask user to input 'Rock', 'Paper', or 'Scissor' 
const getHumanChoice = () => {

  let humanChoice = prompt("Choose 'Rock', 'Paper', or 'Scissor'. : ");
  
  return humanChoice ? humanChoice.toLocaleLowerCase() : "";
};

