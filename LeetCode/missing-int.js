function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = {};
    let i = 0;
    let len = A.length;
    
    for (i; i < len; ++i) {
        if (A[i] > 0) map[A[i]] = true;
    }
    i=1;
    for(i; i <= len + 1; ++i) {
        if (!map[i]) return i;   
    }
}