Function.prototype.inherits = function (SuperClass){
    function Surrogate () {}
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate ();
    this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

m = new MovingObject();
s = new Ship();
a = new Asteroid();

console.log(s.__proto__);
console.log(s.constructor);
console.log(a.__proto__);
console.log(a.constructor);
console.log(m.__proto__);
console.log(m.constructor);
