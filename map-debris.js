function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = [];

    const getOrbitalPeriod = function(obj) {
        let orbPeriod = Math.round((2 * Math.PI) * (Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)));  // fórmula
        return {name: obj.name, orbitalPeriod: orbPeriod}; // obj que será adicionado à newArr
    }

    for (let elem in arr) {
        newArr.push(getOrbitalPeriod(arr[elem]));          // pega o resultado pra todos os objs passados
    }
    return newArr;
}
  
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, 
{name: "moon", avgAlt: 378632.553}]));