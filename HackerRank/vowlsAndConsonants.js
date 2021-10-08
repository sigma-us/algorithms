'use strict';
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
    let other = []
    for (let letter of s) {
        if (letter in vowels) {
            console.log(letter)
        } else {
            other.push(letter)
        }
    }
    other.forEach(letter => {
        console.log(letter)
    })
}

let test = 'javascriptloops'

vowelsAndConsonants(test)
