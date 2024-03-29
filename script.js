const scoreCounter = document.querySelector(".score-counter");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again");

const totalCells = 100;
const totalBombs = 15;
const maxScore = 15;
const bombsList = [];

let score = 0;

function updateScore() {
  score++;
  scoreCounter.innerHTML = score.toString().padStart(5, "0");

  if (score === maxScore) {
    endGame();
  }
}

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", function () {
    if (bombsList.includes(i)) {
      cell.classList.add("cell-bomb");
      endGame(false);
    }

    cell.classList.add("cell-clicked");
    updateScore();
  });

  grid.appendChild(cell);
}

while (bombsList.length < totalBombs) {
  //generate a random number between 1 and 100, inclusive
  const randomNumber = Math.floor(Math.random() * totalCells) + 1;

  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}

function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = "YOU<br>WON";
    endGameScreen.classList.add("win");
  }

  endGameScreen.classList.remove("hidden");
}

playAgainButton.addEventListener("click", function () {
  window.location.reload();
});
