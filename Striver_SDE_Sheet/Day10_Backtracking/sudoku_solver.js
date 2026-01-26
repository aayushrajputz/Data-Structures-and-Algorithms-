/**
 * Problem: Sudoku Solver
 * Write a program not solve a Sudoku puzzle by filling the empty cells.
 *
 * Rules:
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 *
 * Approach: Backtracking
 * 1. Find an empty cell ('.').
 * 2. Try placing digits 1-9.
 * 3. Check isValid() before placing.
 * 4. Recursively try to fill the rest of the board.
 * 5. If successful, return true.
 * 6. If not, backtrack (reset cell to '.') and try next digit.
 */

var solveSudoku = function (board) {
    solve(board);
};

function solve(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // Find empty cell
            if (board[i][j] === '.') {

                // Try numbers 1-9
                for (let c = 1; c <= 9; c++) {
                    const char = c.toString();
                    if (isValid(board, i, j, char)) {
                        board[i][j] = char; // Place

                        // Recurse
                        if (solve(board)) return true;

                        // Backtrack
                        board[i][j] = '.';
                    }
                }
                return false; // No number worked, return false to trigger backtrack
            }
        }
    }
    return true; // All cells filled
}

function isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
        // Check Row
        if (board[row][i] === c) return false;

        // Check Column
        if (board[i][col] === c) return false;

        // Check 3x3 Block (The tricky part!)
        // Formula: 
        // Block Row start: 3 * Math.floor(row / 3) + Math.floor(i / 3)
        // Block Col start: 3 * Math.floor(col / 3) + i % 3

        const blockRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const blockCol = 3 * Math.floor(col / 3) + i % 3;

        if (board[blockRow][blockCol] === c) return false;
    }
    return true;
}


// Test Case
const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(board);
