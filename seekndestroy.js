// You will be provided with an initial array, followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    const itemsToDestroy = [...arguments].concat().slice(1);
    const finalArr = arr.filter(item => !itemsToDestroy.includes(item));
    return finalArr;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));