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

// Start Game function - gets question, resets score, and starts timer
startGame = () => {
  // used to determine if there are more questions in the quiz
  questionCounter = 0;
  // starting score of 0
  score = 0;
  /* avaibleQuestions array variable IS the questionArray. 
  this allows us to add as many questions as we like to the question array*/
  availableQuestions = [...questionArray];
  // call questions function
  getNewQuestion();
  // call timer function
  startTimer();
};

/* Timer function - runs a 75 second countdown timer, that dynamically 
updates every second. When the timer reaches 0, 
the webpage changes to the highscore submission page*/
startTimer = () => {
  // 1 second interval
  var timeInterval = setInterval(quizTimer, 1000);

  function quizTimer() {
    // Time remaining printout
    document.getElementById("timer").innerHTML =
      "Time: " + timeLeft + " seconds remain";
    timeLeft--;
    // If timer runs out clear the interval, and redirect the user to the score submission page
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      window.location.assign("/highscore.html");
    }
  }
};

/* Get New Question function - runs if there are more questions to be answered
Pulls from the question  */
getNewQuestion = () => {
  // if there are no more questions
  if (availableQuestions.length === 0) {
    // save score as "mostRecentScore" in localStorage
    localStorage.setItem("mostRecentScore", score);
    // Takes user to the score submission page
    return window.location.assign("/highscore.html");
  }

  // iterate the question array to pull the next question
  questionCounter++;
  // randomly pulls the next question, so when a player plays again, the questions are not in the same order
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // defines the currentQuestion
  currentQuestion = availableQuestions[questionIndex];
  // prints question from array to element within the HTML
  question.textContent = currentQuestion.question;

  // prints choice to appropriate row
  choices.forEach((choice) => {
    // pulls number from dataset assigned to each choice element within the HTML
    var number = choice.dataset["number"];
    // prints appropriate choices for the question to the corresponding choice box
    choice.textContent = currentQuestion["choice" + number];
  });

  // removes the question from the availableQuestions so they do not duplicate
  availableQuestions.splice(questionIndex, 1);

  // user is able to click on answers
  acceptingAnswers = true;
};

/* Determine if the answer is true or false
If "correct", a green highlight is applied to the box indicating correct,
If "incorrect", a red  */
choices.forEach((choice) => {
  // for each choice add an event listener
  choice.addEventListener("click", (e) => {
    acceptingAnswers = true;
    // local variables
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    var classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    // incorrect/correct response
    if (classToApply === "correct") {
      incrementScore(correctBonus);
    } else {
      timeLeft = timeLeft - 10;
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // add 0.5 second delay so user can see the response
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      // switch to new question
      getNewQuestion();
    }, 500);
  });
});

// correct bonus function (called in if/else statement above)
incrementScore = (num) => {
  score += num;
};

// calls startGame function
startGame();
