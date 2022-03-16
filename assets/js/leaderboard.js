// Global Variables
var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Prints Players Name and Score to Score Board
highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name}: ${score.score}</li>`;
  })
  .join("");
