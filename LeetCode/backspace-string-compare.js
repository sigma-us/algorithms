/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return removeBackspaces(T, {}) === removeBackspaces(S, {})
}


const removeBackspaces = (string, cache) => {
    if (cache[string]) {
        return string.replace(/#/gi, '');
    } else {
        cache[string] = true;
        return removeBackspaces(string.replace(/[a-z]#/, ''), cache);
    }
}

let S = "ab#c", T = "ad#c";
S = "ab##", T = "c#d#";
S = "a#c", T = "b";
S = "y#fo##f", T = "y#f#o##f";

console.log(backspaceCompare(S, T));