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
  document.getElementById("condition").style.display = "block";
  document.getElementById("understand").style.display = "flex";


}) 