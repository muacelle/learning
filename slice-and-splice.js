function frankenSplice(arr1, arr2, n) {
  let arr21 = arr2.slice(0, n);
  let arr22 = arr2.slice(n);
  let arrFinal = arr21.concat(arr1, arr22)
  return arrFinal;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// separar a arr2 em duas arrays
// juntar todas as arrays com concat() em ordem