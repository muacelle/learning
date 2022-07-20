const romNums = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

function casaDec(arr) {
    let multiplicator = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i] * multiplicator;
        multiplicator *= 10;
    }
    return arr;
}

function convertToRoman(num) {
    const str = num.toString();
    let nums = [];
    for (let i = 0; i < str.length; i++) {
        nums.push(str[i]);
    }
    const casas = casaDec(nums);

}

function resultArr(arr, obj) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < obj.length; j++) {
            if (arr[i] >= Object.keys(obj)[j] && arr[i] < Object.keys(obj)[j+1]) {
                result.push(Object.values(obj)[j]);
            }
        }
    }
}

// conditional: romNums[1] <= casas[0] < romNums[2] ? result.push(romNums[1])
// match? map? filter? 2D for?

//result = [C, X, X, X, V, I]
// trabalhar com o resto de cada até o resto ser 0