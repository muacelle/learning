function palindrome(str) {
    const newStr = str.split('').filter(a => a.match(/[a-zA-Z0-9]/)).toString('').toLowerCase().replace(/,/g, '');
    return newStr;
}
  
console.log(palindrome("0_0 (: /-\ :) 0-0"));

// filtrar letras e números OK
// string lowercase
// 