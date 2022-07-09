function titleCase(str) {
  let arr;
  arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let inicio;
    let fim;
    inicio = arr[i][0].toUpperCase();
    fim = arr[i].slice(1).toLowerCase();
    arr[i] = ''
    arr[i] = arr[i].concat(inicio, fim);
  }
  return arr.join(' ');
}

titleCase("I'm a littlE tea pOT");