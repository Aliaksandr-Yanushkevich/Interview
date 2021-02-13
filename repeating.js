String.prototype.repeating = function (number) {
    for(let i=0; i< number; i++) {
        console.log(this.toString());
    }
}

'hello world!'.repeating(3)
