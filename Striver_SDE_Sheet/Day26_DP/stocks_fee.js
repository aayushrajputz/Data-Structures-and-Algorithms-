function maxProfit(price, fee) {
    let n = price.length
    let dp = Array.from({ length: n }, () => Array(2).fill(-1))

    function solve(ind, buy) {
        if (ind >= n) return 0
        if (dp[ind][buy] != -1) return dp[ind][buy]

        let profit = 0
        if (buy === 1) {
            let buyToday = -price[ind] + solve(ind + 1, 0)
            let skipToday = solve(ind + 1, 1)
            profit = Math.max(buyToday, skipToday)
        } else {
            let sellToday = price[ind] - fee + solve(ind + 1, 1)
            let skipToday = solve(ind + 1, 0)
            profit = Math.max(sellToday, skipToday)
        }
        return dp[ind][buy] = profit
    }
    return solve(0, 1)
}

let prices = [1, 3, 2, 8, 4, 9], fee = 2
console.log(maxProfit(prices, fee))  