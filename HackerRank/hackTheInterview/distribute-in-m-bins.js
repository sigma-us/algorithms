'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'maxScore' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER m
 */

function maxScore(a, m) {
    let ans = 0;
    if (m === 1) {
        ans = a.reduce((a, b, i) => {
            return a + (b * (i+1));
        })
    } else if (a.length <= m) {
        for (let i of a) {
            ans += i;
        }
    } else {
        let numSegments = (a.length / m) | 0;

        a.sort((a, b) => a - b);

        let c = 0;
        let i = 1;

        while (i <= numSegments) {
            let sum = 0;
            let count = 0;

            while (count < m) {
                sum += a[c];
                c++;
                count++;
            }

            if (i === numSegments) {
                while (c < a.length) {
                    sum += a[c];
                    c++;
                }
            }

            ans += (i * sum);
            i++;
        }
    }


    return ans % (10 ** 9 + 7)
}

function maxScore(a, m) {
    let total_score = 0

    if (a.length === m) {
        for (let i of a) {
            total_score += i;
        }
    } else {
        a = a.sort((a, b) => a - b);
        let num_segments = (a.length / m) | 0;
        let k = 0;
        let i = 1;

        while (i <= num_segments) {
            let total = 0;
            let count = 0;

            while (count < m) {
                total += a[k];
                k++;
                count++;
            }

            if (i === num_segments) {
                while (k < a.length) {
                    total += a[k];
                    k++;
                }
            }

            total_score += (i * total)
            i++;
        }
    }

    return total_score % ((10 ** 9) + 7)
}

function main() {
    const ws = fs.createWriteStream('/HackerRank/hackTheInterview/distribute-out');

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const ans = maxScore(a, m);

    ws.write(ans + '\n');

    ws.end();
}
