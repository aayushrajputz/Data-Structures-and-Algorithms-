function maxProfit(prices) {
    let n = prices.length;
    // DP array of size n x 2 initialized with -1
    let dp = Array.from({ length: n }, () => new Array(2).fill(-1));

    function solve(ind, buy) {
        // Base case: handle out-of-bounds due to ind + 2 jump
        if (ind >= n) return 0;

        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;
        if (buy === 1) {
            // Options: Buy today OR Skip today
            let buyToday = -prices[ind] + solve(ind + 1, 0);
            let skipToday = 0 + solve(ind + 1, 1);
            profit = Math.max(buyToday, skipToday);
        } else {
            // Options: Sell today OR Skip today (cooldown jumps to ind + 2)
            let sellToday = prices[ind] + solve(ind + 2, 1);
            let skipToday = 0 + solve(ind + 1, 0);
            profit = Math.max(sellToday, skipToday);
        }

        return dp[ind][buy] = profit;
    }

    return solve(0, 1);
}

let prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices)); // Expected: 3