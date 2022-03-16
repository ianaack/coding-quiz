var initials = document.getElementById("initials");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.textContent = mostRecentScore;

saveHighScore = (event) => {
  event.preventDefault();

  var score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("./leaderboard.html");
};
