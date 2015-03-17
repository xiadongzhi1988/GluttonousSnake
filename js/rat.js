var Rat = function(context, width, height) {
	this.width = width;
	this.height = height;
	this.context = context || window.context;
}

Rat.prototype = {
	Constructor: Rat,
	draw: function() {
		var x = Math.floor(300*Math.random()/10)*10,
			y = Math.floor(300*Math.random()/10)*10;

		context.fillStyle = '#eb281d';
		context.fillRect(x, y, 10, 10);
		context.strokeStyle = '#fff';
		context.strokeRect(x, y, 10, 10);
	}
}
