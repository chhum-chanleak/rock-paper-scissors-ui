const getComputerChoice = () => {

  let randomNum = Math.random().toFixed(2);
  let choice = "";

  if (randomNum <= 0.33) {
    choice = "Rock";
    return choice;
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    choice = "Paper";
    return choice;
  } else {
    choice = "Scissors";
    return choice;
  }
   
};
