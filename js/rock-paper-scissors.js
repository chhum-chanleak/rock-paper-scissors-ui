let humanScore = 0;
let computerScore = 0;

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

// Return 'rock' when Rock button is clicked
const handleRockButton = () => {
  const computerChoice = getComputerChoice();
  const div = document.querySelector('.result');

   switch (computerChoice) {
    case 'rock': 
      div.textContent = `Human: rock vs Computer: rock -> Draw`;
      break;
    case 'paper': 
      div.textContent = `Human: rock vs Computer: paper -> Computer wins`;
      computerScore += 1;
      displayScore();
      break;
    case 'scissors': 
      div.textContent = `Human: rock vs Computer: scissors -> Human wins`;
      humanScore += 1;
      displayScore();
      break;
    }
    
};

// Return 'paper' when Paper button is clicked
const handlePaperButton = () => {
  const computerChoice = getComputerChoice();
  const div = document.querySelector('.result');

   switch (computerChoice) {
    case 'rock': 
      div.textContent = `Human: paper vs Computer: rock -> Human wins`;
      humanScore += 1;
      displayScore();
      break;
    case 'paper': 
      div.textContent = `Human: paper vs Computer: paper -> Draw`;
      break;
    case 'scissors': 
      div.textContent = `Human: paper vs Computer: scissors -> Computer wins`;
      computerScore += 1;
      displayScore();
      break;
    }
};

// Return 'scissors' when Scissors button is clicked
const handleScissorsButton = () => {
  const computerChoice = getComputerChoice();
  const div = document.querySelector('.result');

   switch (computerChoice) {
    case 'rock': 
      div.textContent = `Human: scissors vs Computer: rock -> Computer wins`;
      computerScore += 1;
      displayScore();
      break;
    case 'paper': 
      div.textContent = `Human: scissors vs Computer: paper -> Human wins`;
      humanScore += 1;
      displayScore();
      break;
    case 'scissors': 
      div.textContent = `Human: scissors vs Computer: scissors -> Draw`;
      break;
    }
};

// Apply event listeners to buttons
const applyEvents = () => {
  hideButton();
  
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');
  const start = document.querySelector('.start-game');

  start.addEventListener('click', startGame);
  rockButton.addEventListener('click', handleRockButton);
  paperButton.addEventListener('click', handlePaperButton);
  scissorsButton.addEventListener('click', handleScissorsButton);
};

// Hide Rock Paper Scissors buttons
const hideButton = () => {
  const inGameButtons = document.getElementsByClassName('in-game');

  for (let i = 0; i < inGameButtons.length; i += 1) {
    inGameButtons[i].style.display = 'none';
  }
};

// start the game
const startGame = () => {
  const start = document.querySelector('.start-game');
  const inGameButtons = document.getElementsByClassName('in-game');

  start.style.display = 'none';

  for (let i = 0; i < inGameButtons.length; i += 1) {
    inGameButtons[i].style.display = 'block';
  }
};

// Reload the page
const reloadPage = () => {
  window.location.reload();
};

// Show running and final scores
const displayScore = () => {
  const score = document.querySelector(`.score`);
  const para = document.createElement('p');
  const restart = document.createElement('button');

  restart.textContent = 'Restart';
  restart.addEventListener('click', reloadPage);

  score.textContent = `
  Human Score: ${humanScore}
  Computer Score: ${computerScore}`;

  if (humanScore === 3) {
    para.textContent = 'The winner is Human.';
    para.appendChild(restart);
    document.body.appendChild(para);
    hideButton();
  } else if (computerScore === 3) {
    para.textContent = 'The winner is Computer.';
    para.appendChild(restart);
    document.body.append(para);
    hideButton();
  } 
};

applyEvents();












