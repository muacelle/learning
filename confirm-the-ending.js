function confirmEnding(str, target) {
  let index = str.lastIndexOf(target);
  if (target == str.slice(index)) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");