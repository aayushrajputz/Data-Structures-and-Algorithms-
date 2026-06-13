function maxProfit(prices) {
    let n = prices.length;
    let dp = Array.from({ length: n }, () => new Array(2).fill(-1));

    function solve(ind, buy) {
        if (ind === n) return 0;
        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;
        if (buy === 1) {
            let buyToday = -prices[ind] + solve(ind + 1, 0);
            let skipToday = 0 + solve(ind + 1, 1);
            profit = Math.max(buyToday, skipToday);
        } else {
            let sellToday = prices[ind] + solve(ind + 1, 1);
            let skipToday = 0 + solve(ind + 1, 0);
            profit = Math.max(sellToday, skipToday);
        }
        return dp[ind][buy] = profit;
    }
    return solve(0, 1);
}

function maxProfitSpaceOptimized(prices) {
    let n = prices.length;
    let nextBuy = 0;      // Representing dp[ind+1][1]
    let nextNotBuy = 0;   // Representing dp[ind+1][0]

    for (let ind = n - 1; ind >= 0; ind--) {
        let currBuy = Math.max(-prices[ind] + nextNotBuy, nextBuy);
        let currNotBuy = Math.max(prices[ind] + nextBuy, nextNotBuy);

        nextBuy = currBuy;
        nextNotBuy = currNotBuy;
    }

    return nextBuy;
}

console.log("Memoized Profit:", maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 7
console.log("Space Optimized Profit:", maxProfitSpaceOptimized([7, 1, 5, 3, 6, 4])); // Expected: 7

