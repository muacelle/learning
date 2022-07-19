function fearNotLetter(str) {
    let list = []
    let ascii;
    let range = [];
    for (let i = 0; i < str.length; i++) {                       // define list
        list.push(str.charCodeAt(i));
    }
    for (let a = list[0]; a <= list[list.length - 1]; a++) {     // define range
        range.push(a);
    }
    const newRange = [...range].toString();                      // cria as strings pra comparar depois
    const newList = [...list].toString();
    if (newRange == newList) {                                   // strings iguais = não falta nenhuma letra
        return undefined;
    }
    else {                                                       // strings diferentes = tem letra faltando
        for (let j = 0; j < list.length; j++) {                  
            if (list[j] !== list[j-1] + 1) {
                ascii = list[j-1] + 1                            // pega o número correspondente à letra faltando
            }
        }
        return String.fromCharCode(ascii);                       // retorna a letra 
    }
}

console.log(fearNotLetter("ABCE"));