/**
 * Floyd-Warshall Algorithm: All-Pairs Shortest Path
 * Time Complexity: O(V^3)
 * Space Complexity: O(V^2) (in-place modification of the matrix)
 */

function shortest_distance(matrix) {
    let n = matrix.length;

    // YOUR TASK:
    // 1. Initialize logic (if needed)
    // 2. Triple nested loop (k, i, j)
    // 3. Update matrix[i][j] using matrix[i][k] + matrix[k][j]
}

// Example Matrix (GfG style)
// -1 represents Infinity (no path)
let matrix = [
    [0, 1, 43],
    [1, 0, 6],
    [-1, -1, 0]
];

// After Floyd-Warshall, matrix should contain shortest distances
// shortest_distance(matrix);
// console.log(matrix);
