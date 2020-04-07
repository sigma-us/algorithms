/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let cache = {};
    
    while (cache[n] !== true) {
        cache[n] = true;
        let sum = 0;
        while (n > 0) {
            sum += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = sum;
    }
    
    return n===1;
}

