// Curried Function

const sum = (x, y) => x + y;

const sumCurried = x => y => x + y;

const addFive = sumCurried(5);

const addTen = sumCurried(10);

console.log(addFive(6));

// Partial Function

const threeSum = (x, y, z) => x + y + z;

const partialFunc = threeSum.bind(this, 5, 10);

console.log(partialFunc(10));