function maxIncreasingSub(arr) {
    let n = arr.length;
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1))

    function solve(ind, prev_ind) {
        if (ind === n) return 0
        if (dp[ind][prev_ind + 1] !== -1) return dp[ind][prev_ind + 1]

        let notPick = 0 + solve(ind + 1, prev_ind)
        let pick = 0

        if (prev_ind === -1 || arr[ind] > arr[prev_ind]) {
            pick = arr[ind] + solve(ind + 1, ind)
        }

        return dp[ind][prev_ind + 1] = Math.max(pick, notPick)

    }
    return solve(0, -1)
}

console.log(maxIncreasingSub([1, 101, 2, 3, 100, 4, 5]))
