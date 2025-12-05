/**
 "use strict";
 * 
 */


let story = undefined;
var canvas;

let fontOracle;
let questionQuiz = undefined;
//let question = null;


currentQuestion = 0;
score = [];
selectedAnswersData = [];

totalQuestions = null;

questions = null;
container = null;
questionEl = null;
option1 = null;
option2 = null;
option3 = null;
nextButton = null;
previousButton = null;
 restartButton = null;
 result = null;

// let question = undefined;
//let option1Total = undefined;
//let option2Total = undefined;
//let option3Total = undefined;

//var userFullname = AJS.Meta.get("remote-user");

function preload() {
  fontOracle = loadFont("assets/fonts/Alice_in_Wonderland_3.ttf")
  story = loadJSON("assets/json/Oracle_.json");
  questionQuiz = loadJSON("assets/json/questionQuiz.json")
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  /*
  quizCode();
    generateQuestions();
    loadNextQuestion();
    loadPreviousQuestion();
  
  */
}


function draw() {
 // background("#00000000");
  
  displayDialog();
  startQuiz();
  
}


/**
 * Displays the current dialog element
 */
function displayDialog() {
  // Get the current dialog element
  const oracleSays = story.dialog[story.index];

  // Construct the text to display out of the name and the speech
  let displayText = oracleSays.speech ;

  
   
  // Display it on the canvas
  push();
  textAlign(CENTER, CENTER);
  textSize(25);
  fill("#ffffffff");
  textFont(fontOracle);
  text(displayText, windowWidth/2 + 10, 800);
  pop();
  push();
  fill("rgba(0, 0, 0, 0.29)");
  noStroke();
  rect(windowWidth/2 -128, 800 -40 , 280, 100,)
  pop();
  
}

/**
 * If the user presses the mouse, advance the index, but make sure
 * not to go past the end of the array
 */
function mousePressed() {
  // Get the current dialog element
  const oracleSays = story.dialog[story.index];
  
  // Otherwise we should advance the dialog
  story.index += 1;
  if (story.index >= story.dialog.length) {
    story.index = story.dialog.length - 1;
  }
  
} 

function quizCode() {
// QUESTIONS
/*
let questions = questionQuiz.questions;
*/
questions = [
  {
    "question": "Age range?",
    "answer1": "under 18",
    "answer1Total": "1",
    "answer2": "18 - 30",
    "answer2Total": "2",
    "answer3": "over 30",
    "answer3Total": "3"
  },
  {
    "question": "I am very imaginative.",
    "answer1": "Agree",
    "answer1Total": "1",
    "answer2": "Neutral",
    "answer2Total": "2",
    "answer3": "Disagree",
    "answer3Total": "3"
  },
  {
    "question":
      "Select in which order you would value these \"Money, Love & Career",
    "answer1": "Love, Career, Money",
    "answer1Total": "1",
    "answer2": "Money, Career, Love",
    "answer2Total": "3",
    "answer3": "Career, Love, Money",
    "answer3Total": "2"
  },
  {
    "question": "Best Sentence to describe you?",
    "answer1": "You feel superior to other people.",
    "answer1Total": "3",
    "answer2": "You consider yourself more practical than creative.",
    "answer2Total": "2",
    "answer3":
      "Winning a debate matters less to you than making sure no one gets upset.",
    "answer3Total": "1"
  },
  {
    "question": "Which best describes your relationship with food",
    "answer1": "You tend to over-eat when you have company.",
    "answer1Total": "1",
    "answer2": "You tend to eat snacks secretly.",
    "answer2Total": "2",
    "answer3": "You prepare food and don’t even look at the recipe.",
    "answer3Total": "3"
  },
  {
    "question":
      "You make plans with a friend and they cancel on you, what do you do?",
    "answer1":
      "Say \"whatever\" and plan a night that'll be GREAT so they don't cancel again.",
    "answer1Total": "3",
    "answer2": "Feel hurt because you were looking forward to tonight.",
    "answer2Total": "2",
    "answer3": "No problem, you kinda wanted to stay home anyway.",
    "answer3Total": "1"
  },
  {
    "question": "Which of the following colours do you like most?",
    "answer1": "Black",
    "answer1Total": "1",
    "answer2": "Yellow or light blue",
    "answer2Total": "2",
    "answer3": "Red or orange",
    "answer3Total": "3"
  }
]
  
//currentQuestion = 0;
//score = [];
//selectedAnswersData = [];

totalQuestions = questions.length;

container = document.querySelector('.quiz-container');
questionEl = document.querySelector('.question');
option1 = document.querySelector('.option1');
option2 = document.querySelector('.option2');
option3 = document.querySelector('.option3');
nextButton = document.querySelector('.next');
previousButton = document.querySelector('.previous');
restartButton = document.querySelector('.restart');
result = document.querySelector('.result');

}

function startQuiz(){
  // Get the current dialog element
  const oracleSays = story.dialog[story.index];
//12
// how the quiz looks (no text yet)
// "#ff1b1b" "#360568" "#ffe11b" "#e5f0f0"
// "#ad63f8" "#bedad9" "#eda2f0" "#9492cc"
// story.index === 13
  if (story.index === 13){
    
  push();
  fill("#1e053bff");
  noStroke();
  rect(windowWidth/2 -122, 475 , 265, 510,)
  pop();
  push();
  fill("#cf5fd3ff");
  noStroke();
  rect(windowWidth/2 -121, 478 , 260, 500,)
  fill("#360568");
  noStroke();
  rect(windowWidth/2 -120, 480 , 260, 500,)
  pop();
  push();
  fill("#ffe11b");
  noStroke();
  rect(windowWidth/2 -115, 485 , 250, 490,)
  pop();
  push();
  fill("#9492cc");
  stroke("#360568");
  strokeWeight(5)
  rect(windowWidth/2 -110, 490 , 240, 480,)
  pop();
    document.getElementById("quiz").style.display = "flex" ;
    document.getElementById("background3").style.top = "-2560px" ;
    document.getElementById("sword").style.top = "-2850px" ;
    document.getElementById("frame").style.top = "-1320px"; 
    //quiz css stuff
    document.querySelector('.title').style.display = "flex";  
    document.querySelector('.question').style.display = "flex";
    document.querySelector('.controls').style.display = "flex";  
    //document.querySelector('.option').style.top = "100px";
    //for (e of document.querySelector('.option')){
    //  e.style.display="flex"
    //}
    //document.querySelector('.button').style.display = "flex";
    
    
  }
}
//function swordMove

//Function to generate question 
function generateQuestions (index) {

    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);



/*
// Create an array object to store all the quiz answers. Each selected answer should increase the category score by 1. The highest score will be the personality 'type' in the results. 
var answerData = { // one object, with names as keys, scores as values
    "Ninja": 0,
     "Robot": 0,
    "Pirate": 0,
    "Zombie": 0};

// Get all of the .buttons elements
var buttons = document.querySelectorAll(".button");

// Add an onclick event listener to every element with a class of .buttons
for (var i = 0 ; i < buttons.length ; i++) {
    // When an element with .buttons is clicked, run the function called buttonClicked
    buttons[i].onclick = buttonClicked;
    }


// Define what buttonClicked does
function buttonClicked(e) {
    var target = e.target; // 1. `this` is parent, need target
    console.log(target);
    // Get the current element's data-score value
    var selectedType = target.dataset.score;   // 2. score is the value
    // Increase the selected answer's 'type' by 1
    console.log(selectedType);
    answerData[selectedType]++;  // 4. after change of structure
    // Hide the current question div
    this.parentElement.style.display = "none";
    // Work out what the next question div is
    var nextQuestion = this.parentElement.dataset.next;
    // Display the next question element
    console.log(nextQuestion);
    document.getElementById(nextQuestion).style.display = "block"; // no hash!
}*/