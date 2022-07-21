function translatePigLatin(str) {
    const vowels = /[aeiou]/g

    if (vowels.test(str[0])) {
        return str + 'way';
    }

    let begin = str.match(/^[bcdfghjklmnpqrstvwxyz]+/g).toString();
    return str.replace(begin, '') + begin + 'ay';
}
  
console.log(translatePigLatin("algorithm"));

// if str[0] é vogal {translated = str + 'way'}
// if str[0] é consoante {pegar as consoantes antes da primeira vogal + jogar pro final + 'ay'}