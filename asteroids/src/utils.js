
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

// Util.inherits = function (childClass, parentClass) {
// // function inherits (childClass, parentClass) {
//     function Surrogate() { }
//     Surrogate.prototype = parentClass.prototype;
//     childClass.prototype = new Surrogate();
//     childClass.prototype.constructor = childClass;
// };

const Util = {
    inherits(childClass, parentClass) {
        function Surrogate() { }
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },
    
};

module.exports = Util;