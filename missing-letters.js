function fearNotLetter(str) {
    let list = []
    let ascii;
    for (let i = 0; i < str.length; i++) {
        list.push(str.charCodeAt(i));
    }
   //  if ()   // range == list[0]-list[-1]
    for (let j = 0; j < list.length; j++) {
        if (list[j] !== list[j-1] + 1) {
            ascii = list[j-1] + 1
        }
    }
    return String.fromCharCode(ascii);
}

console.log(fearNotLetter("ABCE"));