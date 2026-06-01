function coinChange(arr, amt) {
    let n = arr.length;
    let dp = Array.from({ length: n }, () => new Array(amt + 1).fill(-1));

    function solve(ind, target) {
        if (target === 0) return 0;
        
        // Base Case: 1st coin par aa gaye
        if (ind === 0) {
            if (target % arr[0] === 0) return target / arr[0];
            return Infinity;
        }

        if (dp[ind][target] !== -1) return dp[ind][target];

        let notPick = solve(ind - 1, target);

        let pick = Infinity;
        if (arr[ind] <= target) {
            pick = 1 + solve(ind, target - arr[ind]);
        }

        return dp[ind][target] = Math.min(pick, notPick);
    }

    let ans = solve(n - 1, amt);
    return ans >= Infinity ? -1 : ans;
}

console.log(coinChange([1, 2, 3], 4)); // Expected: 2 (2 + 2 = 4 or 3 + 1 = 4)