'use strict';

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a < 0) {
        throw new Error("Negative Error")
    }
    else if (a > 0) return "YES"
    else if (a === 0) {
        throw new Error("Zero Error")
    }
}

console.log(isPositive(3))
console.log(isPositive(1))
console.log(isPositive(2))
console.log(isPositive(3))
console.log(isPositive(2))
console.log(isPositive(0))
console.log(isPositive(6))
console.log(isPositive(-1))
console.log(isPositive(-100))
