/**
 * Problem: N-Queens
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Rules:
 * 1. Calculate possible board configurations.
 * 2. Queen attacks in: Same Row, Same Column, Diagonals.
 *  
 * Approach: Backtracking
 * 1. Place Queen column by column.
 * 2. Check isSafe() before placing.
 * 3. Explore next column.
 * 4. Backtrack if no solution found.
 */

function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const result = [];

    function isSafe(row, col) {
        let r = row;
        let c = col;
        while (c >= 0) {
            if (board[r][c] === 'Q') return false;
            c--;
        }

        r = row;
        c = col;
        while (r >= 0 && c >= 0) {
            if (board[r][c] === 'Q') return false;
            r--;
            c--;
        }
        r = row;
        c = col;
        while (r < n && c >= 0) {
            if (board[r][c] === 'Q') return false;
            r++;
            c--;
        }
        return true;
    }

    function solve(col) {
        // Base case: If all queens are placed
        if (col === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        // Try placing queen in each row of this column
        for (let row = 0; row < n; row++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place
                solve(col + 1);        // Explore
                board[row][col] = '.'; // Backtrack
            }
        }
    }

    solve(0);
    return result;
}

console.log(solveNQueens(4));

const n = 4;
const result = solveNQueens(n);
console.log(`N=${n}, Solutions found: ${result.length}`);
result.forEach((sol, i) => {
    console.log(`Solution ${i + 1}:`);
    sol.forEach(row => console.log(row));
    console.log('---');
});