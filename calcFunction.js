
const makeNun = (num, func)=> {
    if(!func) {
        return num
    }
    return func(num)
}

const five = (func) => makeNun(5, func)
const three = (func) => makeNun(3, func)
const seven = (func) => makeNun(7, func)
const plus = (right) => (left) => right+left
const minus = (right) => (left) => left-right

console.log(five(plus(seven(minus(three())))));
