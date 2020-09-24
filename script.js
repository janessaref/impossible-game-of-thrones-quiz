/*
GoT Quiz
1. start the game
    - event listener
    - start the timer
    - score starts at 0
2. questions
    - event listener 
    - correct answers: add to score
    - incorrect answers: subtract time
    - change to next question
3. high score 
    - if timer is = 0, stop game and show final score and input initials
    - if player finishes game, show final score and input initials
    - local storage high score values
    - separate link to view high scores
*/
// array of high scores
var triviaQs = [
    {

        question: ["What were the first words of King Robert Baratheon to Ned Stark in the first episode of season one?"],

        choices: [
            "You've haven't changed.",
            "You look terrible.",
            "You've aged."
        ],

        correctA: "You've got fat.",

    },

    {
        question: ["Who said \"Chaos isn't a pit. Chaos is a ladder.\"?"],
        choices: [
            "Vaerys",
            "Cersei Lannister",
            "Tyrion Lannister"
        ],

        correctA: "Peter Baelish",
    },

    {
        question: ["What is the Lannister's official family motto?"],

        choices: [
            "A Lannister Always Pays His Debts.",
            "Unbent. Unbowed. Unbroken.",
            "Growing Strong."
        ],

        correctA: "Hear Me Roar.",

    },

    {
        question: ["Who is known as the lightning lord?"],

        choices: [
            "Stannis Baratheon",
            "Mance Rayder",
            "Sir Gregor Clegane"
        ],

        correctA: "Beric Dondarrion",

    },
];


// Button variables
var startBtn = document.querySelector("#house-sigils");
var choicesBtns = document.querySelector("#trivia");
var btnA = document.getElementById("button1");
var btnB = document.getElementById("button2");
var btnC = document.getElementById("button3");
var btnD = document.getElementById("button4");

// Question variables
var triviaQuestion = document.querySelector("#tq");
var questionNumber = 0;
var i = 0;

// Timer variables
var timerEl = document.querySelector("#timer");
var timerSeconds = document.querySelector("#seconds");
var secondsLeft = 61;

// Container variables
var startMenu = document.getElementById("cardbox-start");
var triviaBox = document.getElementById("cardbox-trivia");
triviaBox.style.display = "none";
var scoreBox = document.getElementById("cardbox-score");
scoreBox.style.display = "none";

// Correct/wrong variables
var correctIncorrect = ["Correct!", "Incorrect!"];
var correctWrong = document.querySelector("#correct-wrong");

// Scores variables
var highScoreBtn = document.getElementById("highscores");
var finalScore = document.getElementById("score");


function startGame() {

    startMenu.style.display = "none";
    triviaBox.style.display = "block";

    triviaQuestions();
    startTimer();
};


function triviaQuestions() {
    i = questionNumber;
    // new array to hold all answers
    // Shuffle array

    var currentQuestion = [...triviaQs[i].choices, triviaQs[i].correctA];
    currentQuestion = shuffle(currentQuestion);
    // var correctAnswer = triviaQs[i].correctA;
    // console.log(correctAnswer)

    triviaQuestion.textContent = triviaQs[i].question[0];
    btnA.textContent = currentQuestion[0];
    btnB.textContent = currentQuestion[1];
    btnC.textContent = currentQuestion[2];
    btnD.textContent = currentQuestion[3];

    // if (questionNumber < questionNumber.length) {
    //     endQuiz();  

    // }

};

// Shuffle the array of for current question choices
function shuffle(array) {
    let shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled;
}

// End of quiz function 
function endQuiz() {
    triviaBox.style.display = "none";
    scoreBox.style.display = "block";
    
}

// To begin timer function
function startTimer() {
    var gameTimer = setInterval(function () {
        secondsLeft--;
        timerSeconds.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            timerSeconds.textContent = 0;
            clearInterval(gameTimer);
            triviaBox.style.display = "none";
            scoreBox.style.display = "block";
        }
        if (questionNumber == 4) {
            clearInterval(gameTimer);
            finalScore.textContent = secondsLeft;
            triviaBox.style.display = "none";
            scoreBox.style.display = "block";
        }

    }, 1000);
}

// Event listener to start game
startBtn.addEventListener("click", startGame);

// Event listener for all answer buttons
choicesBtns.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        if (event.target.textContent === triviaQs[i]["correctA"]) {
            correctWrong.textContent = correctIncorrect[0];
            console.log(correctWrong)
            secondsLeft = secondsLeft + 5;
            console.log("matches");

        } else {
            correctWrong.textContent = correctIncorrect[1];
            secondsLeft = secondsLeft - 5;


        }
        questionNumber++;
        if (questionNumber == 4) {
            endQuiz();
        } else {
           triviaQuestions();
        }
        

    }

})


