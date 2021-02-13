const location = {
    country: 'Belarus',
    city: 'Minsk'
}

function greeting (name) {
    console.log(`Hello! My name is ${name} I am from ${this.city}, ${this.country}`)
}

Function.prototype.myBind = function (context, ...arg1) {
    let fn = this;
    return function (...arg2) {
        fn.apply(context, [...arg1, ...arg2])
    }
}

greeting.bind(location,'ALex')()
greeting.myBind(location, 'Alex')()

