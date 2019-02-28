//Constructor

function Game() {
    this.colors = ['#FF0000', '#CC6600', '#FFFF00', '00FF00', '#0000FF', 'FF007F'];
    this.circles = [1, 2, 3, 4];
    this.currentTime = 0;
    this.randomPosition = Math.floor(Math.random() * this.circles.length)
    this.randomNumber = Math.floor(Math.random() * this.colors.length)
}

Game.prototype.PickRandomButton = function() {
    return this.circles[this.randomPosition]
}

Game.prototype.PickRandomColor = function () { 
    return this.colors[this.randomNumber]
}

 Game.prototype.AssignColorToButton = function () { 
    document.getElementById(this.randomPosition).style.backgroundColor = this.PickRandomColor();
    console.log("HELLO")
}

Game.prototype.PointsCounter = function() {
    if (this.circles = "#FF0000") {

    }

}

Game.prototype.StartGame = function() {
    return setInterval(function () {
    this.currentTime += 1;
    }, bind(this), 1000);

}

Game.prototype.TimeCounter = function() {
    Math.floor(this.currentTime % 60);
}

Game.prototype.GameSpeed = function() {

}

Game.prototype.EndGame = function() {

}

