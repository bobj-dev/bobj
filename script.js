const canvas = $('canvas');
const context = canvas.getContext('2d');

var player = new Sprite();

draw();

document.body.addEventListener('keydown', function(e) {
	if (e.keyCode === 38) {
		player.position.y -= player.speed;
	}

	if (e.keyCode === 37) {
		player.position.x -= player.speed;
	}

	if (e.keyCode === 40) {
		player.position.y += player.speed;
	}

	if (e.keyCode === 39) {
		player.position.x += player.speed;
	}
});
