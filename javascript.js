console.log("Howdy world");

function playRound(playerSelection, computerSelection){
  if (playerSelection==computerSelection){
    console.log("It's a tie");
  }
  else if(playerSelection=="rock" && (computerSelection=="scissors")){
    console.log("You win! Rock beat Scissors");
  }
  else if(playerSelection=="scissors" && computerSelection=="paper"){
    console.log("You win! Scissors beat Paper");
  }
  else if(playerSelection=="paper" && computerSelection=="rock"){
    console.log("You win! Paper beats Rock");
  }
  else{
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}


function computerPlay(){
  let temp=1;
  temp=Math.floor(Math.random()*3)+1;
  switch(temp){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function startGame(){
  let playerSelection=prompt("Enter Rock, Paper or Scissors");

playerSelection=playerSelection.toLowerCase();

const computerSelection=computerPlay();

playRound(playerSelection,computerSelection);
}

const button=document.querySelector('input');
button.addEventListener('click',startGame)

