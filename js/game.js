var Game = function(context, width, height) {
	this.context = context;
	this.width = width;
	this.height = height;
	this.snake = new Snake(this.context, this.width, this.height);
	this.rat = new Rat(this.context, this.width, this.height);
}

Game.prototype = {
	Constructor: Game,
	init: function() {
		this.drawCanvasBoundary();
		this.rat.draw();
		this.snake.draw();
	},
	draw: function() {
		this.clearCanvasBoundary();
		this.drawCanvasBoundary();
		this.rat.draw();
		this.snake.move();
		this.snake.draw();
	},
	drawCanvasBoundary: function() {
		context.fillStyle = '#fff';
		context.fillRect(0, 0, this.width, this.height);
		context.strokeStyle = '#666';
		context.strokeRect(0, 0, this.width, this.height);
	},
	clearCanvasBoundary: function() {
		this.context.clearRect(0, 0, this.width, this.height);
	}
}