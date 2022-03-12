// Variables
var timeLeft = 75;
var timerEl = document.querySelector(".timer-display");
var pageContentEl = document.querySelector(".page-content");
var startPageEl = document.querySelector(".start-page");
var startTitleEl = document.querySelector(".start-title");
var startInstructionsEl = document.querySelector(".instructions");
var startButtonEl = document.querySelector(".start-btn");
var quizEl = document.querySelector(".quiz");
var questionsHiddenEl = document.querySelector(".questions-hidden");
var questionEl = document.getElementById("#question");
var answersHiddenEl = document.querySelector(".answers-hidden");
var answer1 = document.getElementById("#answer-1");
var answer2 = document.getElementById("#answer-2");
var answer3 = document.getElementById("#answer-3");
var answer4 = document.getElementById("#answer-4");
var feedbackEl = document.getElementById("#feedback");
var submitHighscoreEl = document.querySelector(".submit-highscore");
var highscoreTitleEl = document.querySelector(".highscore-title");
var finalScoreEl = document.querySelector(".final-score");
var initialsEl = document.querySelector(".initials");
var submitFormEl = document.querySelector(".submit-field");
var submitButtonEl = document.getElementById("#submit-btn");

// Quiz Array
var quizEl = [
  {
    questionEl: "1. Commonly used data types DO NOT include:",
    answersHiddenEl: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },

  {
    questionEl: "2. Arrays in JavaScript can be used to store ____.",
    answersHiddenEl: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    answer: "4. All of the Above",
  },

  {
    questionEl:
      "3. A very useful tool used during development and debugging for printing content to the debugger is:",
    answersHiddenEl: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },

  {
    questionEl:
      "4. The condition in an if/else statement is enclosed within ____.",
    answersHiddenEl: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    answer: "3. Parentheses",
  },

  {
    questionEl:
      "5. String values must be enclosed within ____ when being assigned to variables.",
    answersHiddenEl: [
      "1. Commas",
      "2. Curly Brackets",
      "3. Quotes",
      "4. Parentheses",
    ],
    answer: "3. Quotes",
  },
];

function countdown() {
  startButtonEl.addEventListener("click", function () {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = "Time: " + timeLeft + " seconds remaining";
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = "Time: " + timeLeft + " second remaining";
        timeLeft--;
      } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        submitHighscore();
      }
    }, 1000);
  });
}

countdown();
