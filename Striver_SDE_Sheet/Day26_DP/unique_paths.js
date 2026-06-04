function uniquePaths(m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === 0 || j === 0) return 1;
        if (i < 0 || j < 0) return 0;

        // Memoization Check
        if (dp[i][j] !== -1) return dp[i][j];

        let totalPath = 0;
        totalPath += solve(i - 1, j);
        totalPath += solve(i, j - 1);

        // Store and Return
        return dp[i][j] = totalPath;
    }
    return solve(m - 1, n - 1);
}


console.log(uniquePaths(3, 2)); // Expected: 3
console.log(uniquePaths(3, 7)); // Expected: 28