function maxProfit(prices) {
    let n = prices.length;
    
    // 3D DP Array: size n x 2 x 3 filled with -1
    let dp = Array.from({ length: n }, () =>
        Array.from({ length: 2 }, () => new Array(3).fill(-1))
    );

    function solve(ind, buy, cap) {
        if (ind === n) return 0;
        if (cap === 0) return 0;

        if (dp[ind][buy][cap] !== -1) return dp[ind][buy][cap];

        let profit = 0;
        if (buy === 1) {
            // Options: Buy today OR Skip today
            let buyToday = -prices[ind] + solve(ind + 1, 0, cap);
            let skipToday = 0 + solve(ind + 1, 1, cap);
            profit = Math.max(buyToday, skipToday);
        } else {
            // Options: Sell today OR Skip today
            let sellToday = prices[ind] + solve(ind + 1, 1, cap - 1);
            let skipToday = 0 + solve(ind + 1, 0, cap);
            profit = Math.max(sellToday, skipToday);
        }

        return dp[ind][buy][cap] = profit;
    }

    return solve(0, 1, 2);
}

const prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices)); // Expected Output: 6