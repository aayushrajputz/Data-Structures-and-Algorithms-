function maxSumRecursive(nums) {
    let n = nums.length;
    function solve(ind) {
        if (ind === 0) return nums[0];
        if (ind < 0) return 0;

        let pick = nums[ind] + solve(ind - 2);
        let nonPick = 0 + solve(ind - 1)
        return Math.max(pick, nonPick);
    }
    return solve(n - 1);
}

// memo 

function maxSumMemo(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);
    function solve(ind) {
        if (ind === 0) return nums[ind]
        if (ind < 0) return 0;
        if (dp[ind] !== -1) return dp[ind];

        let pick = nums[ind] + solve(ind - 2)
        let nonPick = 0 + solve(ind - 1);
        return dp[ind] = Math.max(pick, nonPick)

    }
    return solve(n - 1)
}

// tabulation

function maxSumTab(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i <= n - 1; i++) {
        let pick = nums[i] + (i >= 2 ? dp[i - 2] : 0);  // 0 is for the base case i<2 so it returns 0
        let notPick = dp[i - 1];
        dp[i] = Math.max(pick, notPick)


    }
    return dp[n - 1]
}
// space

function maxSumSpace(nums) {
    let n = nums.length
    let prev1 = nums[0]
    let prev2 = 0;
    for (let i = 1; i < n; i++) {
        let pick = nums[i] + prev2;
        let notPick = prev1;
        let curr = Math.max(pick, notPick);
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}
console.log(maxSumRecursive([1, 10, 3, 4, 5]))
console.log(maxSumMemo([1, 10, 3, 4, 5]))
console.log(maxSumTab([1, 10, 3, 4, 5]))
console.log(maxSumSpace([1, 10, 3, 4, 5]))