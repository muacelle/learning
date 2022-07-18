function spinalCase(str) {
    return str
    .replaceAll('-', '_')
    .split(/(_|(?=[A-Z])|\W)/)
    .filter(a => a.match(/[a-zA-Z]/))
    .join('-')
    .toLowerCase();
}


console.log(spinalCase('AllThe-small_Things are tiny'));