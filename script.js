const canvas = $('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var player = new Sprite({image: $('#player')});

window.onkeydown = function(e) {
	if (e.key === 'w' || e.key === 'ArrowUp') {
		player.speed.y = -5;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.speed.x = -5;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.speed.y = 5;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.speed.x = 5;
	}
};

window.onkeyup = function (e) {
	if (e.key === 'w' || e.key === 'ArrowUp') {
		player.speed.y = 0;
	}

	if (e.key === 'a' || e.key === 'ArrowLeft') {
		player.speed.x = 0;
	}

	if (e.key === 's' || e.key === 'ArrowDown') {
		player.speed.y = 0;
	}

	if (e.key === 'd' || e.key === 'ArrowRight') {
		player.speed.x = 0;
	}
}

window.onresize = function(e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

draw();

