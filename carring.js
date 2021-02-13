// const curry = (f) => { // simple implementation
//     return function (a) {
//         return function(b) {
//             return f(a,b)
//         }
//     }
// }

const summ = (a,b,c,d) => {
    return a+b+c+d
}

const carriedSumm = curry(summ)

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) { // func.length - expected argument amount
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

const add = curry(summ)

console.log(carriedSumm(1,2,3,4))
console.log(carriedSumm(1)(2,3)(4))
console.log(carriedSumm(1)(2)(3)(4))

console.log(add(5)(9)(-4)(1))
