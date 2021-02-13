const arr1 = [1,2,3,[4,5]]

Array.prototype.myOneNestedFlat = function () { // 1 nested level
   return this.reduce((accumulator, currentValue) => accumulator.concat(currentValue),[])
}

// console.log(arr1.myOneNestedFlat())


const arr2 = [1,2,3,[4,5, [6,7, [8,9]]]] // https://tech.geekjob.ru/array-prototype-flat-polyfill/

    Array.prototype.myDeepFlat = function (depth = 1) {
        depth = isNaN(depth) ? 0 : Math.floor(depth);
        if (depth < 1) return this.slice();
        return [].concat(
            ...(depth < 2)
                ? this
                : this.map(v => Array.isArray(v) ? v.flat(depth - 1) : v)
        )
    };

// console.log(arr2.myDeepFlat(Infinity))
