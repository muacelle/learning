function findLongestWordLength(str) {
  let myArray = str.split(' ');
  let longest = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length > longest) {
      longest = myArray[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");