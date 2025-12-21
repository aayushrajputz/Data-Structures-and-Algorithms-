/**
 * Mock Interview: Find Peak Element
 * 
 * Rules:
 * 1. Find the index of ANY peak element.
 * 2. Time Complexity must be O(log N).
 * 3. A peak element is greater than its neighbors.
 */

function findPeakElement(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);

        // Slope Logic: Compare mid with its right neighbor
        if (nums[mid] < nums[mid + 1]) {
            // We are on an increasing slope. Peak is to the right.
            low = mid + 1;
        } else {
            // We are on a decreasing slope. Peak is to the left or IS mid.
            high = mid;
        }
    }

    // When low == high, we've found a peak.
    return low;
}

// Test Cases
console.log("Peak Index (Test 1):", findPeakElement([1, 2, 3, 1]));       // Expected: 2
console.log("Peak Index (Test 2):", findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Expected: 1 or 5
