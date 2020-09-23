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
var triviaQs = [
    {
    
    question : ["What were the first words of King Robert Baratheon to Ned Stark in the first episode of season one?"],

//     choices: {
//         fake: "You've haven't changed.",
//         correct: "You've got fat.",
//         fake: "You look terrible.",
//         fake: "You've aged."
//    } 
},

    // question : ["Who said \"Chaos isn't a pit. Chaos is a ladder.\"?"],
    // choices : {
    // correct: "Peter Baelish",
    // fake : "Vaerys",
    // fake : "Cersei Lannister",
    // fake : "Tyrion Lannister",
    // }
];


// var correctIncorrect = ["Correct", "Incorrect"]
// var correctWrong = document.querySelector("#correct-wrong")
// var houseBtn = startBtn;
// var triviaBtns = document.getElementById("trivia");
// triviaBtns.style.display= "none";

var startBtn = document.querySelector("#house-sigils");
var choicesBtns = document.querySelector(".trivia-button");
var triviaQuestion = document.querySelector("#tq");
var timerEl = document.querySelector("#timer");
var timerSeconds = document.querySelector("#seconds");
var startMenu = document.getElementById("cardbox-start");
var triviaBox = document.getElementById("cardbox-trivia");
triviaBox.style.visibility="hidden";
var btnA = document.getElementById("button1");
var btnB = document.getElementById("button2");
var btnC = document.getElementById("button3");
var btnD = document.getElementById("button4");
// triviaBox.setAttribute("class","hide");

var secondsLeft = 91;
var questionNumber = 0;
var i = 0;



function startGame() {
    // var houseBtn = houseHighScore();
    // houseBtn.text = houseBtn;
    // console.log(houseBtn);
  

   
    triviaQuestions();
    // triviaChoices();
   

};


function triviaQuestions() {
    // var choicesStr = choices.toString();
    
    triviaQuestion.textContent = triviaQs[i].question[questionNumber];
    // btnA.textContent = triviaQs
    
   

};

// function triviaChoices() {
//     var triviaChoiceA = document.getElementById("button1");
//     triviaChoiceA.textContent = triviaAs;

//     triviaChoiceA.addEventListener("click", function(){
//         if(triviaChoiceA) {
//             correctWrong.textContent = "Correct!";
//         } else {
//             correctWrong.textContent = "Wrong!";
//             secondsLeft = secondsLeft - 10;
//         }

//     })

    
// }

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
startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", function(){

    // var hideHouseBtn = document.getElementById("house-sigils");
    // hideHouseBtn.style.display = "none";
 
    // var showTriviaBtn = document.getElementById("trivia");
    // showTriviaBtn.style.display = "";
 
    // var hideInstructions = document.getElementById("instructions");
    // hideInstructions.style.display="none";
    
    startMenu.setAttribute("class","hide");
    triviaBox.style.visibility="visible";
    
    
});
choicesBtns.addEventListener("click", function(event){

    if(event.target.matches("button")) {
        console.log ("it works")
    };

    questionNumber++;
    triviaQuestions();
})


