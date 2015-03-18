var Snake = function(context, width, height) {
	this.width = width;//屏幕的宽度
	this.height = height;//屏幕的宽度
	this.context = context || window.context;
	this.size = 3;//初始化为3个
	this.left = this.width / 2;//默认位置
	this.top = this.height / 2;//默认位置
	this.direction = 2;//贪吃蛇的方向 1.上 2.右 3.下 4.左
	this.moveSize = 10; //每次移动10
	this.nodeSize = 10; //节点的长度
	this.head = null;//头结点
	this.init();
}

Snake.prototype = {
	Constructor: Snake,
	init: function() {
		var curr;
		//初始化贪吃蛇body
		for (var i = 0; i < this.size; i++) {
			var node = new BodyNode(this.nodeSize, this.left - i * this.nodeSize, this.top, this.context);
			if (!this.head) {
				this.head = node;
				curr = this.head;
			} else {
				curr.next = node;
				curr = node;
			}
		}
	},
	draw: function() {
		var curr = this.head;
		for (var i = 0; i < 3; i++) {
			curr.draw();
			curr = curr.next;
		}
	},
	isCrash: function(pos) {//检测贪吃蛇
		//检测是否超出了画布区域
		if (pos.x < 0 || pos.x + this.nodeSize > this.width || pos.y < 0 || pos.y + this.nodeSize > this.height) {
			return true;
		}

		//检测是否碰到了贪吃蛇自身
		var curr = this.head;

		while (curr) {
			if (curr.x === pos.x && curr.y === pos.y) {
				return true;
			}
			curr = curr.next;
		}

		return false;
	},
	move: function() {
		this.moveHead();//每次移动在头部新增一个节点
		this.removeRear();//每次移动将尾部删掉
	},
	moveHead: function() {
		var newHeadPosition = this.getNewHeadPosition();

		if (this.isCrash(newHeadPosition)) {
			throw new Error(1, "Game Over!");
		}

		var newHead = new BodyNode(this.nodeSize, newHeadPosition.x, newHeadPosition.y, this.context);
		newHead.next = this.head;
		this.head = newHead;
	},
	moveUp: function() {
		if (this.direction === 3) { //如果贪吃蛇是向下移动的，则不允许向上移动
			return;
		}

		this.direction = 1;
	},
	moveRight: function() {
		if (this.direction === 4) { //如果贪吃蛇是向左移动的，则不允许向右移动
			return;
		}

		this.direction = 2;
	},
	moveDown: function() {
		if (this.direction === 1) {//如果贪吃蛇是向上移动的，则不允许向下移动
			return;
		}

		this.direction = 3;
	},
	moveLeft: function() {
		if (this.direction == 2) {//如果贪吃蛇是向右移动的，则不允许向左移动
			return;
		}

		this.direction = 4;
	},
	removeRear: function() {
		var curr = this.head.next;
		
		//循环长度 -1次
		for (var i = 0; i < this.size - 1; i++) {
			curr = curr.next;
		}
		curr.next = null;
	},
	getNewHeadPosition: function() {
		var pos = this.head.getPos();
		if (this.direction === 1) {//往上移动
			pos.y -= this.moveSize;
		} else if (this.direction === 2) { //往右移动
			pos.x += this.moveSize;
		} else if (this.direction === 3) {//往下移动
			pos.y += this.moveSize;
		} else if (this.direction === 4) {//往左移动
			pos.x -= this.moveSize;
		}
		return pos;
	}
}



var BodyNode = function(length, x, y, context) {
	this.length = length;
	this.x = x;
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
	},
	move: function(x, y) {
		this.x = x;
		this.y = y;
	},
	getPos: function() {
		return {x: this.x, y: this.y};
	}
}