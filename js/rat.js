var Rat = function(context, width, height) {
	this.width = width;
	this.height = height;
	this.context = context || window.context;
	this.isAlive = true;//表示老鼠是否是活的
	this.x = 0;//老鼠的横坐标
	this.y = 0;//老鼠的纵坐标
	this.move();
}

Rat.prototype = {
	Constructor: Rat,
	move: function() {
		this.x = Math.floor(300*Math.random()/10)*10;
		this.y = Math.floor(300*Math.random()/10)*10;
	},
	draw: function() {
		context.fillStyle = '#eb281d';
		context.fillRect(this.x, this.y, 10, 10);
		context.strokeStyle = '#fff';
		context.strokeRect(this.x, this.y, 10, 10);
	},
	getPos: function() {
		return {x: this.x, y: this.y};
	}
}
