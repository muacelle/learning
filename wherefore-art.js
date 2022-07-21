function whatIsInAName(collection, source) {
    const keys = Object.keys(source);

    return collection.filter((obj) => {
        for (let prop of keys) {
            if (!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
                console.log(prop)
                console.log(obj)
                return false;
            }
        }
        return true;
    });
}
    
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "cookie": 2 }));