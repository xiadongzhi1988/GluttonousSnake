var context,//画布上下文
	canvasWidth = 300,
	canvasHeight = 300,
	snake; 

window.addEventListener('load', init, true);

//初始化
function init() {
	context = document.getElementById('canvas').getContext('2d');
	drawCanvasBoundary();
	snake = new Snake();
	snake.draw();
	rat = new Rat();
	rat.draw();
}

//绘画边界
function drawCanvasBoundary() {
	context.fillStyle = '#fff';
	context.fillRect(0, 0, canvasWidth, canvasHeight);
	context.strokeStyle = '#666';
	context.strokeRect(0, 0, canvasWidth, canvasHeight);
}