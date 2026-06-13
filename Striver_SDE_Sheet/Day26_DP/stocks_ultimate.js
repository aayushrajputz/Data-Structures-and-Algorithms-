function maxProfit(prices, buyfee, sellfee, cap) {
    let n = prices.length;
    let dp = Array.from({ length: n }, () => Array(2).fill(-1));

    function solve(ind, buy) {
        if (ind >= n) return 0;
        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;

        if (buy === 1) {
            // Options: Buy today OR Skip today
            let buyToday = -prices[ind] - buyfee + solve(ind + 1, 0);
            let skipToday = 0 + solve(ind + 1, 1);
            profit = Math.max(buyToday, skipToday);
        } else {
            // Options: Sell today OR Skip today (cooldown = cap days)
            let sellToday = prices[ind] - sellfee + solve(ind + cap + 1, 1);
            let skipToday = 0 + solve(ind + 1, 0);
            profit = Math.max(sellToday, skipToday);
        }
        return dp[ind][buy] = profit;
    }
    return solve(0, 1);
}

// Test Case
let prices = [10, 20, 30, 40, 50];
let buyfee = 2;
let sellfee = 3;
let cap = 2; // Cooldown of 2 days

console.log(maxProfit(prices, buyfee, sellfee, cap));