<<<<<<< HEAD
// Game

var startButton = document.getElementsByClassName("button");
var allCircles = document.getElementsByClassName("circle");
var score = document.getElementById("score");
var colorsArray1 = [
  "rgb(255, 0 , 0)",
  "rgb(255, 128, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 127)"
];
var points = 0;

var game = new Game(colorsArray1, allCircles);

$(document).ready(function() {
  $(".button").click(function() {
    if ($(this).html() == "STOP") {
      game.Stop();
      $(".circle").css("background-color", "#FFFFFF");
      $(this).html("START");
      $("#points").html(0);
    } else {
      $(this).html("STOP");
      game.GameTime();
      game.Start();
    }
  });

  $(".button").click(function() {});

  $(".circle").click(function(event) {
    switch (event.currentTarget.style.backgroundColor) {
      case "rgb(255, 0, 0)":
        alert("Game Over");
        console.log("RED");
        points = 0;
        game.Stop();
        $(".circle").css("background-color", "#FFFFFF");
        $(".button").html("START");
        break;
      case "rgb(255, 128, 0)":
        console.log("1 point");
        console.log("ORANGE");
        points++;
        break;
      case "rgb(255, 255, 0)":
        console.log("10 points");
        console.log("YELLOW");
        points += 10;
        break;
      case "rgb(0, 255, 0)":
        console.log("1 point");
        console.log("GREEN");
        points++;
        break;
      case "rgb(0, 0, 255)":
        console.log("1 point");
        console.log("BLUE");
        points++;
        break;
      case "rgb(255, 0, 127)":
        console.log("1 point");
        console.log("PINK");
        points++;
        break;
    }
    $("#points").html(points);
  });
});

