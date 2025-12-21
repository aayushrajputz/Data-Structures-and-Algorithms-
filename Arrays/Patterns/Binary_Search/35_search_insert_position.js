/**
 * Problem: Search Insert Position (LeetCode 35)
 * Difficulty: Easy (Important Concept)
 * 
 * Task:
 * 1. Find the target in the sorted array.
 * 2. If found, return its index.
 * 3. If NOT found, return the index where it WOULD be inserted to keep order.
 * 
 * Example 1: `nums = [1, 3, 5, 6], target = 5` -> Output: 2 (Found)
 * Example 2: `nums = [1, 3, 5, 6], target = 2` -> Output: 1 (Not found, but 2 fits between 1 and 3)
 * Example 3: `nums = [1, 3, 5, 6], target = 7` -> Output: 4 (Should be at end)
 * 
 * Logic Modification:
 * - Same standard Binary Search template.
 * - If loop breaks (low > high) and not found:
 * - Return `low`. (Because `low` always points to the correct insertion spot).
 */

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid;

        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1
        }
    }

    // Yahan tak aaye matlab Target nahi mila.
    // 'low' hamesha wahan rukta hai jahan value honi chahiye thi.
    return low;
};

// Test Cases
console.log("Test 1 (Found 5):", searchInsert([1, 3, 5, 6], 5)); // Expected: 2
console.log("Test 2 (Insert 2):", searchInsert([1, 3, 5, 6], 2)); // Expected: 1
console.log("Test 3 (Insert 7):", searchInsert([1, 3, 5, 6], 7)); // Expected: 4
console.log("Test 4 (Insert 0):", searchInsert([1, 3, 5, 6], 0)); // Expected: 0
