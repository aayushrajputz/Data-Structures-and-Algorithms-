/**
 * Problem: Search in Rotated Sorted Array (Day 11)
 * Pattern: Binary Search on Rotated Range
 * Time Complexity: O(log N)
 * 
 * Logic:
 * 1. Find the sorted half (Left or Right).
 * 2. Check if the target lies in that sorted half.
 * 3. Adjust low/high accordingly.
 */

function searchRotated(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;

        // Check if Left Half is Sorted
        if (nums[low] <= nums[mid]) {
            // Target lies in the sorted left half?
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } 
        // Else Right Half must be Sorted
        else {
            // Target lies in the sorted right half?
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

// Test Cases
console.log("Search 0 in [4,5,6,7,0,1,2]:", searchRotated([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log("Search 3 in [4,5,6,7,0,1,2]:", searchRotated([4,5,6,7,0,1,2], 3)); // Expected: -1
