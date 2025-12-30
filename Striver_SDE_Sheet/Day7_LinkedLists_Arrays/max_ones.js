/**
 * LeetCode 485: Max Consecutive Ones
 * Strategy: Simple Counter
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let currentCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++;
            max = Math.max(max, currentCount);
        } else {
            currentCount = 0;
        }
    }
    return max;
}

// Test
let nums2 = [1, 1, 0, 1, 1, 1];
console.log("Max Consecutive Ones:", findMaxConsecutiveOnes(nums2)); // Expected: 3
