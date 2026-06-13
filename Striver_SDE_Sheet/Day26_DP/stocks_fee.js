function maxProfit(prices, fee) {
    let n = prices.length;
    // DP array of size n x 2 initialized with -1
    let dp = Array.from({ length: n }, () => new Array(2).fill(-1));

    function solve(ind, buy) {
        if (ind === n) return 0;
        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;
        if (buy === 1) {
            // Options: Buy today OR Skip today
            let buyToday = -prices[ind] + solve(ind + 1, 0);
            let skipToday = 0 + solve(ind + 1, 1);
            profit = Math.max(buyToday, skipToday);
        } else {
            // Options: Sell today (pay transaction fee) OR Skip today
            let sellToday = prices[ind] - fee + solve(ind + 1, 1);
            let skipToday = 0 + solve(ind + 1, 0);
            profit = Math.max(sellToday, skipToday);
        }
        return dp[ind][buy] = profit;
    }
    return solve(0, 1);
}

let prices = [1, 3, 2, 8, 4, 9], fee = 2;
console.log(maxProfit(prices, fee)); // Expected: 8