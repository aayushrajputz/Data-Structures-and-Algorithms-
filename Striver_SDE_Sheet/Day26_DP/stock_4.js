function maxProfit(prices, k) {
    let n = prices.length
    let dp = Array.from({ length: n }, () => Array.from({ length: 2 }, () => new Array(k + 1).fill(-1)))

    function solve(ind, buy, cap) {
        if (ind === n) return 0
        if (cap === 0) return 0
        if (dp[ind][buy][cap] != -1) return dp[ind][buy][cap]

        if (buy === 1) {
            let buyToday = -prices[ind] + solve(ind + 1, 0, cap)
            let skipToday = 0 + solve(ind + 1, 1, cap)
            return dp[ind][buy][cap] = Math.max(buyToday, skipToday)
        } else {
            let sellToday = prices[ind] + solve(ind + 1, 1, cap - 1)
            let skipToday = 0 + solve(ind + 1, 0, cap)
            return dp[ind][buy][cap] = Math.max(sellToday, skipToday)
        }
    }

    return solve(0, 1, k)
}

let k = 2
let prices = [3, 2, 6, 5, 0, 3]
console.log(maxProfit(prices, k))
