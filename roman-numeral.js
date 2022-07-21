const romanNumbersList = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

function getNumberByPosition(number) {
    let numberSequence = number.toString().split('');
    console.log(numberSequence)                                // [ '2', '1', '8' ]
    let multiplier = Math.pow(10, numberSequence.length - 1);
    console.log(multiplier)                                    // 100
    
    return numberSequence.map((elem) => {
        const numberByPosition = {
        amount: elem,
        positionHouse: multiplier
        };
        multiplier /= 10;
        console.log(numberByPosition)                          // { amount: '2', positionHouse: 100 }, { amount: '1', positionHouse: 10 }, { amount: '8', positionHouse: 1 }
        return numberByPosition;              
    });
}
  
function getRomanNumber(position, amount) {
    let number = romanNumbersList[amount * position];          // 200, 10, 4
    if (number) {    
        console.log(number);                                          
        return number;                                         // 10: X
    } else if (amount < 5) {
        console.log(number)
        return romanNumbersList[position].repeat(amount);      // 200: 100 (C) -> repeat -> 100 (C) = CC
    }
    console.log(number)
    return romanNumbersList[5 * position] + romanNumbersList[position].repeat(amount % 5);     // (5 * 1 = 5) + I repeat 3 = VIII
}
  
function convertToRoman(number) {
    const numberByPosition = getNumberByPosition(number);
    
    return numberByPosition.map(elem =>
        getRomanNumber(elem.positionHouse, elem.amount)).join('');
}
  
console.log(convertToRoman(218));