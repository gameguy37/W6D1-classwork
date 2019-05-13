// function sum () {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }


// function sum(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4));

// Function.prototype.myBind = function(context, ...bindArgs){
//     return (...callArgs) => {
//         return this.apply(context, bindArgs.concat(callArgs));
//     };
// };

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// true

function curriedSum(numArgs) {
    const numbers = [];
    _curriedSum = (num) => {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc, ele) => acc + ele);
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// console.log(curriedSum(3)(3)(2)(2));

Function.prototype.curry = function(numArgs) {
    const args = [];
    const _curriedArgs = (arg) => {
        args.push(arg);
        if (args.length === numArgs) {
            return this.apply(this, args);
        } else {
            return _curriedArgs;
        }
    };
    return _curriedArgs;
};
console.log(curriedSum.curry(4)(3)(2)(3)(4));

// function sum (...args) {
//     return args.reduce((acc, el) => acc + el);
// }
// console.log(sum(1,2,3,4,5));

// const currySum = sum.curry(5);
// console.log(currySum(1)(2)(3)(4)(5));