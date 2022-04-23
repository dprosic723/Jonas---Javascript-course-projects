"use strict";

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

const player0 = document.querySelector(".player--0");
const current0 = document.querySelector("#current--0");
const score0 = document.querySelector("#score--0");

const player1 = document.querySelector(".player--1");
const current1 = document.querySelector("#current--1");
const score1 = document.querySelector("#score--1");

const theDice = document.querySelector(".dice");

let playerTurn = 0;

rollBtn.addEventListener("click", () => {
  let dice = rollTheDice();
  displayDice(dice);
  let currentScore = document.querySelector(".player--active .current-score");
  if (dice == 1) {
    displayCurrentScore(playerTurn, 0);
    changePlayerTurn();
  } else {
    displayCurrentScore(playerTurn, dice + Number(currentScore.textContent));
  }
});

holdBtn.addEventListener("click", () => {
  let currentScore = document.querySelector(".player--active .current-score");
  let oldScore = document.querySelector(".player--active .score");
  let totalScore =
    Number(currentScore.textContent) + Number(oldScore.textContent);
  oldScore.textContent = totalScore;
  displayCurrentScore(playerTurn, 0);
  if (totalScore < 50) {
    changePlayerTurn();
  } else {
    playerWins();
  }
});

newGameBtn.addEventListener("click", () => {
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  displayCurrentScore(0, 0);
  displayCurrentScore(1, 0);
  let scores = document.querySelectorAll(".score");
  scores[0].textContent = 0;
  scores[1].textContent = 0;
  displayDice(6);
  document.querySelector(".player--active").classList.remove("player--winner");
  document.querySelector(".player--active .name").textContent =
    "PLAYER " + `${playerTurn + 1}`;
  changePlayerTurn();
});

function rollTheDice() {
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
}

function displayCurrentScore(playerTurn, score) {
  playerTurn ? (current1.textContent = score) : (current0.textContent = score);
}

function changePlayerTurn() {
  playerTurn = playerTurn ? 0 : 1;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

function displayDice(dice) {
  theDice.src = "dice-" + dice + ".png";
}

function playerWins() {
  document.querySelector(".player--active").classList.add("player--winner");
  document.querySelector(".player--active .name").textContent += " WINS!!!";
  rollBtn.disabled = true;
  holdBtn.disabled = true;
}
