// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    if (arguments.length > 1 && typeof arguments[0] == 'number' && typeof arguments [1] == 'number') {
        return arguments[0] + arguments[1];
    }
    else if (arguments.length == 1 && typeof arguments[0] == 'number') {
        const arr = [...arguments];
        return function addNum(num) {
            return addTogether(arr[0], num)
        }
    }
}
  
console.log(addTogether('n'));