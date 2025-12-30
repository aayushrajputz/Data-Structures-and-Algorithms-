/**
 * LeetCode 15: 3Sum
 * Strategy: Sort + Fixed element with Two Pointers
 * Time Complexity: O(N^2)
 * Space Complexity: O(1) (excluding result array)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    if (nums.length < 3) return res;

    // 1. Sort the array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // 2. Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // 3. Skip duplicates for left and right

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move pointers inward after finding a triplet
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};

// Test Case
let nums = [-1, 0, 1, 2, -1, -4];
console.log("3Sum Result for", nums, ":");
console.log(threeSum(nums));
