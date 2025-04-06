'use strict';


let secret_num = Math.trunc(Math.random()*20 + 1);
let score = 20;
let highscore = 0;


const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function(newScore) {
  score = newScore;
  document.querySelector('.score').textContent = score;
}

const resetStyles = function() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const checkGuess = function() {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    displayMessage('No Number!');
  }

  if(score > 1) {
    if(guess === secret_num) {
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = secret_num;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    else {
      displayMessage(guess > secret_num ? 'Too High!' : 'Too Low!');
      updateScore(score-1);
    }
  }
  else {
    displayMessage('You lost the game!!!');
    updateScore(0);
  }
};

const resetGame = function() {
  secret_num = Math.trunc(Math.random()*20 + 1);
  score = 20;
  updateScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  resetStyles();
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);

