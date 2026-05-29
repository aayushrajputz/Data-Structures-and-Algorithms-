function knapsack(weights, values, W, n) {
    let dp = Array.from({ length: n }, () => new Array(W + 1).fill(-1));
    function solve(ind, w) {
        if (ind === 0) {
            return weights[0] <= w ? values[0] : 0
        }
        if (dp[ind][w] != -1) return dp[ind][w]
        let take = 0;
        if (weights[ind] <= w) {
            take = values[ind] + solve(ind - 1, w - weights[ind])
        }
        let notTake = 0 + solve(ind - 1, w)
        return dp[ind][w] = Math.max(take, notTake)
    }
    return solve(n - 1, W)
}

console.log(knapsack([1, 2, 4, 5], [5, 4, 8, 6], 5, 4)) // Expected: 13 