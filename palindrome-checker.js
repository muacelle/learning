function palindrome(str) {
    const newArr = str.split('').filter(a => a.match(/[a-zA-Z0-9]/)).toString('').toLowerCase().split(',');
    let reverseArr = [...newArr].reverse();
    const result = newArr.length === reverseArr.length 
    && newArr.every((value, index) => value === reverseArr[index]) ? 'true' : 'false';
    return result;
}
  
console.log(palindrome("race Car"));