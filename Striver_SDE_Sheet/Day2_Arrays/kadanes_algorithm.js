/**
 * Kadane's Algorithm: Maximum Subarray Sum
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

// Test case
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(maxSubArray([-1, -2, -3])); // Expected: -1
