function rodCutting(prices) {
    let n = prices.length
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1))


    function solve(ind, L) {
        if (L === 0) return 0
        if (ind === 0) return (L * prices[0])
        if (dp[ind][L] !== -1) return dp[ind][L]
        let notTake = solve(ind - 1, L)
        let take = -Infinity
        if (ind + 1 <= L) {
            take = prices[ind] + solve(ind, L - (ind + 1))
        }
        dp[ind][L] = Math.max(notTake, take)
        return dp[ind][L]
    }
    return solve(n - 1, n)

}
