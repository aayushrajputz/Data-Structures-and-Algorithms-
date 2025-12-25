/**
 * LeetCode 31: Next Permutation
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;

    // Step 1: Find the break-point (first drop from right)
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the smallest number greater than nums[i] from right
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap them
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the part after the break-point
    reverse(nums, i + 1, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Test Case
let arr = [3, 2, 1];
nextPermutation(arr);
console.log("Next Permutation:", arr); // Expected: [1, 2, 4, 3, 5, 6]
