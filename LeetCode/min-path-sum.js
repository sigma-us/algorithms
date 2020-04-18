/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    if (!m) return 0;
    let n = grid[0].length;
    let min = Infinity;


    const searchPaths = (grid, x, y, count) => {
        let current = grid[x][y];
        count += current;

        if (x === m - 1 && y === n - 1) { // end of grid
            min = Math.min(min, count);
            return;
        }

        let nx, ny;
        nx = x + map[0][0];
        ny = y + map[0][1];
        if (isInBoard(grid, nx, ny)) {
            searchPaths(grid, nx, ny, count, min);
        }

        nx = x + map[1][0];
        ny = y + map[1][1];
        if (isInBoard(grid, nx, ny)) {
            searchPaths(grid, nx, ny, count, min);
        }
    }

    const isInBoard = function (board, x, y) {
        return board[x] && board[x][y] !== undefined ? true : false;
    }

    const map = [
        [1, 0], // test down
        [0, 1]  // test right
    ];

    searchPaths(grid, 0, 0, 0);

    return min;
};


const minPathSum2 = function (grid) {
    if (grid == null || grid.length == 0) return 0;

    let m = grid.length;
    let n = grid[0].length;

    let dp = [];
    for (let i = 0; i < m; ++i) {
        dp.push(new Array(n).fill(0))
    }
    dp[0][0] = grid[0][0];

    // initialize top row
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    // console.log(dp, '\n');

    // initialize left column
    for (let j = 1; j < m; j++) {
        dp[j][0] = dp[j - 1][0] + grid[j][0];
    }

    // console.log(dp);


    // fill up the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (dp[i - 1][j] > dp[i][j - 1]) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            } else {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            }
        }
    }
    // console.log(dp);


    return dp[m - 1][n - 1];
}


function minPathSum3(grid) {
    var endRow = grid.length - 1;
    var endCol = grid[0].length -1;
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (!r && !c) continue;
            
            // if c && r !== 0, min of top or left
            else if (r && c) grid[r][c] += Math.min(grid[r][c - 1], grid[r - 1][c]);
                
            // r === 0 => logic grab neighbor
            else if (r === 0) grid[r][c] += grid[r][c - 1];
            
            // c === 0 => logic grab neighbor
            else if (c === 0) grid[r][c] += grid[r - 1][c];
        }
    }
    
    return grid[endRow][endCol];
}



let test = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];

// test = [
//     [0, 0],
//     [0, 0]
// ];

test = [
    [5, 0, 1, 1, 2, 1, 0, 1, 3, 6, 3, 0, 7, 3, 3, 3, 1],
    [1, 4, 1, 8, 5, 5, 5, 6, 8, 7, 0, 4, 3, 9, 9, 6, 0],
    [2, 8, 3, 3, 1, 6, 1, 4, 9, 0, 9, 2, 3, 3, 3, 8, 4],
    [3, 5, 1, 9, 3, 0, 8, 3, 4, 3, 4, 6, 9, 6, 8, 9, 9],
    [3, 0, 7, 4, 6, 6, 4, 6, 8, 8, 9, 3, 8, 3, 9, 3, 4],
    [8, 8, 6, 8, 3, 3, 1, 7, 9, 3, 3, 9, 2, 4, 3, 5, 1],
    [7, 1, 0, 4, 7, 8, 4, 6, 4, 2, 1, 3, 7, 8, 3, 5, 4],
    [3, 0, 9, 6, 7, 8, 9, 2, 0, 4, 6, 3, 9, 7, 2, 0, 7],
    [8, 0, 8, 2, 6, 4, 4, 0, 9, 3, 8, 4, 0, 4, 7, 0, 4],
    [3, 7, 4, 5, 9, 4, 9, 7, 9, 8, 7, 4, 0, 4, 2, 0, 4],
    [5, 9, 0, 1, 9, 1, 5, 9, 5, 5, 3, 4, 6, 9, 8, 5, 6],
    [5, 7, 2, 4, 4, 4, 2, 1, 8, 4, 8, 0, 5, 4, 7, 4, 7],
    [9, 5, 8, 6, 4, 4, 3, 9, 8, 1, 1, 8, 7, 7, 3, 6, 9],
    [7, 2, 3, 1, 6, 3, 6, 6, 6, 3, 2, 3, 9, 9, 4, 4, 8]
]

// test = [
//     [7, 4, 8, 7, 9, 3, 7, 5, 0],
//     [1, 8, 2, 2, 7, 1, 4, 5, 7],
//     [4, 6, 4, 7, 7, 4, 8, 2, 1],
//     [1, 9, 6, 9, 8, 2, 9, 7, 2],
//     [5, 5, 7, 5, 8, 7, 9, 1, 4],
//     [0, 7, 9, 9, 1, 5, 3, 9, 4]
// ]

console.time()
let res = minPathSum2(test);
console.timeEnd()

console.log(res);


console.time()
res = minPathSum3(test);
console.timeEnd()

console.log(res);