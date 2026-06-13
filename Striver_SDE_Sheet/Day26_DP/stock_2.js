function maxProfit(prices) {
    let n = prices.length;
    // DP array of size n x 2 initialized with -1
    let dp = Array.from({ length: n }, () => new Array(2).fill(-1));

    function solve(ind, buy) {
        // Base case
        if (ind === n) return 0;

        // Memoization check
        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;
        if (buy === 1) {
            // Options: Buy today OR Skip today
            let buyToday = -prices[ind] + solve(ind + 1, 0);
            let skipToday = 0 + solve(ind + 1, 1);
            profit = Math.max(buyToday, skipToday);
        } else {
            // Options: Sell today OR Skip today
            let sellToday = prices[ind] + solve(ind + 1, 1);
            let skipToday = 0 + solve(ind + 1, 0);
            profit = Math.max(sellToday, skipToday);
        }

        return dp[ind][buy] = profit;
    }

    // Starting on day 0, with option to BUY
    return solve(0, 1);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected Output: 7 (Buy at 1, sell at 5 [profit=4], buy at 3, sell at 6 [profit=3]. Total = 7)
