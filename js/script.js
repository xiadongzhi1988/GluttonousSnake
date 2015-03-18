var context,//画布上下文
	canvasWidth = 300,
	canvasHeight = 300,
	game,
	t;

window.addEventListener('load', init, true);

//初始化
function init() {
	context = document.getElementById('canvas').getContext('2d');
	game = new Game(context, canvasWidth, canvasHeight);

	game.init();
	//window.requestNextAnimationFrame(gameProcess);
	t = setTimeout(gameProcess, 1000);
}

function gameProcess(time) {
	try {
		game.draw();
		//window.requestNextAnimationFrame(gameProcess);
		t = setTimeout(gameProcess, 1000);
	} catch (e) {
		if (e.message == 1) {
			clearTimeout(t);
		}
	}
}

