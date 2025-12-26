/**
 * LeetCode 62: Unique Paths
 * Approach: Combinatorics (nCr)
 * Time Complexity: O(m-1) or O(n-1) -> Linear
 * Space Complexity: O(1)
 */

var uniquePaths = function (m, n) {
    // Total steps needed (N)
    let N = m + n - 2;

    // Steps required for one direction (r)
    // Optimization: Calculate nCr using smaller r to reduce loops
    let r = m - 1;

    if (r > n - r) {
        r = n - r;
    }

    let res = 1;

    // Loop to calculate nCr iteratively
    // Formula: res = res * (N - r + i) / i
    // Or simplified: res = res * (N - i + 1) / i
    for (let i = 1; i <= r; i++) {
        res = res * (N - i + 1) / i;
    }

    return res;
};

// Test Cases
console.log("3x7 Grid:", uniquePaths(3, 7)); // Expected: 28
console.log("3x2 Grid:", uniquePaths(3, 2)); // Expected: 3
