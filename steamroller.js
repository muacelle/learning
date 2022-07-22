// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function flatten(arr) {
    const result = [];

    for (let elem of arr) {
        if (Array.isArray(elem)) {
            result.push(...elem);
        } else {
            result.push(elem);
        }
    }

    return result;
}

function steamrollArray(arr) {
    let result = arr;

    while (true) {
        let isFlat = true;
        for (let elem of result) {
            if (Array.isArray(elem)) {
                isFlat = false;
                result = flatten(result);
                break;
            }
        }
        if (isFlat) {
            return result;
        }
    }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));