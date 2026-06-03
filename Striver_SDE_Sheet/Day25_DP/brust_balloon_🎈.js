function MaxCoins(nums) {
    // 1. Add boundaries
    nums.unshift(1);
    nums.push(1);

    let n = nums.length - 2; // original size
    let dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(-1));

    function solve(i, j) {
        if (i > j) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let ans = 0;
        for (let k = i; k <= j; k++) {
            let tempCost = solve(i, k - 1) + solve(k + 1, j) + (nums[i - 1] * nums[k] * nums[j + 1]);
            ans = Math.max(ans, tempCost);
        }
        return dp[i][j] = ans;
    }

    return solve(1, n);
}

console.log(MaxCoins([3, 1, 5, 8])); // Expected: 167