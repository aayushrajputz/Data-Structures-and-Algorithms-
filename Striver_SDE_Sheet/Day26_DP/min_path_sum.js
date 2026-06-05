function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from({ length: m }, () => new Array(n).fill(-1))

    function solve(i, j) {
        if (i === 0 && j === 0) return grid[i][j]
        if (i < 0 || j < 0) return Infinity

        if (dp[i][j] != -1) return dp[i][j]

        let up = solve(i - 1, j)
        let down = solve(i, j - 1)

        return dp[i][j] = grid[i][j] + Math.min(up, down)

    }
    return solve(m - 1, n - 1)
}

grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
console.log(minPathSum(grid));