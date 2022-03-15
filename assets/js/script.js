// Quiz Array
var questionArray = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "Strings",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: 3,
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the Above",
    answer: 4,
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "Terminal/Bash",
    choice3: "for loops",
    choice4: "console.log",
    answer: 4,
  },

  {
    question: "The condition in an if/else statement is enclosed within ____.",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parentheses",
    choice4: "Square Brackets",
    answer: 3,
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parentheses",
    answer: 3,
  },
];

// Global Variables
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var timerEl = document.querySelector("timer-display");
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var timeLeft = 75;
var availableQuestions = [];
var correctBonus = 5;
var maxQuestions = 5;
var incorrectPenalty = -10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questionArray];
  getNewQuestion();
  startTimer();
};

startTimer = () => {
  var timeInterval = setInterval(quizTimer, 1000);
  function quizTimer() {
    document.getElementById("timer").innerHTML =
      "Time: " + timeLeft + " seconds remain";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      saveScore();
      submitHighscore();
      return;
    }
  }
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || timeLeft === 0) {
    // go to the end page
    return window.location.assign("/highscore.html");
  }

  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.textContent = currentQuestion.question;

  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.textContent = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];

    var classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(correctBonus);
    }

    if (classToApply === "incorrect") {
      quizTimer(incorrectPenalty);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  });
});

incrementScore = (num) => {
  score += num;
};

decreaseTime = () => {};

startGame();
