// Resolvendo um problema sem filter()

let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

function checkIDs(array) {
    let validIDs = [];
    let invalidIDs = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isFinite(array[i].id) && array[i].id !== 0) {
            validIDs.push(array[i]);
        }
        else {
            invalidIDs.push(array[i]);
        }
    }
    console.log(validIDs);
}

// checkIDs(arr);

// Resolvendo com filter()

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true
    }
    return false;
}

let validIDs = arr.filter(filterByID);
console.log(validIDs);