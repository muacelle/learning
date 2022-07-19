function pairElement(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G' : arr.push(['G', 'C']);
            break;
            case 'C' : arr.push(['C', 'G']);
            break;
            case 'T' : arr.push(['T', 'A']);
            break;
            case 'A' : arr.push(['A', 'T']);
            break;
            default: console.log('Entrada inválida');
        }
    }
    return arr;
}
  
console.log(pairElement("ATCGA"));