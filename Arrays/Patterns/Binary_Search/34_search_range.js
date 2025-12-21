/**
 * Problem: Find First and Last Position of Element in Sorted Array (LeetCode 34)
 * Difficulty: Medium (Double Binary Search)
 * 
 * Logic:
 * Instead of one Binary Search, we use two passes (or one function twice).
 * 1. Find the LEFTMOST occurrence: If target found, search LEFT (high = mid - 1).
 * 2. Find the RIGHTMOST occurrence: If target found, search RIGHT (low = mid + 1).
 */

function searchRange(nums, target) {
    let result = [-1, -1];

    // Function to find the boundary
    const findBound = (findFirst) => {
        let low = 0;
        let high = nums.length - 1;
        let bound = -1;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (nums[mid] === target) {
                bound = mid; // Potential answer found
                if (findFirst) {
                    high = mid - 1; // Keep looking left
                } else {
                    low = mid + 1; // Keep looking right
                }
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return bound;
    };

    result[0] = findBound(true);  // Find First
    result[1] = findBound(false); // Find Last

    return result;
}

// Test Cases
console.log("Test 1 (Target 8):", searchRange([5, 7, 7, 8, 8, 8, 10], 8)); // Expected: [3, 5]
console.log("Test 2 (Target 6):", searchRange([5, 7, 7, 8, 8, 8, 10], 6)); // Expected: [-1, -1]
console.log("Test 3 (Single Element):", searchRange([8], 8));            // Expected: [0, 0]
