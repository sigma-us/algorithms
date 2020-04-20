'use strict';
// Problem
// Jemma is competing in a robotics competition. The challenge for today is to build a robot that can navigate around a hole in the arena.

// The arena is a grid of squares containing W columns (numbered 1 to W from left to right) and H rows (numbered 1 to H from top to bottom). The square in the x-th column and y-th row is denoted (x, y). The robot begins in the top left square (1,1) and must navigate to the bottom right square (W, H).

// A rectangular subgrid of squares has been cut out of the grid. More specifically, all the squares that are in the rectangle with top-left square (L, U) and bottom-right square (R, D) have been removed.

// Jemma did not have much time to program her robot, so it follows a very simple algorithm:
// If the robot is in the rightmost column, it will always move to the square directly below it. Otherwise,
// If the robot is in the bottommost row, it will always move to the square directly right of it. Otherwise,
// The robot will randomly choose to either move to the square directly to the right, or to the square directly below it with equal probability.

// Jemma passes the challenge if her robot avoids falling into the hole and makes it to the square (W, H). What is the probability she passes the challenge?

// Input
// The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of a single line containing W, H, L, U, R and D.

// Output
// For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is a real number between 0 and 1 inclusive, the probability that Jemma passes the challenge.

// y will be considered correct if it is within an absolute or relative error of 10-5 of the correct answer. See the FAQ for an explanation of what that means, and what formats of real numbers we accept.

// Limits
// Time limit: 15 seconds per test set.
// Memory limit: 1GB.
// 1 ≤ T ≤ 100.
// 1 ≤ U ≤ D ≤ H.
// 1 ≤ L ≤ R ≤ W.
// Neither the top-left nor bottom-right squares will be missing.

// Test set 1
// 1 ≤ W ≤ 300.
// 1 ≤ H ≤ 300.

// Test set 2
// 1 ≤ W ≤ 105.
// 1 ≤ H ≤ 105.

// Sample

// Input

// Output

// 4
// 3 3 2 2 2 2
// 5 3 1 2 4 2
// 1 10 1 3 1 5
// 6 4 1 3 3 4


// Case #1: 0.5
// Case #2: 0.0625
// Case #3: 0.0
// Case #4: 0.3125

const map = [
    [-1, 0], // move down
    [0, 1]   // move right
];

const getHoles = function (start, end) {
    let startRow = start[1];
    let startCol = start[0];
    let endRow = end[1];
    let endCol = end[0];
    let holes = {};

    while (startRow <= endRow) {
        holes[[startRow, startCol]] = true;
        while (startCol <= endCol) {
            holes[[startRow, startCol]] = true;
            startCol++;
        }
        startRow++;
        startCol = start[0];
    }

    return holes;
}


const getProbability = function (inputs) {
    let numTests = inputs[0];
    let tests = inputs.slice(1, numTests + 1)

    tests.forEach((test, i) => {
        testProb(test, i);
    })
}



const testProb = function (test, i) {
    let grid = new Array(test[1]);
    let holes = [[test[2], test[3]], [test[4], test[5]]];
    holes = getHoles(holes[0], holes[1]);
    let end = [test[1], test[0]];
    console.log(holes)

    let prob = 1;

    for (let r = 0; r < test[1]; ++r) {
        grid[r] = [];
        for (let c = 0; c < test[0]; ++c) {
            let multi = 1;
            let x = r+1,
                y = c+1;
            console.log(holes[[r+1, c+1]]);
            grid[r].push(holes[[r+1, c+1]] !== undefined ? 0 : 1)

            if (holes[[x+1, y]]) {
                multi -= 0.5;
                holes[[x+1, y]] = false;
            }
            
            if (holes[[x, y+1]]) {
                multi-= 0.5
                holes[[x, y+1]] = false;
            }
            prob *= multi;
            console.log('Test case:', i,  prob);
            if (prob === 0) return 0;
        }
    }

    console.log(grid);

}


const printLn = function (x, y) {
    console.log(`Case #${x}: ${y}`);
}

const main = () => {
    let inputs = [
        4,
        [3, 3, 2, 2, 2, 2],
        [5, 3, 1, 2, 4, 2],
        [1, 10, 1, 3, 1, 5],
        [6, 4, 1, 3, 3, 4]
    ]

    getProbability(inputs);
}

main();