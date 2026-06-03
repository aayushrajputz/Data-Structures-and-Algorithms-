function palindromePartition3(s, k) {
    let n = s.length;
    if (n === 0) return 0;

    // 1. Precompute cost to make any substring s[i...j] a palindrome
    let cost = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (i === j) {
                cost[i][j] = 0;
            } else if (j - i === 1) {
                cost[i][j] = s[i] === s[j] ? 0 : 1;
            } else {
                cost[i][j] = (s[i] === s[j] ? 0 : 1) + cost[i + 1][j - 1];
            }
        }
    }

    // 2. 2D DP Memoization Table
    let dp = Array.from({ length: n }, () => new Array(k + 1).fill(-1));

    function solve(i, k) {
        // Base case: if we need to divide into 1 part, the cost is to make the rest of the string a palindrome
        if (k === 1) return cost[i][n - 1];
        if (dp[i][k] !== -1) return dp[i][k];

        let minChanges = Infinity;

        // Try partitioning at every index j from i to n - partsLeft
        for (let j = i; j <= n - k; j++) {
            let currentCost = cost[i][j] + solve(j + 1, k - 1);
            minChanges = Math.min(minChanges, currentCost);
        }

        return dp[i][k] = minChanges;
    }

    return solve(0, k);
}

console.log(palindromePartition3("abc", 2)); // Expected: 1
console.log(palindromePartition3("aabbc", 3)); // Expected: 0