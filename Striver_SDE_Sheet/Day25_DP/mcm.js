function mcm(cost) {
    let n = cost.length;
    let dp = Array(n).fill(0).map(() => Array(n).fill(-1))
    if (n === 0) return 0
    function solve(arr, i, j) {
        if (i === j) return 0;
        if (dp[i][j] !== -1) return dp[i][j]
        let ans = Infinity;

        for (let k = i; k < j; k++) {
            let tempCost = solve(arr, i, k) + solve(arr, k + 1, j) + (arr[i - 1] * arr[k] * arr[j])
            ans = Math.min(ans, tempCost)
        }
        return dp[i][j] = ans;
    }
    return solve(cost, 1, n - 1)

}

console.log(mcm([10, 20, 30, 40, 30])); // Expected: 24000 
