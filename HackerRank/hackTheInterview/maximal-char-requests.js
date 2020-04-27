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
 * Complete the 'getMaxCharCount' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. 2D_INTEGER_ARRAY queries
 */

function getMaxCharCount(s, queries) {
    // queries is a n x 2 array where queries[i][0] and queries[i][1] represents x[i] and y[i] for the ith query.
    let answers = [];
    s = s.toLowerCase();
    let cache = new Array(queries.length);
    let i = 0;
    while (i < cache.length) {
        cache[i] = [];
        i++;
    }
    

    for (i = 0; i < queries.length; ++i) {
        let start = queries[i][0];
        let end = queries[i][1];
        
        if (start === end) {
            answers.push(1);
            continue;
        }

        if (cache[start] && cache[start].length > 1 && cache[start][end] && cache[start][end].cache) {
            answers.push(cache[start][end].count);
            continue;
        } else if (cache[start] && cache[start].length > 1 && cache[start].length < end && cache[start][cache[start].length-1].count) {
            let mem;
            let newStart;

            cache[start].forEach((obj, i) => {
                //console.log('hit', obj, i, start, end, cache[start].length)
                if (i < end && obj) {
                    mem = obj;
                    newStart = i + 1;
                }
            });

            let x = newStart;
            while (x < end + 1) {
                let char = s[x];
                mem[char] = mem[char] > 0 ? mem[char] + 1 : 1;
                
                if (mem.max < char) {
                    mem.max = char;
                    mem.count = 1;
                } else if (mem.max === char) {
                    mem.count++;
                }
                x++;
            }

            cache[start][end] = mem;
            answers.push(mem.count);
            
            continue;
        }

        

        let cObj = {
            max: '',
            count: 0
        };

        for (let x = start; x < end + 1; ++x) {
            let char = s[x];
            cObj[char] = cObj[char] > 0 ? cObj[char] + 1 : 1;
            
            if (cObj.max < char) {
                cObj.max = char;
                cObj.count = 1;
            } else if (cObj.max === char) {
                cObj.count++;
            }
        }

        cache[start][end] = cObj;
        answers.push(cObj.count);
    }

    return answers;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const q = parseInt(readLine().trim(), 10);

    let query = Array(q);

    for (let i = 0; i < q; i++) {
        query[i] = readLine().replace(/\s+$/g, '').split(' ').map(queryTemp => parseInt(queryTemp, 10));
    }

    const ans = getMaxCharCount(s, query);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
