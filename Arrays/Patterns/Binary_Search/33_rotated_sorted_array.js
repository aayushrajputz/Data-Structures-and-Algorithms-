function rotatedSortedArray(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) return mid;

        // Check if Left side is sorted
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // Right side is sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

// Check karne ke liye:
console.log("Test 1 (Target 0):", rotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Expected: 4
console.log("Test 2 (Target 3):", rotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Expected: -1
