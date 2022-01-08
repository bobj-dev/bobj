const gravity = 5;

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
            this.speed = new Vector(0, 0);
        }

        if (obj.hasOwnProperty('direction')) {
            this.direction = obj.direction;
        } else {
            this.direction = 1;
        }

        if (obj.hasOwnProperty('velocity')) {
            this.velocity = obj.velocity;
        } else {
            this.velocity = new Vector(5, gravity);
        }

        this.gravity = 0;
    }

    draw() {
        context.translate(this.position.x + (this.direction == -1 ? 16 : 0), this.position.y);
        context.scale(this.direction, 1);
        
        context.drawImage(this.image, 0, 0, 16, 16);
        
        context.resetTransform();
    }

    update() {
        this.direction = Math.sign(this.speed.x) || this.direction;
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y + this.gravity;

        while (this.position.y + 16 >= canvas.height) {
            this.position.y--;
        }
    }
}

draw = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    player.update();
    requestAnimationFrame(draw);
}

resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
