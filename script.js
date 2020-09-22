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

var startBtn = document.querySelector("#house-sigils");

function startGame() {
    console.log("game is starting!");
}

startBtn.addEventListener("click", startGame);


