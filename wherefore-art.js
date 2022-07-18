function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => {            
        let objKeys = Object.keys(obj);
        if (objKeys.includes(sourceKeys)) {     
            return true;
        }
        return false;
    })
};
    
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "bat": 2 }));