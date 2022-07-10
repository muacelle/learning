//Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunky(arr, size) {
    let newArr = [];
    let finalArr = [];
    while (arr.length > 0) {
        newArr = arr.splice(0, size);
        finalArr.push(newArr);
    }
    console.log(finalArr);
}

chunky([1, 2, 3, 4, 'a', 'b'], 4);