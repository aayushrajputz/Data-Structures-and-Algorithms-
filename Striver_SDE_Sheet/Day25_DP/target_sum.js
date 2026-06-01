function targetSum(arr, w) {
    let n = arr.length
    let totalSum = arr.reduce((a, b) => a + b, 0)

    if (Math.abs(w) > totalSum || (w + totalSum) % 2 !== 0) return 0;
    let k = (w + totalSum) / 2


    let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1))

    function solve(ind, currSum) {
        if (ind < 0) return currSum === 0 ? 1 : 0
        if (dp[ind][currSum] !== -1) return dp[ind][currSum]

        let pick = 0;
        let unpick = solve(ind - 1, currSum);
        if (arr[ind] <= currSum) pick = solve(ind - 1, currSum - arr[ind]);


        return dp[ind][currSum] = pick + unpick
    }

    return solve(n - 1, k)
}

console.log(targetSum([1, 1, 1, 1, 1], 3))