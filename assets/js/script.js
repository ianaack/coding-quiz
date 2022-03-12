// Variables
var timeLeft = 75;
var timerEl = document.querySelector(".timer-display");
var startPageEl = document.querySelector(".start-page");
var startTitleEl = document.querySelector(".start-title");
var startInstructionsEl = document.querySelector(".instructions");
var startButtonEl = document.querySelector(".start-btn");
var quizEl = document.querySelector(".quiz");
var questionsEl = document.querySelector(".question-container");
var optionsEl = document.querySelector(".options");
var answersEl = document.querySelector(".answer-container");
var feedbackEl = document.querySelector(".feedback");
var submitHighscoreEl = document.querySelector(".submit-highscore");
var highscoreTitleEl = document.querySelector(".highscore-title");
var finalScoreEl = document.querySelector(".final-score");
var initialsEl = document.querySelector(".initials");
var submitFormEl = document.querySelector(".submit-field");
var submitButtonEl = document.getElementById("#submit-btn");

// Quiz Array
var questionsArray = [
  {
    question: "1. Commonly used data types DO NOT include:",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },

  {
    question: "2. Arrays in JavaScript can be used to store ____.",
    options: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    answer: "4. All of the Above",
  },

  {
    question:
      "3. A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },

  {
    question:
      "4. The condition in an if/else statement is enclosed within ____.",
    options: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    answer: "3. Parentheses",
  },

  {
    question:
      "5. String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes",
  },
];
console.log(questionsArray);

function startGame() {
  startPageEl.style.display = "block";
  quizEl.style.display = "none";
  submitHighscoreEl.style.display = "none";

  startButtonEl.addEventListener("click", function () {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = +timeLeft + " seconds remaining";
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        submitHighscore();
        saveScore();
        return;
      }
    }, 1000);
    quiz();
  });
}

function quiz() {
  startPageEl.style.display = "none";
  quizEl.style.display = "block";
  submitHighscoreEl.style.display = "none";
}

function submitHighscore() {
  startPageEl.style.display = "none";
  quizEl.style.display = "none";
  submitHighscoreEl.style.display = "block";
}

startGame();
