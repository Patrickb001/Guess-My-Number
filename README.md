# Guess My Number Project

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
- Guess my number challenge.
- Input a number guess (1-20)
- Score starts at 20 and decreases with each incorrect try. 
- Guessing correctly saves your highscore!
- Try to guess again in the least amount of tries for a new highscore.

## My process

### Built with

- HTML5 markup
- CSS 
- JavaScript (I built the JavaScript component, everything else was prebuilt)
- Flexbox

### What I learned

- How to interact with the DOM and add custom messages using JavaScript

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

- Using If/else statements to create logic control. 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } ...

### Useful resources

- (https://www.udemy.com/course/the-complete-javascript-course/) - This course taught me JavaScript, and helped me build this project and add features onto it in a later repository. 

## Author

- Portfolio Page (https://pprograms.netlify.app/)

## Acknowledgments

A big thank you to Jonas Schmedtmann and his JavaScript Course. I wouldn't be the developer I am today with all of his wonderful knowledge. Link to his course again for anyone who would like to check it out: https://www.udemy.com/course/the-complete-javascript-course/
