function coinChange(arr, amt) {
    let n = arr.length
    let dp = Array.from({ length: n }, () => Array(amt + 1).fill(-1))

    function solve(ind, target) {
        if (target === 0) return 0
        if (ind < 0 || target < 0) return Infinity

        if (dp[ind][target] !== -1) return dp[ind][target]


        let notPick = 0 + solve(ind - 1, target)

        let pick = Infinity
        if (arr[ind] <= target) {
            pick = 1 + solve(ind, target - arr[ind])
            return dp[ind][target] = Math.min(notPick, pick)
        }

        return dp[ind][target] = notPick
    }
    let ans = solve(n - 1, amt)
    if (ans >= Infinity) return -1
    return ans
}

console.log(coinChange([1, 2, 3], 4))  