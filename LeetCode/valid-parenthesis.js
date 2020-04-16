/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;
    if (len === 0) return true;
    if (len % 2 !== 0) return false;
    let pairs = {
        '{': '}', '[': ']', '(': ')'
    };
    if (len === 2 && pairs[s[0]] !== s[1]) return false;
    if (!pairs[s[0]]) return false;
    let temp = '';
    
    for (let j = 1; j < s.length; j) {
        if (pairs[s[j - 1]] === s[j]) {
            s = s.slice(0, j-1) + s.slice(j + 1, len);
            if (j > 1) j--;
            continue;
        } else if (!pairs[s[j-1]]) {
            return false;
        } else {
            j++;
            continue;
        }
    }
    if (s.length === 0) return true
    return false;
};