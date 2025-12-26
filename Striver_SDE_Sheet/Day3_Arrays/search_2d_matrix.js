/**
 * LeetCode 74: Search a 2D Matrix
 * Time Complexity: O(log(m * n))
 * Space Complexity: O(1)
 */

function searchMatrix(matrix, target) {
    if (!matrix.length) return false;

    let m = matrix.length;     // Rows
    let n = matrix[0].length;  // Columns

    let low = 0;
    let high = (m * n) - 1;    // Total elements - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // The Magic Formula: Index to (Row, Col)
        let row = Math.floor(mid / n);
        let col = mid % n;

        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1; // Look on the right side
        } else {
            high = mid - 1; // Look on the left side
        }
    }

    return false;
}

// Test Case
const mat = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
console.log("Found 3:", searchMatrix(mat, 3));   // Expected: true
console.log("Found 13:", searchMatrix(mat, 13)); // Expected: false
