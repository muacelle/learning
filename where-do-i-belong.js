function compareNumbers(a, b) {
    return a - b;
}
  
function getIndexToIns(arr, num) {
    if (arr.length == 0) {
        console.log(0);
        return; 
    }
    let newArr = arr.sort(compareNumbers);
    for (let i = 0; i < arr.length; i++) {
        if (newArr[i] >= num && newArr.length > 0) {
        newArr.splice(i, 0, num);
        console.log(i);
        return;
        }
        else if (num > newArr[newArr.length - 1] && newArr.length > 0) {
        newArr.push(num);
        console.log(newArr.lastIndexOf(num));
        return;
        }
    }
}

getIndexToIns([], 1);