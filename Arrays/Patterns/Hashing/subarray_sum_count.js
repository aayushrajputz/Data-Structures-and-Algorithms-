/**
 * Problem: Subarray Sum Equals K (LeetCode 560)
 * Pattern: Prefix Sum + Hash Map (Count frequency)
 * 
 * Logic:
 * 1. Maintain 'currSum'.
 * 2. Use Map to store: how many times a 'sum' has occurred so far.
 * 3. Base Case: map.set(0, 1) -> handles cases where currSum itself equals k.
 * 4. Total Count += map.get(currSum - k) if exists.
 */

function subarraySum(nums, k) {
    let map = new Map();
    let currSum = 0;
    let count = 0;

    // Base case: sum 0 has occurred 1 time (empty subarray)
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        // Check if (currSum - k) exists in map
        if (map.has(currSum - k)) {
            count += map.get(currSum - k);
        }

        // Store/Update frequency of currSum in map
        map.set(currSum, (map.get(currSum) || 0) + 1);
    }

    return count;
}

// Test Case
console.log("Count for [1, 1, 1], k=2:", subarraySum([1, 1, 1], 2)); // Expected: 2 ([1,1] and [1,1])
console.log("Count for [1, 2, 3], k=3:", subarraySum([1, 2, 3], 3)); // Expected: 2 ([1,2] and [3])
