function isPrime(number) {
    let i = 2;                        // first prime number
    while (i < number) {
        if (number % i === 0) {       // se number dividir por quaquer i entre 2 e number, ele não é primo.
            return false;
        }
        i++
    }
    return true;                      // o loop terminou sem retornar false = number não encontrou divisor
}

function sumPrimes(num) {
    let nums = [];
    for (i = 2; i <= num; i++) {
        nums.push(i)                                                    // [2, 3, 4, 5, 6, 7, 8, 9, 10]
    }                                 
    return nums.filter(isPrime).reduce((a, b) => a + b, 0);             // [2, 3, 5, 7].reduce()
}

console.log(sumPrimes(100));