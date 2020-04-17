/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length;
    if (m === 0) return 0;
    let n = grid[0].length;
    let res = 0;
    let i, j;

    for (i = 0; i < m; ++i) {
        for (j = 0; j < n; ++j) {
            if (grid[i][j] === '1') {
                searchIslands(grid, i, j);
                res++;
            }
        }
    }

    return res
}

let map = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
]

let searchIslands = function (grid, x, y) {
    grid[x][y] = false; // replace 'land 1' with false, removes need for separate cache object
    let nx, ny;

    nx = x + map[0][0];
    ny = y + map[0][1];
    if (isInBoard(grid, nx, ny)) {
        searchIslands(grid, nx, ny)
    }

    nx = x + map[1][0];
    ny = y + map[1][1];
    if (isInBoard(grid, nx, ny)) {
        searchIslands(grid, nx, ny)
    }

    nx = x + map[2][0];
    ny = y + map[2][1];
    if (isInBoard(grid, nx, ny)) {
        searchIslands(grid, nx, ny)
    }

    nx = x + map[3][0];
    ny = y + map[3][1];
    if (isInBoard(grid, nx, ny)) {
        searchIslands(grid, nx, ny)
    }
}

let isInBoard = function (board, x, y) {
    return board[x] && board[x][y] && board[x][y] === '1' ? true : false;
}



/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands2 = function (grid) {
    let cnt = 0
    let n = grid.length
    if (n == 0) return 0
    let m = grid[0].length

    let rec = (i, j, inc = false) => {
        if (inc) ++cnt;
        if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        rec(i + 1, j);
        rec(i - 1, j);
        rec(i, j + 1);
        rec(i, j - 1);
    }

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] === '1') {
                rec(i, j, true);
            }
        }
    }

    return cnt
};


let test = [
    ["1", "1", "1", "0", "1"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "1"]
];
let test2 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "1", "0"]
]



console.time();
let a = numIslands(test);
console.timeEnd();

console.log(a);
test = [
    ["1", "1", "1", "0", "1"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "1"],
    ["0", "0", "0", "0", "0"]
];

console.time();
let b = numIslands2(test);
console.timeEnd();

console.log(b);


console.time();
a = numIslands(test2);
console.timeEnd();

console.log(a);

test2 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "1", "0"]
]
console.time();
b = numIslands2(test2);
console.timeEnd();

console.log(b);


