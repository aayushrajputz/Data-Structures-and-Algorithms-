/**
 * Problem: Max Consecutive Ones III (LeetCode 1004)
 * Difficulty: Medium (Pattern: Variable Window)
 * 
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6
 * Explanation: [1,1,1,0,0,1,1,1,1,1,1] (Flipped 2 zeros allowed)
 * 
 * Logic:
 * 1. Expand R (Right)
 * 2. Count Zeros -> if (nums[R] === 0) zeroCount++
 * 3. Violate? if (zeroCount > k) -> Shrink L (remove zeros if leaving)
 * 4. Update Max Length
 */

function longestOnes(nums, k) {
    let L = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (R = 0; R < nums.length; R++) {
        if (nums[R] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[L] === 0) {
                zeroCount--

            }
            L++
        }
        maxLength = Math.max(maxLength, R - L + 1)

    }
    return maxLength
}

// Test Cases
console.log("Test 1:", longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Expected: 6
console.log("Test 2:", longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // Expected: 10
console.log("Test 3 (All 1s):", longestOnes([1, 1, 1, 1], 0)); // Expected: 4
console.log("Test 4 (All 0s, k=2):", longestOnes([0, 0, 0, 0], 2)); // Expected: 2
console.log("✅ All Tests Executed.");
