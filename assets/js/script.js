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

// Global Variables
var timerEl = document.querySelector(".timer-display");
var startPageEl = document.querySelector(".start-page");
var startButtonEl = document.querySelector(".start-btn");
var quizSectionEl = document.querySelector(".quiz");
var questionSectionEl = document.querySelector(".question-container");
var answersSectionEl = document.querySelector(".answer-container");
var questionEl = document.querySelector("#question-text");
var optionA = document.querySelector("#option-a");
var optionB = document.querySelector("#option-b");
var optionC = document.querySelector("#option-c");
var optionD = document.querySelector("#option-d");
var feedbackEl = document.querySelector(".feedback");
var scoreLogged = localStorage.getItem("highScore");
var submitHighscoreEl = document.querySelector(".submit-highscore");
var submitButtonEl = document.querySelector("#submit-btn");

var i = 0;
var score = 0;
var timeLeft = 75;

var startGame = function () {
  startPageEl.style.display = "block";
  quizSectionEl.style.display = "none";
  submitHighscoreEl.style.display = "none";
  startButtonEl.addEventListener("click", function () {
    timer();
  });
};

var timer = function () {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Time: " + timeLeft + " second remaining";
      timeLeft--;
    } else if (timeLeft === 0 || i >= questionsArray.length) {
      clearInterval(timeInterval);
      submitHighscore();
      saveScore();
      return;
    }
  }, 1000);
  displayQuestion();
};

var displayQuestion = function () {
  startPageEl.style.display = "none";
  quizSectionEl.style.display = "block";
  submitHighscoreEl.style.display = "none";

  if (i < questionsArray.length) {
    questionEl.textContent = questionsArray[i].question;
    optionA.textContent = questionsArray[i].options[0];
    optionB.textContent = questionsArray[i].options[1];
    optionC.textContent = questionsArray[i].options[2];
    optionD.textContent = questionsArray[i].options[3];
  } else {
    submitHighscore();
    saveScore();
    return;
  }
};

var feedback = function (event) {
  if (i >= questionsArray.length) {
    submitHighscore();
    saveScore();
  } else {
    if (event === questionsArray[i].answer) {
      score += 5;
      feedbackEl.textContent = "Correct!";
    } else {
      timeLeft -= 10;
      feedbackEl.textContent = "Incorrect!";
    }
    scoreTotal = timeLeft + score;
    i++;
    displayQuestion();
  }
};

var saveScore = function () {};
var submitHighscore = function () {};
var getScore = function () {};
var endGame = function () {};
var leaderBoard = function () {};

startGame();
