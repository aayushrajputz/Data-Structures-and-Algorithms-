/**
 * Problem: Minimum Size Subarray Sum (LeetCode 209)
 * Pattern: Variable Sliding Window (Shrink to find MINIMUM)
 * 
 * Logic:
 * 1. Expand 'right' pointer to increase 'currSum'.
 * 2. As soon as 'currSum >= target':
 *    - This is a valid window! Update minLength.
 *    - Try to make it even smaller by moving 'left' pointer.
 *    - Subtract nums[left] and repeat.
 */

function minSubArrayLen(target, nums) {
    let left = 0;
    let currSum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        currSum = currSum + nums[right];
        while (currSum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            currSum = currSum - nums[left];
            left++;
        }

    }
    return minLen === Infinity ? 0 : minLen;
}
// Test Cases
console.log("Test 1 (target=7, [2,3,1,2,4,3]):", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Expected: 2
console.log("Test 2 (target=4, [1,4,4]):", minSubArrayLen(4, [1, 4, 4]));           // Expected: 1
console.log("Test 3 (target=11, [1,1,1,1,1,1,1,1]):", minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Expected: 0
