function largestOfFour(arr) {
let newArr = [];
let largest0 = -99999, largest1 = -99999, largest2 = -99999, largest3 = -99999;
for (let i = 0; i < arr.length; i++) {
  if (arr[0][i] > largest0) {
    largest0 = arr[0][i];
  }
}
newArr.push(largest0);

for (let i = 0; i < arr.length; i++) {
  if (arr[1][i] > largest1) {
    largest1 = arr[1][i];
  }
}
newArr.push(largest1);

for (let i = 0; i < arr.length; i++) {
  if (arr[2][i] > largest2) {
    largest2 = arr[2][i];
  }
}
newArr.push(largest2);

for (let i = 0; i < arr.length; i++) {
  if (arr[3][i] > largest3) {
    largest3 = arr[3][i];
  }
}
newArr.push(largest3);
return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);