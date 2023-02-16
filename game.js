
/* The computer will randomly select from the array of  [rock, paper, scissors].
   The player will select rock, paper, or scissors. 
   The two selections will be compared. 
   The winner will be announced.


   getComputerChoice is working properly and saving into computerSelection.
   playerSelection is working properly too. 
   The first round plays correctly.

  
*/
  let computerScore = 0;
  let playerScore = 0;
  const choices = ["Rock","Paper","Scissors"];
  var playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); 
  var computerSelection = getComputerChoice();
  
  function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
  }

  function playRound() {
    let result;
    if ((playerSelection == "rock" && computerSelection == "Rock") || 
        (playerSelection == "paper" && computerSelection == "Paper") ||
        (playerSelection == "scissors" && computerSelection == "Scissors")) {
     result = "Its a tie!"; 
    } else if ((playerSelection == "rock" && computerSelection == "Scissors") ||
              (playerSelection == "scissors" && computerSelection == "Paper") ||
              (playerSelection == "paper" && computerSelection == "Rock")) {
      result = "You win!";
      playerScore++;
    } else {
      result = "You lose!";
      computerScore++;
    }
    console.log(result);
    }
    

    console.log(playRound(playerSelection, computerSelection));

    function game(){
      let finalScore;
      playRound();
  
      if (computerScore == 5){
        finalScore = "Computer wins the final duel!";
      } else if (playerScore == 5){
        finalScore = "You have defeated the evil computer and saved your family!";
      }
      console.log(finalScore);
    }
      

  
   
  

