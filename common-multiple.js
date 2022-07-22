function smallestCommons(arr) {
    const small = Math.min(...arr);
    const big = Math.max(...arr);
    let scm = big;

    while (true) {
        let found = true;
        for (let i = small; i <= big; i++) {
            if (scm % i !== 0) {
                found = false;
                console.log(scm);
                break;
            }
        }
        if (found) {
            return scm;
        } else {
            scm = scm + big;
        }
    }
}

console.log(smallestCommons([2, 5]));

// common multiples: [10, 20, 30, 40, 50, 60...]
// smallest common multiple that can be evenly divided by [2, 3, 4, 5] = 60 
// 60/1 = 60; 60/2 = 30; 60/3 = 20; 60/4 = 15; 60/5 = 12 -----> 60 % n === 0