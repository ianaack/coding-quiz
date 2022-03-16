// Global Variables
var initials = document.getElementById("initials");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Final Score Statement
finalScore.textContent = "Your final score is: " + mostRecentScore;

// Saves the users final score to the localStorage
saveHighScore = (event) => {
  event.preventDefault();

  var score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  // once saved, sends the user to the scoreboard
  window.location.assign("./leaderboard.html");
};
