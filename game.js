//Constructor

function Game(colorsArray, allCircles) {
  this.colors = colorsArray;
  this.circles = allCircles;
  this.intervalIdCircles = 0;
  this.counter = 30;
}

// => random button
Game.prototype.PickRandomButton = function() {
  var randomPosition = Math.floor(Math.random() * this.circles.length);
  return this.circles[randomPosition];
};

// => random color
Game.prototype.PickRandomColor = function() {
  var randomNumber = Math.floor(Math.random() * this.colors.length);
  return this.colors[randomNumber];
};

// => assign color to button
Game.prototype.AssignColorToButton = function() {
  var randomButton = this.PickRandomButton();
  var randomColor = this.PickRandomColor();
  randomButton.style.backgroundColor = randomColor;
};

Game.prototype.Start = function() {
  this.intervalIdCircles = setInterval(
    function() {
      $(".circle").css("background-color", "#FFFFFF");
      this.AssignColorToButton();
      $("#countdown").html(this.counter--);
      if (this.counter < 0) {
        this.Result();
        this.Stop();
        $(".button").html("START");
      }
    }.bind(this),
    1000
  );
};

Game.prototype.Stop = function() {
  clearInterval(this.intervalIdCircles);
  this.counter = 30;
 };

Game.prototype.Result = function() {
  if (points >= 50) {
    alert("You win! You scored " + points + " points");
  } else {
    alert("You lost! You scored " + points + " points");
  }
 };
