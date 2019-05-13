

// MovingObject.prototype.move

// MovingObject.prototype.draw(ctx)

// MovingObject.prototype.isCollidedWith(otherMovingObject)

function MovingObject (optionsObject){
    this.pos = optionsObject.pos;
    this.vel = optionsObject.vel;
    this.radius = optionsObject.radius;
    this.color = optionsObject.color;
}

MovingObject.prototype.draw = function (ctx){
    ctx.beginPath();
    ctx.arc(...this.pos, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
};

MovingObject.prototype.move = function (){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
};

module.exports = MovingObject;
