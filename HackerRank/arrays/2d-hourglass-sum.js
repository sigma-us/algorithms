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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let start = [1, 1];
    let end = [arr.length - 1, arr[0].length - 1];
    let len = (arr.length-2);
    let max = Number.MIN_SAFE_INTEGER;

    for (let x = 1; x < len+1; x++) {
        for (let y = 1; y < len+1; y++) {
            max = Math.max(max, sumHourGlass(arr, x, y))
        }
    }

    return max;
}

function sumHourGlass(arr, x, y) {
    let map = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    ];

    let sum = 0;

    for (let m of map) {
        sum += arr[m[0]][m[1]];
    }

    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
