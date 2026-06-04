function uniquePathsWithObstacles(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === 0 && j === 0) return obstacleGrid[i][j] === 1 ? 0 : 1;
        if (i < 0 || j < 0) return 0;
        if (obstacleGrid[i][j] === 1) return 0;

        if (dp[i][j] !== -1) return dp[i][j];

        let totalWays = 0;

        totalWays += solve(i - 1, j);
        totalWays += solve(i, j - 1);

        return dp[i][j] = totalWays;
    }

    return solve(m - 1, n - 1);
}

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));

