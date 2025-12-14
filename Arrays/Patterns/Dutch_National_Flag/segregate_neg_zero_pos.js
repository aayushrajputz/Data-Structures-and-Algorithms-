function segregateNumbers(nums) {
    let low = 0;              // Tracks Negative (< 0)
    let mid = 0;              // Scanner
    let high = nums.length - 1; // Tracks Positive (> 0)

    while (mid <= high) {
        if (nums[mid] < 0) {
            // Case 1: Negative -> Send to Low
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }
        else if (nums[mid] === 0) {
            // Case 2: Zero -> Keep in Mid
            mid++;
        }
        else { // nums[mid] > 0
            // Case 3: Positive -> Send to High
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // NO mid++ here
        }
    }
    return nums;
}

let nums = [1, 0, -2, 5, 0, -1, 2];
console.log("Original:", nums);
segregateNumbers(nums);
console.log("Segregated:", nums);
