/*User's Choice*/
var userInput = "scissors";

/* CPU choice */
function getComputerChoice(){
var randomNumber= Math.floor(Math.random()*3);
var computerChoice;
  switch(randomNumber){
    case 0 :
    computerChoice = "rock"
    break;
    case 1 :
    computerChoice = "paper"
    break;
    case 2 :
    computerChoice = "scissors"
    break;
    default:
    computerChoice = "broken"
    break;
  }
    return computerChoice;
}


/* CPU and userInput evaluation */
function determineWinner (userChoice){
  var cpu = getComputerChoice().toLowerCase();
  var winner;

  /* Display choices to console*/
  console.log("You Choose:",userChoice);
  console.log("CPU chooses:",cpu);

  if(cpu === userChoice){
   winner = "It's a draw. Go again.";
  }

  else{
    switch (cpu){

      case "paper":
      switch (userChoice) {
      case "rock":
      winner = "You tried. You lose.";
      break;
      case "scissors":
      winner = "Cut that CPU in half. You won.";
      break;
      default:
      winner = "broken";
      break;
      }

      break;

      case "rock":
          switch (userChoice) {
          case "paper":
          winner = "You have won.";
          break;
          case "scissors":
          winner = "You got crushed. Try again.";
          break;
          default:
          winner = "broken";
          break;
          }
      break;


      case "scissors":
      switch (userChoice) {
      case "rock":
      winner = "Smash. You're a winner.";
      break;
      case "paper":
      winner = "Sliced. Try again.";
      break;
      default:
      winner = "broken";
      break;
      }
      break;
    }
}
  return winner;
}

function PlayGame(userChoice){
console.log(determineWinner(userChoice));
}

userInput = userInput.toLowerCase();
PlayGame(userInput);
