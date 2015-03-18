var Game = function(context, width, height) {
	this.context = context;
	this.width = width;
	this.height = height;
	this.snake = new Snake(this.context, this.width, this.height);
	this.rat = new Rat(this.context, this.width, this.height);
	//this.gameMemento = {};//保存游戏初始化信息
}

Game.prototype = {
	Constructor: Game,
	init: function() {
		this.drawCanvasBoundary();
		this.rat.draw();
		this.snake.draw();
		this.initEvent();
	},
	initEvent: function() {
		var self = this;
		window.addEventListener('keydown', function(e) {
			switch(e.keyCode) {
				case 37: self.snake.moveLeft();break;//向左移
				case 38: self.snake.moveUp();break;//向上移
				case 39: self.snake.moveRight();break;//向右移
				case 40: self.snake.moveDown();break;//向下移
			}
		}, true);
	},
	/*saveMemento: function() {
		this.gameMemento.snake = this.snake;
		this.gameMemento.rat = this.rat;
	},
	retrieveMemento: function() {
		this.snake = this.gameMemento.snake;
		this.rat = this.gameMemento.rat;
	},*/
	restart: function() {
		this.snake = new Snake(this.context, this.width, this.height);
		this.rat = new Rat(this.context, this.width, this.height);
	},
	draw: function() {
		try {
			this.snake.move();
		} catch (e) {
			if (e.message == 1) {
				if (confirm("游戏失败，是否重新开始")) {
					//this.retrieveMemento();
					this.restart();
				} else {
					throw new Error(1, "游戏结束");
				}
			}
		}

		this.clearCanvasBoundary();
		this.drawCanvasBoundary();
		this.snake.draw();
		this.rat.draw();
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