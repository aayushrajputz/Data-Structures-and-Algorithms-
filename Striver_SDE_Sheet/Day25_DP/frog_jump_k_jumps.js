/**
 * Striver SDE Sheet - Day 25: Dynamic Programming
 * Problem: Frog Jump with K Jumps (Striver DP-4)
 * 
 * Target 1: Recursive Approach
 */

function frogJumpKRecursive(heights, k) {
    let n = heights.length
    function solve(ind) {
        if (ind === 0) return 0
        if (ind < 0) return Infinity
        let minStep = Infinity;
        for (let i = 1; i <= k; i++) {
            if (ind - i >= 0) {
                minStep = Math.min(minStep, solve(ind - i) + Math.abs(heights[ind] - heights[ind - i]))
            }

        }
        return minStep
    }
    return solve(n - 1)



}

// memoization 

function frogJumpKMemo(heights, k) {
    let n = heights.length
    let dp = new Array(n).fill(-1)
    function solve(ind) {
        if (ind === 0) return 0
        if (ind < 0) return Infinity

        if (dp[ind] !== -1) return dp[ind]

        let minStep = Infinity
        for (let i = 1; i <= k; i++) {
            if (ind - i >= 0) {
                minStep = Math.min(minStep, solve(ind - i) + Math.abs(heights[ind] - heights[ind - i]))
            }
        }
        dp[ind] = minStep
        return dp[ind]
    }

    return solve(n - 1)

}

// tabulation

function frogJumpKTabu(heights, k) {
    let n = heights.length;
    let dp = new Array(n).fill(-1)
    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        dp[i] = Infinity;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                dp[i] = Math.min(dp[i], dp[i - j] + Math.abs(heights[i] - heights[i - j]))
            }
        }
    }
    return dp[n - 1]
}

function frogJumpKSpaceOptim(heights, k) {
    let n = heights.length;
    let prev = new Array(k).fill(0);
    prev[k - 1] = 0;


    for (let i = 1; i < n; i++) {
        let curr = Infinity;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                let cost = prev[k - j] + Math.abs(heights[i] - heights[i - j])
                curr = Math.min(curr, cost)
            }
        }
        for (let m = 0; m < k - 1; m++) {
            prev[m] = prev[m + 1]
        }
        prev[k - 1] = curr
    }
    return prev[k - 1]



}



// Test Case 1: heights = [10, 30, 40, 50, 20], k = 3
// Expected output: 30
// Path 1: 0 -> 1 (diff 20) -> 4 (diff 10) = 30
// Path 2: 0 -> 3 (diff 40) -> 4 (diff 30) = 70
// Path 3: 0 -> 2 (diff 30) -> 4 (diff 20) = 50
console.log("Test Case 1 (k = 3):", frogJumpKRecursive([10, 30, 40, 50, 20], 3)); // Expected: 30

// Test Case 2: heights = [10, 20, 30, 10], k = 2
// Expected output: 20
console.log("Test Case 2 (k = 2):", frogJumpKRecursive([10, 20, 30, 10], 2)); // Expected: 20

console.log("Test Case 1 (k = 5):", frogJumpKRecursive([10, 30, 40, 50, 20], 5)); // Expected: 30


