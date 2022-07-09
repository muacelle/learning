function repeatStringNumTimes(str, num) {
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr = newStr.concat(str);
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);