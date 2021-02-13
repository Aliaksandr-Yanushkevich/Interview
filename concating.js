const concating = (symb, ...arg) => {
    let res = '';

    for(let i = 0; i<= arg.length; i++) {
        res += `${i}${symb}`
    }

    return res;
}

console.log(concating('!', 1,2,3,4))
