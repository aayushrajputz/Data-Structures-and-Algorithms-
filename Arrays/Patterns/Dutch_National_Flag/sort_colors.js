function sortColors(nums) {
    let low = 0;                // Tracks 0s (Red)
    let mid = 0;                // Scanner (White)
    let high = nums.length - 1; // Tracks 2s (Blue)

    // Loop until mid crosses high
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Case 0: Swap with Low, move both forward
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            // Case 1: Ideal place, just move forward
            mid++;
        }
        else {
            // Case 2: Swap with High, shrink High region
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // DO NOT move mid here, we need to check the swapped value
        }
    }
}

// Test Case
let nums = [2, 0, 2, 1, 1, 0];
console.log("Original:", nums);
sortColors(nums);
console.log("Sorted:  ", nums);
