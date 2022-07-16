// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers 
// between them. The lowest number will not always come first.

function sumAll (arr) {
    arr.sort((a, b) => a - b);                      // ordenar crescente
    let newArr = [];                                // a nova array terá todos os números da soma
    for (let i = arr[0]; i <= arr[1]; i++) {      
        newArr.push(i); 
    }
    return newArr.reduce((total, value) => value + total, 0);    // soma com reduce
}


console.log(sumAll([10, 4]));