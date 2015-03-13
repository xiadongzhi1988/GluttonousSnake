var Snake = function(context) {
	this.context = context || window.context;
	this.size = 3;//初始化为3个
	this.left = 150;//默认位置
	this.top = 150;//默认位置
	this.body = [];
	this.init();
}

Snake.prototype = {
	Constructor: Snake,
	init: function() {

		//初始化贪吃蛇body
		for (var i = 0; i < this.size; i++) {
			var node = new BodyNode(i, this.left, this.top, this.context);
			this.body.push(node);
		}
	},
	draw: function() {
		for (var i = 0; i < 3; i++) {
			this.body[i].draw();
		}
	}
}

var BodyNode = function(index, x, y, context) {
	this.length = 10;
	this.x = x + this.length * index;
	this.y = y;
	this.context = context;
}

BodyNode.prototype = {
	Constructor: BodyNode,
	draw: function() {
		context.fillStyle = '#eb281d';
		context.fillRect(this.x, this.y, this.length, this.length);
		context.strokeStyle = '#fff';
		context.strokeRect(this.x, this.y, this.length, this.length);
	}
}