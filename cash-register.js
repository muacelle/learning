const currency = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
}

function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;                         // troco devido
    let cidTotal = 0;

    for (let elem of cid) {                                        // valor total no caixa
        cidTotal += elem[1] * 100;
    }

    if (change > cidTotal) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change === cidTotal) {
        return {status: "CLOSED", change: cid};
    } else {
        let result = [];
        cid = cid.reverse();
        for (let elem of cid) {                                    // for loop em [cid], while loop em {currency}
            let holder = [elem[0], 0];
            elem[1] = elem[1] * 100;                               // controle
            while (change >= currency[elem[0]] && elem[1] > 0) {   // o valor do troco é > que a moeda elem?
                change -= currency[elem[0]];                       // troco devido -20 -20...
                elem[1] -= currency[elem[0]];                      // controle no cid (-20 -20... na caixa)
                holder[1] += currency[elem[0]] / 100;              // troco total +20 +20...
            }
            if (holder[1] > 0) {                                   // [TWENTY, 60]
                result.push(holder);                               // [[TWENTY, 60], [TEN, 20], ...]
            }
        }                                                          // fim do FOR LOOP em [cid]
        if (change > 0) {                                          
            return {status: "INSUFFICIENT_FUNDS", change: []};     // ainda falta algum valor no troco devido?
        }
        return {status: 'OPEN', change: result};
    }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));