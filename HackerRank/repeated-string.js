'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    return (s.match(/a/g) || []).length * Math.floor(n/s.length) + (s.substring(0, n % s.length).match(/a/g) || []).length;

    // let regex = new RegExp('^\a*$');
    // if (regex.test(s)) return n;
    // let map = {};

    // let i = 0;
    // let count = 0;
    // for (let char of s) {
    //     if (char === 'a') map[i] = ++count;
    //     else map[i] = count;
    //     ++i;
    // }

    // let rem = n % s.length;
    // let len = Object.keys(map).length;
    // let total = len * (n / s.length);

    // if (rem === 0) return len * (n / s.length);
    // else {
    //     total = total.toString().split('.')[0];
    //     console.log(map)

    //     return +total + map[rem];
    // }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
