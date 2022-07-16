function diffArray(arr1, arr2) {
    const newArr = arr1.filter(item => !arr2.includes(item));
    const myArr = arr2.filter(item => !arr1.includes(item));
    return newArr.concat(myArr);
}


console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]));