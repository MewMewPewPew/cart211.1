"use strict";

window.onscroll = function () {
  console.log("Scroll position: ", window.pageYOffset);
}


//privacy code
let changeText = document.getElementById("button2");
changeText.addEventListener("click", function () {
  document.getElementById("button2").style.display = "none";
  document.getElementById("answer1").style.display = "none";
  document.getElementById("answer2").style.display = "none";
  document.getElementById("condition").style.display = "flex";
  document.getElementById("understand").style.display = "flex";


})



//should for the "no thanks" event
const noThanks = document.getElementById("answer2")

noThanks.addEventListener("mousemove", moveNoThanks )
function moveNoThanks (){
  document.getElementById("answer2").style.top = "-100px" ;
  document.getElementById("answer2").style.filter = "blur(2px)" ;
  
}

/*
let noThanks = document.querySelector(".answer2");

noThanks.onmouseover = () => {
  document.querySelector(".answer2").style.top = "-400px" ;
 console.log("1")
};
noThanks.onmouseover = () => {
  document.querySelector(".answer2").style.top = "-100px";
   console.log("2")
};

*/


/*

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  
};

function moveNoThanks() {
    const d = dist(user.x, user.y, noThanks.x, noThanks.y);
    const overlap = (d < user.size/2 + noThanks.size/2);
    if (overlap) {
    if (user.x <= noThanks.x) {  
        noThanks.x = noThanks.x + 2 
    }
    if (user.x >= noThanks.x) {  
        noThanks.x = noThanks.x - 2
    }
    if  (user.y <= noThanks.y) {  
       noThanks.y = noThanks.y + 2
    }
     if  (user.y >= noThanks.y) {  
        noThanks.y = noThanks.y - 2
    }
    }    
    }
*/