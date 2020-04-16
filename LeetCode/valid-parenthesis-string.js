/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let len = s.length;
    let l = 0;
    let stack = [];
    let wild = [];

    for (l; l < len; ++l) {
        let char = s[l];
        
        if (char === '(') {
            if (stack.length < wild.length) {
                wild = new Array(stack.length).fill('*');
            }

            stack.push(char);
        } else if (char === '*') {
            wild.push(char);
        } else {
            const open = stack.pop();

            if (!open && wild.length === 0) {
                return false;
            }
            else if (!open && wild.length > 0) {
                wild.pop();
            }
            else if (!open && !stack.length && wild.length) {
                wild.pop();
            }
        }
    }

    return stack.length === 0 ? true : stack.length <= wild.length;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString2 = function(s) {
    let lo = 0, hi = 0;
    
    for (const char of s) {
        lo += char === '(' ? 1 : -1;
        hi += char !== ')' ? 1 : -1;
        
        if (hi < 0) {
            break;
        }
        
        lo = Math.max(lo, 0);
    }
    
    
    return !lo;
};


let test = '()()((*))';
test = '(*))';
// test = '(*()';
// test = '(*()))*';
// test = "(((******))";
test = "(())((())()()(*)(*()(())())())()()((()())((()))(*";
test = "(*)"
let test2 = "((()))()(())(*()()())**(())()()()()((*()*))((*()*)"
// test = "(())(())(((()*()()()))()((()()(*()())))(((*)()"


console.time();
checkValidString(test);
console.timeEnd();

console.time();
checkValidString2(test);
console.timeEnd();

console.time();
checkValidString(test2);
console.timeEnd();

console.time();
checkValidString2(test2);
console.timeEnd();