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
var triviaQs = {
    Q1 : "What were the first words of King Robert Baratheon to Ned Stark in the first episode of season one?",
    Q2 : "Who said \"Chaos isn't a pit. Chaos is a ladder\".?",
    Q3 : "What is the Lannister's official family motto?",
    Q4 : "Who did King Joffrey use as target practice for his crossbow?",
    Q5 : "Who said this: \"What do we say to the God of death? Not today\"",
    Q6 : "What does Daenerys mean when she says \"Shekh ma shieraki anni\" to Khal Drogo?",
    Q7 : "Where is the house of Black and White, the training temple of the Faceless Men?",
    Q8 : "Who created the Night King?",
    Q9 : "What were the three names of Daenerys' dragons?",
    Q10 : "Who is known as the lightning lord?"
}

var triviaAs = ["You haven't changed."]
var triviaBs = ["You've got fat."]
var triviaCs = ["You look terrible."]
var triviaDs = ["You've aged."]

var correctWrong = document.querySelector("#correct-wrong")

var startBtn = document.querySelector("#house-sigils");
var timerEl = document.querySelector("#timer");
var timerSeconds = document.querySelector("#seconds");
// var houseBtn = startBtn;
var triviaBtns = document.getElementById("trivia");
triviaBtns.style.display= "none";

var secondsLeft = 91;

var correctIncorrect = ["Correct", "Incorrect"]

function startGame() {
    // var houseBtn = houseHighScore();
    // houseBtn.text = houseBtn;
    // console.log(houseBtn);
   var hideHouseBtn = document.getElementById("house-sigils");
   hideHouseBtn.style.display = "none";

   var showTriviaBtn = document.getElementById("trivia");
   showTriviaBtn.style.display = "";

   var hideInstructions = document.getElementById("instructions");
   hideInstructions.style.display="none";
   
    triviaQuestions();
    triviaChoices();
   

}


function triviaQuestions() {
    var triviaQuestion = document.querySelector("h1");
    triviaQuestion.textContent = triviaQs.Q1; 
}

function triviaChoices() {
    var triviaChoiceA = document.getElementById("button1");
    triviaChoiceA.textContent = triviaAs;

    triviaChoiceA.addEventListener("click", function(){
        if(triviaChoiceA) {
            correctWrong.textContent = "Correct!";
        } else {
            correctWrong.textContent = "Wrong!";
            secondsLeft = secondsLeft - 10;
        }

    })

    
}

function startTimer() {
    var gameTimer = setInterval(function() {
        secondsLeft--;
        timerSeconds.textContent = secondsLeft;
        if(secondsLeft === 0) {
          clearInterval(gameTimer);
          
        }
    
      }, 1000);
}

    


startBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startTimer)


