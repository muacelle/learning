/*
Given the array arr, iterate through and remove each element starting from the first element
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    const index = arr.findIndex(func);

    if (index !== -1) {
        return arr.slice(index);
    }
    return [];
}
  
console.log(dropElements([4, 3, 2, 3, 4], function(n) {return n < 3; }));