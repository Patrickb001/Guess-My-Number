'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20; 
let highScore= 0;
const displayMessage= function (message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if(!guess){
    // document.querySelector('.message').textContent = 'No Number! โ'
    displayMessage('No Number! โ');

    // When Player wins
  } else if (guess === secretNumber){
    // document.querySelector('.message').textContent = '๐Correct Number!'
    displayMessage('๐Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; 

    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1){
      displayMessage( guess > secretNumber ? 'Too high! ๐' : 'Too low! ๐');
      score--; 
      document.querySelector('.score').textContent =   score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! ๐ฅ';
      document.querySelector('.score').textContent = 0;
    }
  }  
})

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  // document.querySelector('.message').textContent='Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '';
})
