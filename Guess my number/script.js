'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const currentNumBox = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const inputBox = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreBox = document.querySelector('.score');
const highScoreBox = document.querySelector('.highscore');

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', () => {
  let inputNum = inputBox.value;
  currentNumBox.textContent = inputNum;

  if (inputNum != randomNum) {
    score--;
    scoreBox.textContent = score;
    if (inputNum > randomNum) {
      message.textContent = 'Too high!';
    }
    if (inputNum < randomNum) {
      message.textContent = 'Too low!';
    }
  }
  if (inputNum == randomNum) {
    message.textContent = 'Correct!';
    if (highScoreBox.textContent < score) highScoreBox.textContent = score;
    score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;
  }
});

againBtn.addEventListener('click', () => {
  currentNumBox.textContent = '?';
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreBox.textContent = score;
});
