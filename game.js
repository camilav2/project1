<<<<<<< HEAD
//Constructor

function Game(colorsArray, allCircles) {
  this.colors = colorsArray;
  this.circles = allCircles;
  this.intervalIdCircles = 0;
  this.intervalIdGame = 0;
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
  var randomButton = game.PickRandomButton();
  var randomColor = game.PickRandomColor();
  randomButton.style.backgroundColor = randomColor;
};

// => Flip color back to white before it changes again
// Game.prototype.FlipColors =

Game.prototype.Start = function() {
  this.intervalIdCircles = setInterval(function() {
    $(".circle").css("background-color", "#FFFFFF");
    game.AssignColorToButton();
  }, 1000);
};

Game.prototype.Stop = function() {
  clearInterval(this.intervalIdCircles);
};

Game.prototype.GameTime = function() {
  this.intervalIdGame = setInterval(function() {
    game.Start();
  }, 30000);
};

