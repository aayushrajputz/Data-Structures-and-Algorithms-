/**
 * Mock Interview: Maximum Sum of Distinct Subarrays With Length K
 * 
 * Rules:
 * 1. Window size must be exactly K.
 * 2. All elements in the window must be distinct.
 * 3. Return the maximum sum found.
 */

function maximumSubarraySum(nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    let map = new Map();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // 1. ADD
        currentSum += nums[i];
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        // 2. REMOVE (When window > k)
        if (i >= k) {
            let left = nums[i - k];
            currentSum -= left;
            if (map.get(left) === 1) {
                map.delete(left);
            } else {
                map.set(left, map.get(left) - 1);
            }
        }

        // 3. CHECK & UPDATE
        if (map.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

// Test Case
console.log("Max Sum (Test 1):", maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // Expected: 15
console.log("Max Sum (Test 2):", maximumSubarraySum([4, 4, 4], 3));            // Expected: 0
