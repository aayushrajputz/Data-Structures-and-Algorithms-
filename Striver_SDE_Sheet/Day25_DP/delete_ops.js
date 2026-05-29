function deleteOps(word1, word2) {
    let n = word1.length
    let m = word2.length

    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1))
    function solve(i, j) {
        if (i === 0 || j === 0) return 0
        if (dp[i][j] !== -1) return dp[i][j]

        if (word1[i - 1] === word2[j - 1]) {
            return dp[i][j] = 1 + solve(i - 1, j - 1)
        } else {
            return dp[i][j] = Math.max(solve(i - 1, j), solve(i, j - 1))
        }
    }

    let lcs = solve(n, m)

    return (n - lcs) + (m - lcs)

}

console.log(deleteOps("sea", "eat")) // Expected: 2