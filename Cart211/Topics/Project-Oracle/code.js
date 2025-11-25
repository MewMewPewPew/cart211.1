"use strict";

window.onscroll = function () {
  console.log("Scroll position: ", window.pageYOffset);
}
//title code
let changeImg = document.getElementById("button");
changeImg.addEventListener("click", function () {

  document.getElementById("imgChange").src = "assets/image/Title-PO.png";
  document.getElementById("button").style.display = "none";
  document.getElementById("textNeed").style.display = "block";
  document.getElementById("buttonNeed").style.color = "#000000";
 
  


})
//privacy code
/*
let changeText = document.getElementById("button2");
changeText.addEventListener("click", function () {
  document.getElementById("answer1").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("answer2").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("text1").style.color = "rgb(0, 0, 0)";
  document.getElementById("answer3").style.color = "rgb(0, 0, 0)";


})*/