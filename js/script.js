var context,//画布上下文
	canvasWidth = 300,
	canvasHeight = 300,
	game;

window.addEventListener('load', init, true);

//初始化
function init() {
	context = document.getElementById('canvas').getContext('2d');
	game = new Game(context, canvasWidth, canvasHeight);

	game.init();
	//window.requestNextAnimationFrame(gameProcess);
	setTimeout(gameProcess, 1000);
}

function gameProcess(time) {
	game.draw();
	//window.requestNextAnimationFrame(gameProcess);
	setTimeout(gameProcess, 1000);
}

