function sumFibs(num) {
    let fibList = [0, 1];
    for (i = 2;; i++) {
        fibList.push(fibList[i - 1] + fibList[i - 2]);
        if (fibList[i] + fibList[i - 1] > num) break;
    }
    return fibList.filter(num => num % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(1));