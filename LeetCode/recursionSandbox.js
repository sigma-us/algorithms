pow = (x, n) => {
    return (n === 0 ? 0 : (n === 1 ? x : x * pow(x, n-1)))  // ternary
}

console.log(pow(2, 4)) // 16
console.log(pow(2, 0)) // 0


power = (x, n) => {
    if (n === 0) return 0;
    let result = x;

    while (n > 1) {
        result*=x;
        n--;
    }

    return result
}

console.log(power(2, 4)) // 16
console.log(power(2, 0)) // 0
console.log(power(2, -2)) // Infinity ?

console.log(pow(2, 10000)) // Max call stack exceeded (recursion js edge case)
