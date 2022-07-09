console.log("Howdy world");
let playerCount=0,compCount=0;
function playRound(playerSelection, computerSelection){
  let result=document.querySelector('.result');
  let count=document.querySelector('.count');
  if (playerSelection==computerSelection){
    result.textContent="It's a tie";
  }
  else if(playerSelection=="rock" && (computerSelection=="scissors")){
    result.textContent="You win! Rock beat Scissors";
    playerCount++;
  }
  else if(playerSelection=="scissors" && computerSelection=="paper"){
    result.textContent="You win! Scissors beat Paper";
    playerCount++;
  }
  else if(playerSelection=="paper" && computerSelection=="rock"){
    result.textContent="You win! Paper beats Rock";
    playerCount++;
  }
  else{
    result.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
    compCount++;
  }
  count.textContent=`Player: ${playerCount} Computer: ${compCount}`;
  if(playerCount==5){
    let position=document.querySelector('.position');
    position.textContent="You WIN the game!"
    
  }else if(compCount==5){
    let position=document.querySelector('.position');
    position.textContent="You LOSE the game!"
    
  }
}

function removeState(){
  let position=document.querySelector('.position');
  let result=document.querySelector('.result');
  let count=document.querySelector('.count');
  position.textContent="";
  result.textContent="";
  count.textContent="";
  playerCount=0;
  compCount=0;
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

function startGame(e){
  if (playerCount==5|| compCount==5){
    removeState();
  }
  let playerSelection=e.currentTarget.className.slice(0,-7);


const computerSelection=computerPlay();

playRound(playerSelection,computerSelection);
}

const choiceArr=document.querySelectorAll(".card_container > div");
choiceArr.forEach((e)=>e.addEventListener('click',startGame));




