const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', () => {
    obj = new MovingObject({ pos: [30, 30], vel: [100, 100], radius: 5, color: "#00FF00" });
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    obj.draw(ctx);
});

