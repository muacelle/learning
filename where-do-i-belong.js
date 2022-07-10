function compareNumbers(a, b) {
    return a - b;
}
  
function getIndexToIns(arr, num) {
    arr.sort(compareNumbers);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
        console.log(i);
        return;
        }
    }
    console.log(arr.length);   //se length < num ou se length = 0
    return;
}

getIndexToIns([], 1);

//Essa versão, menor, não altera o arr de verdade. 