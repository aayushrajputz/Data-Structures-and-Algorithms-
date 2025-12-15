/*
 Problem: Trapping Rain Water (LeetCode Hard)
 
 Difficulty: BOSS LEVEL 👹
 
 Challenge:
 Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 compute how much water it can trap after raining.
 
 Logic Possible Approaches:
 1. Brute Force O(n^2) - check left/right max for every single bar. (Time Limit Exceeded).
 2. Pre-computation O(n) Time, O(n) Space - Store LeftMax and RightMax arrays.
 3. Two Pointers O(n) Time, O(1) Space - The Engineer's Way.
 
 Goal: Implement Approach 2 or 3.
 */

var trap = function (height) {
    let n = height.length;
    let leftMax = new Array(n).fill(0)
    let rightMax = new Array(n).fill(0)

    leftMax[0] = height[0]
    for (let i = 1; i <= n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    let totalWater = 0;

    for (let i = 1; i < n; i++) {
        let water = Math.min(leftMax[i], rightMax[i]) - height[i]
        if (water > 0) {
            totalWater = totalWater + water
        }

    }
    return totalWater
}

// Test Case
console.log("Trapped Water:", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
