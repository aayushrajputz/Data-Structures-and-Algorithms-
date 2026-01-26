/**
 * Problem: Single Element in a Sorted Array (LeetCode 540)
 * Task: Find the element that appears only once in O(log n) time.
 * 
 * Logic:
 * In a sorted array where every element appears twice except one:
 * - Before the single element: (Even, Odd) index pairs match.
 * - After the single element: (Odd, Even) index pairs match.
 */

function singleNonDuplicate(nums) {
    let low = 0;
    let high = nums.length - 2; // Second last element

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Trick to find the pair: 
        // If mid is even, check mid + 1. 
        // If mid is odd, check mid - 1.
        // mid ^ 1 does exactly this!
        if (nums[mid] === nums[mid ^ 1]) {
            // We are in the left half, move right
            low = mid + 1;
        } else {
            // We are in the right half, move left
            high = mid - 1;
        }
    }

    return nums[low];
}

// Test Case
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Expected: 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));    // Expected: 10
