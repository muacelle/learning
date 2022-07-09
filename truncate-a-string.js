function truncateString(str, num) {
  let ending = '...';
  if (str.length > num) {
    let shortStr = str.slice(0, num);
    return (shortStr + ending);
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);