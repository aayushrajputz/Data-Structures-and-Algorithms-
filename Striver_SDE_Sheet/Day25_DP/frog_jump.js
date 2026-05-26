/**
 * Striver SDE Sheet - Day 25: Dynamic Programming
 * Problem: Frog Jump (GeeksForGeeks / Coding Ninjas)
 * 
 * Description:
 * A frog is at the 1st step (index 0) and wants to reach the N-th step (index N-1).
 * In one jump, the frog can go from index `i` to either `i+1` or `i+2`.
 * The cost incurred in a jump from index `i` to `j` is |height[i] - height[j]|.
 * We need to find the minimum total cost to reach the N-th step.
 */

// ==========================================
// 1. Recursive Approach (Top-Down)
// Time Complexity: O(2^N) - exponential branching
// Space Complexity: O(N) - recursion stack space
// ==========================================
function frogJumpRecursive(heights) {
    const n = heights.length;

    function solve(ind) {
        if (ind === 0) return 0;
        let jumpOne = solve(ind - 1) + Math.abs(heights[ind] - heights[ind - 1]);

        let jumpTwo = Infinity;
        if (ind - 2 >= 0) {
            jumpTwo = solve(ind - 2) + Math.abs(heights[ind] - heights[ind - 2]);
        }
        return Math.min(jumpOne, jumpTwo)
    }
    return solve(n - 1)
}

// memoization

function frogJumpMemo(heights) {
    const n = heights.length
    const dp = new Array(n).fill(-1)

    function solve(ind) {
        if (ind === 0) return 0
        if (dp[ind] !== -1) return dp[ind]

        let jumpOne = solve(ind - 1) + Math.abs(heights[ind] - heights[ind - 1])

        let jumpTwo = Infinity;
        if (ind - 2 >= 0) {
            jumpTwo = solve(ind - 2) + Math.abs(heights[ind] - heights[ind - 2])
        }
        dp[ind] = Math.min(jumpOne, jumpTwo)
        return dp[ind]
    }
    return solve(n - 1)

}

//  tabulation
function frogJumpTabulation(heights) {
    const n = heights.length
    const dp = new Array(n)

    dp[0] = 0
    for (let i = 1; i < n; i++) {
        let jumpone = dp[i - 1] + Math.abs(heights[i] - heights[i - 1])

        let jumptwo = Infinity
        if (i - 2 >= 0) jumptwo = dp[i - 2] + Math.abs(heights[i] - heights[i - 2])
        dp[i] = Math.min(jumpone, jumptwo)
    }
    return dp[n - 1]

}

//  space optimized 

function frogJumpSpaceOptimized(heights) {
    const n = heights.length
    if (n <= 1) return 0;
    let prev = 0;
    let prev2 = 0;

    for (let i = 1; i < n; i++) {
        let jumpOne = prev + Math.abs(heights[i] - heights[i - 1])
        let jumpTwo = Infinity;
        if (i - 2 >= 0) jumpTwo = prev2 + Math.abs(heights[i] - heights[i - 2]);
        let curr = Math.min(jumpOne, jumpTwo)
        prev2 = prev
        prev = curr
    }
    return prev
}

console.log(frogJumpRecursive([10, 20, 30, 10]))
console.log(frogJumpMemo([10, 20, 30, 10]))
console.log(frogJumpTabulation([10, 20, 30, 10]))
console.log(frogJumpSpaceOptimized([10, 20, 30, 10]))