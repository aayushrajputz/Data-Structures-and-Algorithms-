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

function trap(height) {
    // Write your magic here
    // Hint: Water at index i = Min(MaxLeft, MaxRight) - height[i]
}

// Test Case
console.log("Trapped Water:", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
