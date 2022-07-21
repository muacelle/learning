function whatIsInAName(collection, source) {
    const keys = Object.keys(source); // ['apple', 'bat']

    return collection.filter((obj) => {
        for (let prop in keys) {
            if (obj.hasOwnProperty(prop) && obj[prop] == source[prop]) {
                return true;
            }
        }
    });
}
    
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "bat": 2 }));