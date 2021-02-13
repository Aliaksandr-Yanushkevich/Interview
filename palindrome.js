const isPalindrome = (input) => {
    if(typeof input !== 'number' && typeof input !== 'string') {
        throw new Error('input must be string or number');
    }

    const inputString = input.toString().replace(/ /g, '');
    const left = inputString.slice(0, Math.floor(inputString.length/2));
    const right = inputString.slice(- Math.floor(inputString.length/2));

    for (let i = 0; i < left.length; i++) {
        if(left[i] !== right[(right.length - i - 1)]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('шалаш'))
