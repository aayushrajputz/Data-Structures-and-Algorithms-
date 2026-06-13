/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let n = coins.length;
    // DP table initialized with -1
    let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));

    function solve(ind, target) {
        if (target === 0) return 1; // Base Case 1: Target ban gaya -> 1 ways
        if (ind < 0) return 0;      // Base Case 2: Coins khatam ho gaye -> 0 ways
        if (dp[ind][target] !== -1) return dp[ind][target];

        let notPick = solve(ind - 1, target);
        let pick = 0;
        if (coins[ind] <= target) {
            pick = solve(ind, target - coins[ind]);
        }

        // Combinations count karne ke liye dono choices ko ADD (+) karenge
        return dp[ind][target] = pick + notPick;
    }

    return solve(n - 1, amount);
};
