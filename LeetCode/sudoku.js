const {
    performance
  } = require('perf_hooks');

function sudoku2(board) {
    for (let i = 0; i < 9; i++) {
        let has = {};
        // rows
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (has[board[i][j]]) {
                    return false;
                }
                has[board[i][j]] = true;
            }
        }
        has = {};
        // columns
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                if (has[board[j][i]]) {
                    return false;
                }
                has[board[j][i]] = true;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // sub grids
            let has = {};
            for (let x = i * 3; x < i * 3 + 3; x++) {
                for (let y = j * 3; y < j * 3 + 3; y++) {
                    if (board[x][y] !== '.') {
                        if (has[board[x][y]]) {
                            return false;
                        }
                        has[board[x][y]] = true;
                    }
                }
            }
        }
    }
    return true;
}




let board = [
    [".", "9", ".", ".", "4", ".", ".", ".", "."],
    ["1", ".", ".", ".", ".", ".", "6", ".", "."],
    [".", ".", "3", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    ["3", ".", ".", ".", "5", ".", ".", ".", "."],
    [".", ".", "7", ".", ".", "4", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "7", ".", ".", ".", "."]
]

let b2 = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."]
];




let isValidSudoku = function(board) {
    const size = 9;
    const sq = 3;
    const rows = new Array(9).fill(0);
    const squares = new Array(9).fill(0);
    const cols = new Array(9).fill(0);
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const num = board[y][x];
            if (num === '.') {
                continue;
            }
            const square = Math.floor(y / sq) * sq + Math.floor(x / sq);
            console.log(square);
            if (cols[x] & 1 << num || rows[y] & 1 << num || squares[square] & 1 << num) {
                return false;
            }
            cols[x] |= 1 << num;
            rows[y] |= 1 << num; 
            squares[square] |= 1 << num;
        }
    }
    
    return true;
};

let t1 = performance.now();
console.log(isValidSudoku(b2), '2');
let t2 = performance.now();
console.log(t2-t1, 'ms: fake');

let t3 = performance.now();
console.log(sudoku2(b2), '1');
let t4 = performance.now();
console.log(t4-t3, 'ms: sudoku2');

let t5 = performance.now();
console.log(isValidSudoku(b2), '2');
let t6 = performance.now();
console.log(t6-t5, 'ms: isValidSudoku');