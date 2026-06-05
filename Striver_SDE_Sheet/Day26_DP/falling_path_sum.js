function fallingPathSum(matrix) {
    let n = matrix.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(Infinity));

    function solve(i, j) {
        // 1. Boundary check FIRST to prevent accessing out-of-bound columns on last row
        if (j < 0 || j >= n) return Infinity;

        // 2. Last row check SECOND
        if (i === n - 1) return matrix[i][j];

        if (dp[i][j] !== Infinity) return dp[i][j];

        let down = solve(i + 1, j);
        let downLeft = solve(i + 1, j - 1);
        let downRight = solve(i + 1, j + 1);

        return dp[i][j] = matrix[i][j] + Math.min(down, downLeft, downRight);
    }

    let ans = Infinity
    for (let j = 0; j < n; j++) {
        ans = Math.min(ans, solve(0, j))
    }
    return ans
}

console.log(fallingPathSum([[2, 5, 8], [6, 4, 7], [0, 5, 3]])); // Expected: 13 (2 -> 6 -> 5, or 2 -> 4 -> 7 -> etc. wait, 2 + 6 + 5 = 13)  