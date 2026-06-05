function tringle(grid) {
    let n = grid.length;
    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

    function solve(i, j) {
        if (i === n - 1) return grid[i][j];
        if (dp[i][j] != -1) return dp[i][j];

        let down = solve(i + 1, j)
        let diagonal = solve(i + 1, j + 1)
        return dp[i][j] = grid[i][j] + Math.min(down, diagonal)

    }
    return solve(0, 0);

}
grid = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(tringle(grid));
