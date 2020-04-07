// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = (N >>> 0).toString(2);
    let len = bin.length;
    let i = 0;
    let gap = 0;

    for (i; i < len; ++i) {
        let cur = 0;
        
        while (bin[i] === '0') {
            ++cur;
            ++i;
        }
        if (bin[i] === '1') gap = Math.max(gap, cur);
    }
    
    return gap;
}



console.log(solution(1041));


