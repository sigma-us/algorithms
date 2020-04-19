'use strict';

const getNewXY = function (string) {
    let cache = {
        0: '',
        length: 0
    };

    for (let i = string.length - 1; i > -1; --i) {
        let cur = string[i];
        if (cur === ')') {
            cache.length++;
            cache[cache.length] = '';
        } else if (cur > 0) {
            cache[cache.length - 1] = rec(cache[cache.length], Number(string[i])) + cache[cache.length - 1];
            cache.length--;
        } else if (cur === '(') {
            continue;
        } else {
            cache[cache.length] = cur + cache[cache.length];
        }
    }
    return count(cache[0]);
}

const rec = (string, i) => {
    let newS = '';
    while (i > 0) {
        newS += string;
        i--;
    }
    return newS;
}

const count = (string) => {
    let x = 1,
        y = 1;
    for (let char of string) {

        switch (char) {
            case 'N':
                x--;
                break;
            case 'S':
                x++;
                break;
            case 'W':
                y--;
                break;
            case 'E':
                y++;
                break;
        }
    }
    
    if (x < 1) x = 1000000000 + x;
    if (y < 1) y = 1000000000 + y;
    return [x, y];
}

const printLn = function (x, y2, y) {
    console.log(`Case #${x}: ${y} ${y2}`);
}

const main = () => {
    let tests = 0;
    let c = 0;
    inputs.forEach((s, i) => {
        if (i > 0) {
            let [x, y] = getNewXY(s)
            printLn(++c, x, y)
            tests--;
        } else {
            tests = s;
        }
    })
}


let inputs = [
    5
    , 'SSSEEE'
    , 'N'
    , 'N3(S)N2(E)N'
    , '2(3(NW)2(W2(EE)W))'
    , '8N(W2(E))'
]


main();