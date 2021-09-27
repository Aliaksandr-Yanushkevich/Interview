const Singleton1 = {
    foo: 123,
    getInstance() { return this }
};

let obj1 = Singleton1.getInstance();
let obj2 = Singleton1.getInstance();

console.log(obj1===obj2)
obj1.foo = 456;
console.log( obj1 === obj2 );

//------------------------------------------

// create a Singleton instance using the IIFE
// IIFE - immediately invoked function expression
const Singleton2 = (function() {
    // "private"
    // variable which will hold a single instance of the object
    let instance;

    // "private"
    // method which created a new instance of an object
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    // return the "public" API
    return {
        // "public"
        // if the instance is not created yet - it will create and return it
        // if the instance has been already created - just return it (existent)
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {
    // illustration tha "getInstance" returns the same object
    const instance1 = Singleton2.getInstance();
    const instance2 = Singleton2.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}

run();