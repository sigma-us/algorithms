/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let right = 0;

    shift.forEach((shift) => {
        if (shift[0] === 0) right -= shift[1];
        if (shift[0] === 1) right += shift[1];
    });
    let len = s.length;
    while (Math.abs(right) > len) {
        right %= len;
    }
    if (right === 0) return s;

    let shifted = '';
    let i = right < 0 ? Math.abs(right) : len - right;

    for (i; shifted.length < len; ++i) {
        shifted += s[i];
        if (i === len - 1) i = -1;
    }

    return shifted;
};


let s = 'abcdefg';
let shift = [[1,1],[1,1],[0,2],[1,3]];

s = "yisxjwry";
shift = [[1,8],[1,4],[1,3],[1,6],[0,6],[1,4],[0,2],[0,1]]
s = "xqgwkiqpif"
shift = [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]]

console.log(stringShift(s, shift))