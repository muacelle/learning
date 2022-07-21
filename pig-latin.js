function translatePigLatin(str) {
    const vowels = /[aeiou]/g
    let translated = ''
    if (vowels.test(str[0])) {          // começa com vogal
        
        translated = str + 'way';

    } else {                            // começa com consoante(s)
        
        let begin = str.match(/^[bcdfghjklmnpqrstvwxyz]+/g).toString();
        translated = str.replace(begin, '') + begin + 'ay';

    }
    return translated;
}
  
console.log(translatePigLatin("algorithm"));

// if str[0] é vogal {translated = str + 'way'}
// if str[0] é consoante {pegar as consoantes antes da primeira vogal + jogar pro final + 'ay'}