function lengthOfLISMemo(nums) {
    let n = nums.length;
    // 2D DP array: size n x (n + 1) filled with -1
    let dp = Array.from({ length: n }, () => new Array(n + 1).fill(-1));

    function solve(ind, prev_ind) {
        if (ind === n) return 0;

        // prev_ind ko shift karke index banaya (taki -1 -> 0 index ban jaye)
        if (dp[ind][prev_ind + 1] !== -1) return dp[ind][prev_ind + 1];

        let nottake = solve(ind + 1, prev_ind);
        let take = 0;
        if (prev_ind === -1 || nums[ind] > nums[prev_ind]) {
            take = 1 + solve(ind + 1, ind);
        }

        return dp[ind][prev_ind + 1] = Math.max(take, nottake);
    }
    return solve(0, -1);
}

console.log(lengthOfLISMemo([10, 9, 2, 5, 3, 7, 101, 18])); 