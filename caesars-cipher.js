function rot13(str) {
    let decoded = '';
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
        if (ascii >= 65 && ascii <= 77) {
            decoded += String.fromCharCode(ascii + 13);
        }
        else if (ascii >= 78 && ascii <= 90) {
            decoded += String.fromCharCode(ascii - 13);
        }
        else {
            decoded += String.fromCharCode(ascii);
        }
    }
    return decoded;
}

console.log(rot13('SERR PBQR PNZC!'));

// A   B    C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S  T   U   V   W   X   Y   Z
// 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90

// str.charCodeAt(index) = retorna o número corresponde à letra do index. (0) -> 83
// str.fromCharCode(num) = retorna a letra correspondente ao num na tabela ascii. (83) -> S
// str.charAt(index) = retorna a letra na str no index informado. (0) -> S