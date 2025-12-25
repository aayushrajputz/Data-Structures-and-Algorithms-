/**
 * Rotate Image (LeetCode 48): 90 Degrees Clockwise
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function rotate(matrix) {
    let n = matrix.length;

    // Step 1: Transpose (Swap matrix[i][j] with matrix[j][i])
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Test Case
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(mat);
console.table(mat);
