// // /
//  * Striver SDE Sheet - Problem 1: Set Matrix Zeroes
//  * LeetCode 73
//  * 
//  * Logic:
//  * 1. Find cells that are 0.
//  * 2. Mark their rows and columns.
//  * 3. Update the matrix based on markings.
//  */

function setZeroes(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    // Level 3 Strategy: Use first row and first column as dummy storage
    let col0 = 1; // Flag to track if first column should be zeroed

    // Step 1: Traverse the matrix and mark first row/col
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col0 = 0;
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Step 2: Traverse back (Bottom-Up) to avoid overwriting trackers
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col0 === 0) matrix[i][0] = 0;
    }
}

// Test Case
let mat = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

console.log("Original Matrix:");
console.table(mat);

setZeroes(mat);

console.log("Modified Matrix:");
console.table(mat);
