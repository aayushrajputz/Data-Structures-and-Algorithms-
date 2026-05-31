function subsetSum(arr) {
    let n = arr.length
    let sum = arr.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) return false;

    let k = sum / 2;
    let dp = Array.from({ length: n }, () => new Array(k + 1).fill(-1))
    function solve(ind, w) {
        if (w === 0) return true;
        if (ind === 0) return arr[0] === w
        if (dp[ind][w] != -1) return dp[ind][w];

        let pick = arr[ind] <= w ? solve(ind - 1, w - arr[ind]) : false;
        let notPick = solve(ind - 1, w);

        return dp[ind][w] = pick || notPick

    }
    return solve(n - 1, k)
}

arr = [1, 2, 3, 4], k = 5
console.log(subsetSum(arr, k))