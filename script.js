const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');
const resultText = document.querySelector('.result-text');
const playerRunningScore = document.querySelector('#player');
const computerRunningScore = document.querySelector('#computer');
const results = document.querySelector('.results');
const reset = document.createElement ('button');

let playerScore = 0;
let computerScore = 0;


function computerPlay() {
      let num = Math.floor((Math.random() * 3) + 1);
      if ( num == 1) {
          return 'Rock';
      } else if ( num == 2) {
          return 'Paper';
      } else {
          return 'Scissors';
      }
  };


function playRound(playerSelection, computerSelection) {
    if ( playerSelection == 'Rock' && computerSelection == 'Paper' || 
        playerSelection == 'Paper' && computerSelection == 'Scissors' ||
         playerSelection == 'Scissors' && computerSelection == 'Rock') {

            if ( playerScore < 5 && computerScore < 5 ) {
                computerScore += 1;
                 resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
                 computerRunningScore.textContent = `Computer: ${computerScore}`;
            };

    } else if ( playerSelection == 'Rock' && computerSelection == 'Scissors' || 
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {

            if ( computerScore < 5 && playerScore < 5) {
                playerScore += 1;
                resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerRunningScore.textContent = `You: ${playerScore}`;
             };

    } else if ( playerSelection == computerSelection ) {
        if ( playerScore < 5 && computerScore < 5 ) {
            resultText.textContent = `Draw! ${playerSelection} ties with ${computerSelection}.`;
        };
      };

      roundCheck();
 };

 function roundCheck() {
     if (playerScore >= 5) {
         resultText.textContent = `Game over! You win!`;
         reset.textContent = `Reset?`;
         results.appendChild(reset);
     } else if (computerScore >= 5) {
         resultText.textContent = `Game over! Computer wins!`;
         reset.textContent = `Reset?`;
         results.appendChild(reset);
     }
 };


btnR.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnP.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnS.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = ``;
    computerRunningScore.textContent = `Computer: ${computerScore}`;
    playerRunningScore.textContent = `You: ${playerScore}`;
    results.removeChild(reset);
});