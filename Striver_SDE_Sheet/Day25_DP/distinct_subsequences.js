function distinct_subsequences(s, t) {
    let n = s.length
    let m = t.length

    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1))

    function solve(i, j) {
        if (j === 0) return 1;
        if (i === 0) return 0;

        if (dp[i][j] !== -1) return dp[i][j];

        if (s[i - 1] === t[j - 1]) {
            return dp[i][j] = solve(i - 1, j - 1) + solve(i - 1, j);
        }
        else {
            return dp[i][j] = solve(i - 1, j);
        }

    }
    return solve(n, m)
}


console.log(distinct_subsequences("rabbbit", "rabbit")) 