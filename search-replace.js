function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        let newAfter = after[0].toUpperCase() + after.substring(1);
        return str.replace(before, newAfter);
    }
    return str.replace(before, after.toLowerCase());
}
  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));