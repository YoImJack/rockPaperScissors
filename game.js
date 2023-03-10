
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
  let playerSelection;
  let computerSelection;
  const choices = ["rock","paper","scissors"];
  const buttons = document.querySelectorAll('.btn');
  const playerPoints = document.querySelector('#playerScore');
  const computerPoints = document.querySelector('#computerScore');

  buttons.forEach((button)=>{button.addEventListener('click',()=>{
  
    playerSelection = button.id;
    game();
    getComputerChoice()
    })
})
  
  
  function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
  }

  function playRound() {
    let result;
    computerSelection = getComputerChoice();
     if ((playerSelection == "rock" && computerSelection == "rock") || 
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")) {     
     result = "Its a tie!"; 
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
              (playerSelection == "scissors" && computerSelection == "paper") ||
              (playerSelection == "paper" && computerSelection == "rock")) {
      result = "You Win!"; 
      playerPoints.textContent = ++playerScore;
      
    } else {
      result = "You lose!";
      computerPoints.textContent = ++computerScore;
    }
    console.log(result);
    }
    

    

    function game(){
      let finalScore;
      playRound();
    
      
  
      if (computerScore == 5){
       finalScore = "Computer wins the final duel!"
       computerScore = 0;
       playerScore = 0;
       computerPoints.textContent = computerScore;
       playerPoints.textContent = playerScore;
      } else if (playerScore == 5){
        finalScore = "Game over, you win!"
        computerScore = 0;
        playerScore = 0;
        computerPoints.textContent = computerScore;
        playerPoints.textContent = playerScore;
      }
      console.log(finalScore);
    }
      
/*
  function endGame(){
  if (finalScore = "Game over, you win!")
  computerScore == 0;
  }
  */

  /* Use the for loop to output even numbers from 2 to 10.
    for (let i = 2; i < 11; i += 2){
    alert(i);
  }
 
 Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

  let i =0;
  while (i < 3) {
  alert(`number ${i}!` );
  i++;
  }



  Write a loop which prompts for a number greater than 100. 
  If the visitor enters another number ??? ask them to input again.

The loop must ask for a number until either the visitor enters a 
number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There???s 
no need to implement a special handling for a non-numeric input in this task.
  

let num; 
 
do { 
  num = prompt("Enter a number greater than 100", 0);
} while (num <=100 && num);



num = prompt("Enter a number");
let n = 2;
num % n === 0 ? : n++




for (let n=2; num % n <= 0; n++){
  alert(num % n)
}
*/
/*

let num = prompt("Enter a number");

nextPrime: 
for (let n = 2; n <= num; n++){       //for each n if n is less or equal to num, add 1 to n
  for(let j = 2; j < n; j++) {     //incrementing  the divisor
   if (n % j == 0) continue nextPrime; //if not prime, skip the remaining part of the body and continue to next iteration of n
  }

  alert (n); // alert primes
}

*/
