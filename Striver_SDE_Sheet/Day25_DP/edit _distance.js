function editDistance(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    let dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1))
    function solve(i, j) {
        if (i === 0 || j === 0) {
            return i === 0 ? j : i;
        }
        if (dp[i][j] != -1) {
            return dp[i][j]
        }
        if (str1[i - 1] === str2[j - 1]) {
            return dp[i][j] = solve(i - 1, j - 1)
        }
        else {
            let insert = 1 + solve(i, j - 1);
            let del = 1 + solve(i - 1, j);
            let replace = 1 + solve(i - 1, j - 1);
            return dp[i][j] = Math.min(insert, del, replace);
        }

    }
    return solve(n, m)

}

console.log(editDistance("horse", "rose"))
