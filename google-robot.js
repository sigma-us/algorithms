'use strict';


// Problem
// Your country's space agency has just landed a rover on a new planet, which can be thought of as a grid of squares containing 109 columns (numbered starting from 1 from west to east) and 109 rows (numbered starting from 1 from north to south). Let (w, h) denote the square in the w-th column and the h-th row. The rover begins on the square (1, 1).

// The rover can be maneuvered around on the surface of the planet by sending it a program, which is a string of characters representing movements in the four cardinal directions. The robot executes each character of the string in order:
// N: Move one unit north.
// S: Move one unit south.
// E: Move one unit east.
// W: Move one unit west.
// There is also a special instruction X(Y), where X is a number between 2 and 9 inclusive and Y is a non-empty subprogram. This denotes that the robot should repeat the subprogram Y a total of X times. For example:
// 2(NWE) is equivalent to NWENWE.
// 3(S2(E)) is equivalent to SEESEESEE.
// EEEE4(N)2(SS) is equivalent to EEEENNNNSSSS.

// Since the planet is a torus, the first and last columns are adjacent, so moving east from column 109 will move the rover to column 1 and moving south from row 109 will move the rover to row 1. Similarly, moving west from column 1 will move the rover to column 109 and moving north from row 1 will move the rover to row 109. Given a program that the robot will execute, determine the final position of the robot after it has finished all its movements.

// Input
// The first line of the input gives the number of test cases, T. T lines follow. Each line contains a single string: the program sent to the rover.

// Output
// For each test case, output one line containing Case #x: w h, where x is the test case number (starting from 1) and w h is the final square (w, h) the rover finishes in.

// Limits
// Time limit: 10 seconds per test set.
// Memory limit: 1GB.
// 1 ≤ T ≤ 100.
// The string represents a valid program.
// The length of each program is between 1 and 2000 characters inclusive.

// Test set 1
// The total number of moves the robot will make in a single test case is at most 104.

// Test set 2
// No additional constraints.

// Sample

// Input
 	
// Output
 
// 4
// SSSEEE
// N
// N3(S)N2(E)N
// 2(3(NW)2(W2(EE)W))

  
// Case #1: 4 4
// Case #2: 1 1000000000
// Case #3: 3 1
// Case #4: 3 999999995

  
// In Sample Case #1, the rover moves three units south, then three units east.

// In Sample Case #2, the rover moves one unit north. Since the planet is a torus, this moves it into row 109.

// In Sample Case #3, the program given to the rover is equivalent to NSSSNEEN.

// In Sample Case #4, the program given to the rover is equivalent to NWNWNWWEEEEWWEEEEWNWNWNWWEEEEWWEEEEW.

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