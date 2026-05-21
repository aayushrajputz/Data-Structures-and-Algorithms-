// 1. TOP-DOWN DP (Memoization)
// Time: O(N), Space: O(N) for array + O(N) for recursion stack
function climbStairsDP(n, memo = new Array(n + 1).fill(-1)) {
    if (n <= 1) return 1;
    
    if (memo[n] !== -1) return memo[n];

    memo[n] = climbStairsDP(n - 1, memo) + climbStairsDP(n - 2, memo);
    return memo[n];
}

// 2. BOTTOM-UP DP (Tabulation)
// Time: O(N), Space: O(N) for array
function climbStairTabulation(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 3. SPACE OPTIMIZED BOTTOM-UP DP
// Time: O(N), Space: O(1)
function climbStairsOptimized(n) {
    let prev1 = 1;
    let prev2 = 1;
    
    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

console.log("Memoization (10 stairs): " + climbStairsDP(10));
console.log("Tabulation (10 stairs): " + climbStairTabulation(10));
console.log("Space Optimized (10 stairs): " + climbStairsOptimized(10));