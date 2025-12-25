/**
 * Sort Colors (LeetCode 75): Dutch National Flag Algorithm
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Found a 0, move to the front
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Found a 1, leave it
            mid++;
        } else {
            // Found a 2, move to the end
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // DON'T increment mid here, because we need to check the new element at mid
        }
    }
}

// Test Case
let colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log("Sorted Colors:", colors); // Expected: [0, 0, 1, 1, 2, 2]
