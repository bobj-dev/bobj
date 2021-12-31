const canvas = $('canvas');
const context = canvas.getContext('2d');

var player = {
	position: new Vector(0, 0),
	size: new Vector(16, 16),
	speed: new Vector(0, 0)
};

context.drawImage($('#player'), 10, 10);
