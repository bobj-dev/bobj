class Sprite {
    constructor(obj = {}) {
        if (obj.hasOwnProperty('image')) {
            this.image = obj.image;
        } else {
            this.image = $('#error');
        }

        if (obj.hasOwnProperty('position')) {
            this.position = obj.position;
        } else {
            this.position = new Vector(0, 0);
        }

        if (obj.hasOwnProperty('speed')) {
            this.speed = obj.speed;
        } else {
            this.speed = 8;
        }
    }

    draw() {
        context.drawImage(this.image, ...this.position.toArray(), 16, 16);
    }
}

var clear = function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

var draw = function() {
    clear();
    player.draw();
    requestAnimationFrame(draw);
}
