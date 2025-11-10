let changeImg = document.getElementById("button");
changeImg.addEventListener("click", function () {
  document.getElementById("imgChange").src ="assets/image/Title- PO.png";
  document.getElementById("button").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("button").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("button").style.border = "rgba(0, 0, 0, 0)";
  document.getElementById("textNeed").style.color = "rgb(0, 0, 0)";
  document.getElementById("buttonNeed").style.color = "rgb(0, 0, 0)";

});
