"use strict";
/**
 * 
 */
let story = undefined;
var canvas;

let fontOracle;


//var userFullname = AJS.Meta.get("remote-user");

function preload() {
  fontOracle = loadFont("assets/fonts/Alice_in_Wonderland_3.ttf")
  story = loadJSON("assets/json/Oracle_.json");
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

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
  const element = story.dialog[story.index];

  // Construct the text to display out of the name and the speech
  let displayText = element.speech;



  // Display it on the canvas
  push();
  textAlign(CENTER, CENTER);
  textSize(25);
  fill("#ffffffff");
  textFont(fontOracle);
  text(displayText, windowWidth / 2 + 10, 800);
  pop();
  push();
  fill("rgba(0, 0, 0, 0.29)");
  noStroke();
  rect(windowWidth / 2 - 128, 800 - 40, 280, 100,)
  pop();

}

/**
 * If the user presses the mouse, advance the index, but make sure
 * not to go past the end of the array
 */
function mousePressed() {
  // Get the current dialog element
  const element = story.dialog[story.index];

  // Otherwise we should advance the dialog
  story.index += 1;
  if (story.index >= story.dialog.length) {
    story.index = story.dialog.length - 1;
  }

}
function startQuiz() {
  // Get the current dialog element
  const element = story.dialog[story.index];
  //12
  // how the quiz looks (no text yet)
  // "#ff1b1b" "#360568" "#ffe11b" "#e5f0f0"
  // "#ad63f8" "#bedad9" "#eda2f0" "#9492cc"
  if (story.index === 13) {

    push();
    fill("#1e053bff");
    noStroke();
    rect(windowWidth / 2 - 122, 475, 265, 510,)
    pop();
    push();
    fill("#cf5fd3ff");
    noStroke();
    rect(windowWidth / 2 - 121, 478, 260, 500,)
    fill("#360568");
    noStroke();
    rect(windowWidth / 2 - 120, 480, 260, 500,)
    pop();
    push();
    fill("#ffe11b");
    noStroke();
    rect(windowWidth / 2 - 115, 485, 250, 490,)
    pop();
    push();
    fill("#9492cc");
    stroke("#360568");
    strokeWeight(5)
    rect(windowWidth / 2 - 110, 490, 240, 480,)
    pop();
    document.getElementById("quiz").style.display = "flex";
    document.getElementById("construction").style.display = "flex";
    document.getElementById("background3").style.marginTop = "-112px";

    //document.getElementById("q1").style.display = "flex";
  }
}
//function swordMove
